/**
 * There are heavy issues in prototyping javascripts Object datatype.
 * It completly kill jQuery :-(
 * So a workaround is required to realize object extends
 *
 * Mybe it's better in future to seperate methods
 *
 * @param {Object} configuration the object to extends
 */
Template = function(config) {
	if ( config instanceof Object)
		this.config = config;
	else
		log('Cannot extend non objects with object methods');
};

/**
 * A more complex implementation of rendering HTML from an object
 * There is a implementation for renderiung strings into a
 templatestring and this method handle iteration for more complex HTML
 *
 * EXAMPLE:
 * First create a snippet object named oTpl.
 * Then define the tags you need there as below:
 * var oTpl = {
 *				H : '<h{NO} id="{ID}" class="{CLASSES}">{CONTENT}</h{NO}>',
 *
 *				TABLE : '<table id="{ID}"
 class="{CLASSES}"><thead>{HEAD}</thead><tbody>{BODY}</tbody></table>',
 *				TR : '<tr ID="{ID}" class="{CLASSES}">{TDS}</tr>',
 *				TH : '<th class="{CLASSES}">{CONTENT}</th>',
 *				TD : '<td class="{CLASSES}">{CONTENT}</td>',
 *
 *				IMG : '{BEFORE} <img id="{ID}" class="{CLASSES}" alt="{ALT}"
 src="{SRC}"/> {AFTER}',
 *
 *				TEXT : '{TEXT}'
 *			  };
 *
 * Then you can create your html e.g. an image like this way
 *
 * new Template({
 *				IMG : {
 *					BEFORE : 'A nice image',
 *					ID : 'my_nice_image',
 *					CLASSES : 'image file',
 *					ALT : 'The nice image alt',
 *					SRC : 'img/logo/logo.png'
 *				}
 *			   }).toHml()
 *
 * Outputs:
 * A nice image <img id="my_nice_image" class="image file" alt="The
 nice image alt" src="img/logo/logo.png"/>
 *
 *
 * And for a lit of images define it just as numeric array like this way:
 *
 *  * new Template({
 *				IMG : [
 * 						{
 *							BEFORE : 'First image',
 *							ID : 'first_image',
 *							CLASSES : 'image-file',
 *							ALT : 'First image',
 *							SRC : 'img/logo/logo.png'
 *					 	},
 * 						{
 *							BEFORE : 'Second image',
 *							ID : 'second_image',
 *							CLASSES : 'image-file',
 *							ALT : 'Second image',
 *							SRC : 'img/logo/logo2.png'
 *					 	}
 * 					]
 *			   }).toHml()
 *
 * <img id="first_image" class="image-file" alt="First image"
 src="img/logo/logo.png"/>
 * <img id="second_image" class="image-file" alt="Second image"
 src="img/logo/logo2.png"/>
 *
 * You can also create endles multidimensional configs because
 rendering works recursively
 * Example
 * {
 * 	DIV:{
 * 		 CONTENT:{
 * 				   IMG : {
 *			 			  BEFORE : 'First image',
 *			 			  ID : 'first_image',
 *			 			  CLASSES : 'image-file',
 *			 			  ALT : 'First image',
 *			 			  SRC : 'img/logo/logo.png'
 *						 }
 * 				}
 * 		}
 * }
 *
 *
 */
Template.prototype.toHtml = function() {
	try {
		var sReturn = '';
		for (var tplconf in this.config) {
			if (this.config[tplconf] instanceof Array) {
				for (var i = 0; i < this.config[tplconf].length; i++) {
					sReturn += new Template(JSON.parse('{"' + tplconf + '":' + JSON.stringify(this.config[tplconf][i]) + '}')).toHtml();
				}
			} else {
				for (var loca in this.config[tplconf]) {
					if ( typeof (this.config[tplconf][loca]) != 'object')
						continue;

					this.config[tplconf][loca] = new Template(this.config[tplconf][loca]).toHtml();
				}

				sReturn += oTpl[tplconf].toHtml(this.config[tplconf]);
			}
		}
		return sReturn;
	} catch(e) {
		log(e);
	}
};