/*global $*/
/*global CONF*/
/*global Template*/
var Post;
(function () {
    "use strict";
    /**
     * The Post handles extends round a post on screen masterclass
     * Creates the Templates engine required object to create the postwindow with all required bindings (Plugins later...)
     * @module Client
     * @submodule Classes
     * @class Post
     * @constructor
     * @param {Object} oPost
     */
    Post = function (oPost) {

        this.oPost = ( oPost !== undefined) ? oPost : false;
    };

    /**
     * Get the selected post color
     * @method getColor
     * @return {String} The detected color
     */
    Post.prototype.getColor = function () {
        var i;
        var sMatchedColor = false;

        for (i = 0; i < CONF.PROPS.ARRAY.COLORS.length; i += 1) {
            if (this.oPost.hasClass(CONF.PROPS.ARRAY.COLORS[i])) {
                sMatchedColor = CONF.PROPS.ARRAY.COLORS[i];
            }
        }

        return sMatchedColor;
    };

    /**
     * Get the selected posts ID
     * @method getId
     * @return {String|null}
     */
    Post.prototype.getId = function () {
        return this.oPost.attr('id') || null;
    };


    /**
     * Get the ASCII Text content from a postit
     * @method getContent
     * @return {String} The content of a post
     */
    Post.prototype.getContent = function () {
        var oTempContent;
        var oContent = this.oPost.children('.content').children('p');

        $('<div/>', {
            id: 'temp_content_grep',
            html: oContent.html()
        }).appendTo(oContent);

        oTempContent = $('#temp_content_grep');

        $.each(oTempContent.find('a'), function () {
            $(this).after($(this).attr('href'));
            $(this).remove();
        });

        $.each(oTempContent.find('iframe'), function () {
            $(this).after($(this).attr('src'));
            $(this).remove();
        });

        var sHtml = oTempContent.html();
        oTempContent.remove();
        return sHtml;
    };

    /**
     * Create the toolbar for a visible post
     * @method getTools
     * @return {String|*} The rendered toolbar
     */
    Post.prototype.getTools = function () {

        // Remove functions which was placed before (uniquity required)
        $('#post-functions').remove();

        return new Template({
            DIV: {
                ID: 'post-functions',
                CONTENT: {
                    LINK: [
                        {
                            ID: 'edit',
                            CLASSES: 'post-function',
                            URL: '#'
                        },
                        {
                            ID: 'move',
                            CLASSES: 'post-function',
                            URL: '#'
                        },
                        {
                            ID: 'callendar',
                            CLASSES: 'post-function',
                            URL: '#'
                        },
                        {
                            ID: 'delete',
                            CLASSES: 'post-function',
                            URL: '#'
                        }
                    ]
                }
            }
        }).toHtml();
    };
})();