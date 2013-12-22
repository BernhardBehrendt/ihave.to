/*global _*/
/*global console*/
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
     */
    Timeline = function (oScreen) {
        this.screen = oScreen;
    };


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
     * @property timelineView
     * @type {Object}
     */
    Timeline.prototype.timelineView = null;


    /**
     * Extract the whole timespan from currently active screen
     *
     * @method getTimespan
     * @return {Object} The timeline OMM
     */
    Timeline.prototype.getTimespan = function () {
        var iTimestamp;
        var aTimestamps = [];

        for (iTimestamp in this.screen) {
            if (this.screen.hasOwnProperty(iTimestamp)) {
                aTimestamps.push(parseInt(iTimestamp, 10));
            }
        }

        this.timelineView = aTimestamps;

        return this;
    };

    /**
     * Deliver the timeline Model
     *
     * @method getTimelineModel
     * @return {Object} The timeline OMM
     */
    Timeline.prototype.getTimelineModel = function () {
        console.log(this.timelineView);

        var iFirst = _.first(this.timelineView);
        var iLast = _.last(this.timelineView);

        console.log((((iLast - iFirst) / 1000) / 60 / 60 / 24) + 'Tage zeitspanne');
        console.log(new Date(iFirst));
        return this.timelineView;
    };
})();