/**
 * The Post handles extends round a post on screen masterclass
 * Creates the Templates engine required object to create the postwindow with all required bindings (Plugins later...)
 * @requires Template The default TEmplate engine
 * @param {Object} config
 */

Post = function(oPost) {

	this.oPost = ( typeof (oPost) != CONF.PROPS.STRING.UD) ? oPost : false;

	/**
	 * Methods only define if a Post was given
	 */
	if (this.oPost) {
		/**
		 * Get the color of an selected post
		 */
		this.getColor = function() {

			for (var index in CONF.PROPS.ARRAY.COLORS) {
				if (this.oPost.is('.' + CONF.PROPS.ARRAY.COLORS[index]))
					return CONF.PROPS.ARRAY.COLORS[index];

			}
		};

		/**
		 * Get the ASCII Text content from a postit
		 */
		this.getContent = function() {
			var oContent = this.oPost.children('.content').children('p');
			oContent.append('<div id="temp_content_grep">' + oContent.html() + '</div>');

			$.each($('#temp_content_grep').find('a'), function() {
				$(this).after($(this).attr('href'));
				$(this).remove();
			});

			$.each($('#temp_content_grep').find('iframe'), function() {
				$(this).after($(this).attr('src'));
				$(this).remove();
			});

			var sHtml = $('#temp_content_grep').text().br2nl();

			$('#temp_content_grep').remove();

			return sHtml;
		};

		/**
		 * the Post id (proxy)
		 */
		this.getId = function() {
			return this.oPost.attr('id');
		};
	}
};

Post.prototype.getTools = function() {
	// Remove functions which was placed before (uniquity required)
	$('#post-functions').remove();

	return new Template({
		DIV : {
			ID : 'post-functions',
			CONTENT : {
				LINK : [{
					ID : 'edit',
					CLASSES : 'post-function',
					URL : '#'
				}, {
					ID : 'move',
					CLASSES : 'post-function',
					URL : '#'
				}, {
					ID : 'callendar',
					CLASSES : 'post-function',
					URL : '#'
				}, {
					ID : 'delete',
					CLASSES : 'post-function',
					URL : '#'
				}]
			}
		}
	}).toHtml();
};
