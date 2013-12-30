/*global _*/
/*global console*/
/*global Template*/
var Timeline;
(function () {
    "use strict";

    /**
     *
     * @module Client
     * @submodule Classes
     * @class Timeline
     * @constructor
     * @param {Object} oScreen The currently active screen instance
     * @param {Object} legend The memo color lsit to create a legend
     */
    Timeline = function (oScreen, legend) {
        this.screen = oScreen;
        this.legend = legend;

        this.getTimespan();
        this.getMemoIdList();
    };


    /**
     * The legend which explain about the timeline color meanings
     *
     * @property legend
     * @type {Object}
     */
    Timeline.prototype.legend = null;

    /**
     * The last detected line color
     *
     *
     *
     * @property sLastColor
     * @type {String}
     */
    Timeline.prototype.sLastColor = '';

    /**
     * The marker for timeline delta times
     *
     * @property lastMarker
     * @type {Number}
     */
    Timeline.prototype.lastMarker = 0;

    /**
     * The legend which explain about the timeline color meanings
     *
     * @property legend
     * @type {Object}
     */
    Timeline.prototype.memoIdList = [];

    /**
     * The currently active screen instance
     *
     * @property screen
     * @type {Object}
     */
    Timeline.prototype.screen = null;

    /**
     * The OMM model for the whole timeline view
     *
     * @property timeStamps
     * @type {Object}
     */
    Timeline.prototype.timeStamps = [];

    /**
     * The OMM model for the whole timeline view
     *
     * @property timelineView
     * @type {Object}
     */
    Timeline.prototype.timelineView = null;

    /**
     * Fetch all TGT Ids from current screen
     *
     * @method getMemoIdList
     *
     */
    Timeline.prototype.getMemoIdList = function () {
        var iTime;

        for (iTime in this.screen) {
            if (this.screen.hasOwnProperty(iTime)) {
                if (this.screen[iTime] instanceof Array) {
                    if (this.screen[iTime][0].TGT !== undefined && this.memoIdList.indexOf(this.screen[iTime][0].TGT) === -1) {
                        this.memoIdList.push(this.screen[iTime][0].TGT);
                    }
                } else if (this.screen[iTime].TGT !== undefined && this.memoIdList.indexOf(this.screen[iTime].TGT) === -1) {
                    this.memoIdList.push(this.screen[iTime].TGT);
                }
            }
        }
    };

    /**
     * Extract the whole timespan from currently active screen
     *
     * @method getLegend
     * @return {Object} The timeline OMM
     */
    Timeline.prototype.getLegend = function () {
        var sColor;
        var sLegendText;
        var oLegend = {SPAN: []};

        if (this.legend !== undefined) {
            for (sColor in this.legend) {
                if (this.legend.hasOwnProperty(sColor)) {
                    sLegendText = this.legend[sColor] || '-';
                    oLegend.SPAN.push({
                        CLASS: sColor.toLowerCase(),
                        INSERT: sLegendText.capitalize()
                    });
                }
            }

        }
        return {
            CONTENT: oLegend,
            CLASSES: 'legend'
        };

    };


    /**
     * Create the whole lifecycle list
     *
     * @method getLifecycles
     * @return {Object} The lifecycles OMM
     */
    Timeline.prototype.getLifecycles = function () {
        var i;
        var oLifeCycles = {DIV: []};
        var oLifecycles;

        for (i = 0; i < this.memoIdList.length; i += 1) {
            oLifeCycles.DIV.push(this.getLifecycle(this.memoIdList[i]));
        }

        oLifeCycles.DIV.reverse();

        oLifecycles = {
            CONTENT: oLifeCycles,
            CLASSES: 'lifecycles'
        };
        return oLifecycles;
    };

    /**
     * Create the lifecycle for a single memo
     *
     * @method getLegend
     * @return {Object} The lifecycle OMM
     */
    Timeline.prototype.getLifecycle = function (sMemoId) {
        var iTimeStamp;
        var oChangeOml = false;
        var oLifeCycle = {
            ID: 'change_on_' + sMemoId,
            CLASSES: 'memo',
            CONTENT: {
                DIV: []
            }
        };

        this.handleDeltaTime(0);

        for (iTimeStamp in this.screen) {
            if (this.screen.hasOwnProperty(iTimeStamp)) {

                if (this.screen[iTimeStamp] instanceof Array && this.screen[iTimeStamp][0].TGT === sMemoId) {
                    oChangeOml = this.getChange(this.screen[iTimeStamp], iTimeStamp)
                } else if (this.screen[iTimeStamp].TGT === sMemoId) {
                    oChangeOml = this.getChange(this.screen[iTimeStamp], iTimeStamp);
                }


                if (oChangeOml !== false) {
                    oLifeCycle.CONTENT.DIV.push(oChangeOml);
                    oChangeOml = false;
                }
            }
        }

        oLifeCycle.STYLE = 'width:auto';

        return oLifeCycle;
    };


    /**
     * Determine the delta between a previous stored and a given one
     * Set the given one to delta for later comparsion
     *
     * @method handleDeltaTime
     * @param {Number} iDeltaTime The time to compare with last value
     * @return {Number} The delta between last value and given value
     */
    Timeline.prototype.handleDeltaTime = function (iDeltaTime) {
        var iDelta;

        if (this.lastMarker === 0) {
            iDelta = 0;
        } else {
            iDelta = iDeltaTime - this.lastMarker;
        }

        this.lastMarker = iDeltaTime;
        console.log(iDelta);
        return iDelta;
    };

    /**
     * Create a lifecycle entry
     *
     * @method getChange
     * @param {Object} oMemo The memo change object
     * @param {Number} iChangeTime The memo hange time
     * @return {Object} The changes OMM
     */
    Timeline.prototype.getChange = function (oMemo, iChangeTime) {
        var i;
        var sChanges = '';
        var aNonTimelineChanges = ['position'];
        var oChange;
        if (oMemo instanceof Array) {
            for (i = 0; i < oMemo.length; i += 1) {
                sChanges += oMemo[i].ACN + ' ';

                if (oMemo[i].ACN === 'color') {
                    // sChanges += oMemo[i].TO + ' ';
                    this.sLastColor = oMemo[i].TO;
                }
            }
        } else if (aNonTimelineChanges.indexOf(oMemo.ACN) === -1) {
            sChanges += oMemo.ACN + ' ';

            if (oMemo.ACN === 'color') {
                //sChanges += oMemo.TO + ' ';
                this.sLastColor = oMemo.TO;
            }
        } else {
            oChange = false;
        }

        if (oChange === undefined) {
            // Outer div with a calculated width with line background
            oChange = {
                ID: iChangeTime,
                CLASSES: 'change ' + this.sLastColor,
                STYLE: "width:" + (this.handleDeltaTime(iChangeTime) / 100000) + "px",
                CONTENT: {
                    DIV: {
                        CLASSES: 'icon ' + sChanges
                    }
                }
            };
        }

        return oChange;
    };

    /**
     * Extract the whole timespan from currently active screen
     *
     * @method getTimespan
     * @return {Object} The timeline OMM
     */
    Timeline.prototype.getTimespan = function () {
        var iTimestamp;

//        alert(JSON.stringify(this.screen) + 'xx');

        for (iTimestamp in this.screen) {
            if (this.screen.hasOwnProperty(iTimestamp)) {
                this.timeStamps.push(parseInt(iTimestamp, 10));
            }
        }

        return this;
    };

    /**
     * Deliver the timeline
     *
     * @method getTimestream
     * @return {Object} The timeline OMM
     */
    Timeline.prototype.getTimestream = function () {


        var iFirst = _.first(this.timeStamps);
        var iLast = _.last(this.timeStamps);

        console.log((((iLast - iFirst) / 1000) / 60 / 60 / 24) + 'Tage zeitspanne');
        return this.timelineView;
    };

    /**
     * Render the timlineView
     *
     * @method render
     * @return {String} The timeline HTML representation
     */
    Timeline.prototype.render = function () {
        var oOmmTl = {DIV: []};

        oOmmTl.DIV.push(this.getLegend());
        oOmmTl.DIV.push(this.getLifecycles());
        oOmmTl.DIV.push(this.getTimestream());

        var oTpl = new Template(oOmmTl);


        return oTpl.toHtml();
    };
})();