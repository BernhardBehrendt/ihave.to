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

        console.log(this.memoIdList);
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
        var oLifeCycle = {
            ID: 'change_on_' + sMemoId,
            CLASSES: 'memo',
            CONTENT: {
                DIV: []
            }
        };

        for (iTimeStamp in this.screen) {
            if (this.screen.hasOwnProperty(iTimeStamp)) {
                if (this.screen[iTimeStamp] instanceof Array && this.screen[iTimeStamp][0].TGT === sMemoId) {
                    oLifeCycle.CONTENT.DIV.push(this.getChange(this.screen[iTimeStamp]));
                } else if (this.screen[iTimeStamp].TGT === sMemoId) {
                    oLifeCycle.CONTENT.DIV.push(this.getChange(this.screen[iTimeStamp]));
                }
            }
        }

        oLifeCycle.STYLE = 'width:' + (oLifeCycle.CONTENT.DIV.length * 34) + 'px';

        return oLifeCycle;
    };

    /**
     * Create a lifecycle entry
     *
     * @method getChange
     * @return {Object} The changes OMM
     */
    Timeline.prototype.getChange = function (oMemo) {
        var i;
        var sChanges = 'change ';

        if (oMemo instanceof Array) {
            for (i = 0; i < oMemo.length; i += 1) {
                sChanges += oMemo[i].ACN + ' ';

                if (oMemo[i].ACN === 'color') {
                    sChanges += oMemo[i].TO + ' ';
                }
            }
        } else {
            sChanges += oMemo.ACN + ' ';

            if (oMemo.ACN === 'color') {
                sChanges += oMemo.TO + ' ';
            }
        }

        return {
            CONTENT: 'X',
            CLASSES: sChanges
        }
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
})
    ();