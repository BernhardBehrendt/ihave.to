/*global $*/
/*global CONF*/
/*global Template*/
var Post;
(function () {
    "use strict";
    /**
     * The Post handles extends round a post on screen masterclass
     * Creates the Templates engine required object to create the postwindow with all required bindings (Plugins later...)
     * @requires Template The default TEmplate engine
     * @param {Object} oPost
     */
    Post = function (oPost) {


        this.oPost = ( oPost !== undefined) ? oPost : false;

        if (this.oPost) {
            /**
             * the Post id (proxy)
             */
            /**
             * Get the color of an selected post
             */
            this.getColor = function () {
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
             * Get the ASCII Text content from a postit
             */
            this.getContent = function () {
                var oContent = this.oPost.children('.content').find('p');
                var oTempContent = $('#temp_content_grep');

                $('<div/>', {
                    id: 'temp_content_grep',
                    html: oContent.html()
                }).appendTo(oContent);

                $.each(oTempContent.find('a'), function () {
                    $(this).after($(this).attr('href'));
                    $(this).remove();
                });

                $.each(oTempContent.find('iframe'), function () {
                    $(this).after($(this).attr('src'));
                    $(this).remove();
                });

                var sHtml = oTempContent.text().br2nl();
                oTempContent.remove();

                return sHtml;
            };

            this.getId = function () {
                return this.oPost.attr('id');
            };
        }
    };

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