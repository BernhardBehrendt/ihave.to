/*global log*/
/*global alert*/

var Template;
(function () {
    "use strict";

    /**
     * Class for OOP based HTML creation
     * Version 0.99
     *
     * Licensed under the MIT license <http://www.opensource.org/licenses/mit-license.php>
     *
     * This class enables you to create Simple json objects and parse them to HTML at runtime.
     * The currently complete HTML tag reference including their complete attributes is build in this class.
     * It's also possible to extend the given configuration and/or override complete tags
     * with own templates (e.g. for custom attributes).
     *
     * EXAMPLES:
     *
     * 1) CREATE A LINK:
     * new Template({
     *       A : {
     *         ID : 'myLink',
     *         CLASS : 'a b c',
     *         HREF : '#',
     *         INSERT : 'My first link using this Templateengine'
     *      }
     *    }).toHtml()
     *
     * Produces:
     * <a href="#" class="a b c" id="myLink">My first link using this Templateengine</a>
     *
     *
     * CREATE A CUSTOM TEMPLATE (LINK WITH IMAGE)
     * var oTpl = new Template().extTpls({
     *             IMGLINK : '<a href="{IMAGEURL}" class="imagelink" id="{IMGLINK}"><img scr="{IMAGEURL}" alt="{ALTTEXT}"/></a>'
     *            });
     *
     * oTpl.setConfig({
     *   IMGLINK : {
     *      IMGLINKID : 'myId',
     *      IMAGEURL : 'url_to_my_image',
     *      ALTTEXT : 'an image'
     *   }
     * }).toHtml();
     *
     * Also this type of writing is possible:
     * new Template()
     *     .extTpls({IMGLINK : '<a href="{IMAGEURL}" class="imagelink" id="{IMGLINK}"><img scr="{IMAGEURL}" alt="{ALTTEXT}"/></a>'})
     *     .setConfig({IMGLINK : {IMGLINKID : 'myId',IMAGEURL : 'url_to_my_image',ALTTEXT : 'an image'}})
     *     .toHtml();
     *
     * Produces:
     * <a href="url_to_my_image" class="imagelink"><img scr="url_to_my_image" alt="an image"/></a>
     *
     *
     *
     *
     * @author  Bernhard Bezdek
     * @module ToolBox
     * @submodule TemplateEngine
     * @class Template
     * @constructor
     * @param {Object} config the template configuration to be rendered
     * @param {Boolean} debug determine if the debugger output is enabled (log function required required)
     */
    Template = function (config, debug) {
        // the Storage for the HTML Template Strings
        this.oTpls = false;
        // Determine if there should come any debug messages
        this.debug = debug;

        if (this.debug !== true) {
            this.debug = false;
        }

        // Detect if logging is enabled if a function log is available
        if (this.debug === true && typeof (log) !== 'function') {
            alert('FOR DEBUGGING A FUNCTION NAMED LOG IS REQUIRED [function log(message, msgtype);]');
            this.debug = false;
        }

        // The data to be rendered as a template
        this.config = false;

        // Set the configuration for current HTML Code generation
        if (config !== undefined) {
            this.setConfig(config);
        }

        // Set default HTML Teplateset (override is possible)
        if (!this.getTpls()) {
            // A (hopefully) complete HTML Reference
            // But extends are posible of cours via extend method
            this.setTpls({
                ABBR: "{BEFORE}<abbr accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</abbr>{AFTER}",
                ADDRESS: "{BEFORE}<address accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</address>{AFTER}",
                AREA: "{BEFORE}<area alt=\"{ALT}\" coords=\"{COORDS}\" shape=\"{SHAPE}\" href=\"{HREF}\" target=\"{TARGET}\" ping=\"{PING}\" rel=\"{REL}\" media=\"{MEDIA}\" hreflang=\"{HREFLANG}\" type=\"{TYPE}\" accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" />{AFTER}",
                A: "{BEFORE}<a href=\"{HREF}\" target=\"{TARGET}\" ping=\"{PING}\" rel=\"{REL}\" media=\"{MEDIA}\" hreflang=\"{HREFLANG}\" type=\"{TYPE}\" accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</a>{AFTER}",
                ARTICLE: "{BEFORE}<article accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</article>{AFTER}",
                ASIDE: "{BEFORE}<aside accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</aside>{AFTER}",
                AUDIO: "{BEFORE}<audio src=\"{SRC}\" crossorigin=\"{CROSSORIGIN}\" preload=\"{PRELOAD}\" autoplay=\"{AUTOPLAY}\" mediagroup=\"{MEDIAGROUP}\" loop=\"{LOOP}\" controls=\"{CONTROLS}\" accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</audio>{AFTER}",
                B: "{BEFORE}<b accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</b>{AFTER}",
                BASE: "{BEFORE}<base />{AFTER}",
                BDI: "{BEFORE}<bdi none*=\"{NONE*}\" accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</bdi>{AFTER}",
                BDO: "{BEFORE}<bdo dir*=\"{DIR*}\" accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</bdo>{AFTER}",
                BLOCKQUOTE: "{BEFORE}<blockquote cite=\"{CITE}\" accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</blockquote>{AFTER}",
                BODY: "{BEFORE}<body >{INSERT}</body>{AFTER}",
                BR: "{BEFORE}<br accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" />{AFTER}",
                BUTTON: "{BEFORE}<button autofocus=\"{AUTOFOCUS}\" disabled=\"{DISABLED}\" form=\"{FORM}\" formaction=\"{FORMACTION}\" formenctype=\"{FORMENCTYPE}\" formmethod=\"{FORMMETHOD}\" formnovalidate=\"{FORMNOVALIDATE}\" formtarget=\"{FORMTARGET}\" name=\"{NAME}\" type=\"{TYPE}\" value=\"{VALUE}\" accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</button>{AFTER}",
                CANVAS: "{BEFORE}<canvas >{INSERT}</canvas>{AFTER}",
                CAPTION: "{BEFORE}<caption accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</caption>{AFTER}",
                CITE: "{BEFORE}<cite accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</cite>{AFTER}",
                CODE: "{BEFORE}<code accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</code>{AFTER}",
                COL: "{BEFORE}<col span=\"{SPAN}\" accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</col>{AFTER}",
                COLGROUP: "{BEFORE}<colgroup span=\"{SPAN}\" accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</colgroup>{AFTER}",
                COMMAND: "{BEFORE}<command type=\"{TYPE}\" label=\"{LABEL}\" icon=\"{ICON}\" disabled=\"{DISABLED}\" checked=\"{CHECKED}\" radiogroup=\"{RADIOGROUP}\" command=\"{COMMAND}\" title=\"{TITLE}\" accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" />{AFTER}",
                DATA: "{BEFORE}<data value=\"{VALUE}\" accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</data>{AFTER}",
                DATAGRID: "{BEFORE}<datagrid disabled=\"{DISABLED}\" multiple=\"{MULTIPLE}\" accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</datagrid>{AFTER}",
                DATALIST: "{BEFORE}<datalist data=\"{DATA}\" accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</datalist>{AFTER}",
                DD: "{BEFORE}<dd accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</dd>{AFTER}",
                DEL: "{BEFORE}<del cite=\"{CITE}\" datetime=\"{DATETIME}\" accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</del>{AFTER}",
                DFN: "{BEFORE}<dfn None, but the title attribute has special semantics for this element. If the <dfn> tag has a title attribute, then the exact value of that attribute is the term being defined.=\"{NONE, BUT THE TITLE ATTRIBUTE HAS SPECIAL SEMANTICS FOR THIS ELEMENT. IF THE <DFN> TAG HAS A TITLE ATTRIBUTE, THEN THE EXACT VALUE OF THAT ATTRIBUTE IS THE TERM BEING DEFINED.}\" accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</dfn>{AFTER}",
                DL: "{BEFORE}<dl accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</dl>{AFTER}",
                DETAILS: "{BEFORE}<details open=\"{OPEN}\" accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</details>{AFTER}",
                DIV: "{BEFORE}<div accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</div>{AFTER}",
                DT: "{BEFORE}<dt accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</dt>{AFTER}",
                EM: "{BEFORE}<em accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</em>{AFTER}",
                EVENTSOURCE: "{BEFORE}<eventsource src=\"{SRC}\" accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" />{AFTER}",
                EMBED: "{BEFORE}<embed src=\"{SRC}\" type=\"{TYPE}\" width=\"{WIDTH}\" height=\"{HEIGHT}\" accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" />{AFTER}",
                FIELDSET: "{BEFORE}<fieldset disabled=\"{DISABLED}\" form=\"{FORM}\" name=\"{NAME}\" accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</fieldset>{AFTER}",
                FIGCAPTION: "{BEFORE}<figcaption accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</figcaption>{AFTER}",
                FIGURE: "{BEFORE}<figure accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</figure>{AFTER}",
                FOOTER: "{BEFORE}<footer >{INSERT}</footer>{AFTER}",
                FORM: "{BEFORE}<form accept-charset=\"{ACCEPT-CHARSET}\" action=\"{ACTION}\" autocomplete=\"{AUTOCOMPLETE}\" enctype=\"{ENCTYPE}\" method=\"{METHOD}\" name=\"{NAME}\" novalidate=\"{NOVALIDATE}\" target=\"{TARGET}\" accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</form>{AFTER}",
                H1: "{BEFORE}<h1 accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</h1>{AFTER}",
                H2: "{BEFORE}<h2 accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</h2>{AFTER}",
                H3: "{BEFORE}<h3 accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</h3>{AFTER}",
                H4: "{BEFORE}<h4 accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</h4>{AFTER}",
                H5: "{BEFORE}<h5 accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</h5>{AFTER}",
                H6: "{BEFORE}<h6 accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</h6>{AFTER}",
                HEAD: "{BEFORE}<head >{INSERT}</head>{AFTER}",
                HEADER: "{BEFORE}<header >{INSERT}</header>{AFTER}",
                HGROUP: "{BEFORE}<hgroup >{INSERT}</hgroup>{AFTER}",
                HR: "{BEFORE}<hr accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" />{AFTER}",
                HTML: "{BEFORE}<html >{INSERT}</html>{AFTER}",
                I: "{BEFORE}<i accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</i>{AFTER}",
                IFRAME: "{BEFORE}<iframe src=\"{SRC}\" srcdoc=\"{SRCDOC}\" name=\"{NAME}\" sandbox=\"{SANDBOX}\" seamless=\"{SEAMLESS}\" width=\"{WIDTH}\" height=\"{HEIGHT}\" accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</iframe>{AFTER}",
                IMG: "{BEFORE}<img alt=\"{ALT}\" src=\"{SRC}\" crossorigin=\"{CROSSORIGIN}\" ismap=\"{ISMAP}\" usemap=\"{USEMAP}\" width=\"{WIDTH}\" height=\"{HEIGHT}\" accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" />{AFTER}",
                INS: "{BEFORE}<ins cite=\"{CITE}\" datetime=\"{DATETIME}\" accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</ins>{AFTER}",
                INPUT: "{BEFORE}<input accept=\"{ACCEPT}\" alt=\"{ALT}\" autocomplete=\"{AUTOCOMPLETE}\" autofocus=\"{AUTOFOCUS}\" checked=\"{CHECKED}\" disabled=\"{DISABLED}\" dirname=\"{DIRNAME}\" form=\"{FORM}\" formaction=\"{FORMACTION}\" formenctype=\"{FORMENCTYPE}\" formmethod=\"{FORMMETHOD}\" formnovalidate=\"{FORMNOVALIDATE}\" formtarget=\"{FORMTARGET}\" height=\"{HEIGHT}\" list=\"{LIST}\" max=\"{MAX}\" maxlength=\"{MAXLENGTH}\" min=\"{MIN}\" multiple=\"{MULTIPLE}\" name=\"{NAME}\" pattern=\"{PATTERN}\" placeholder=\"{PLACEHOLDER}\" readonly=\"{READONLY}\" required=\"{REQUIRED}\" size=\"{SIZE}\" src=\"{SRC}\" step=\"{STEP}\" type=\"{TYPE}\" value=\"{VALUE}\" width=\"{WIDTH}\" accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" />{AFTER}",
                KBD: "{BEFORE}<kbd accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</kbd>{AFTER}",
                KEYGEN: "{BEFORE}<keygen autofocus=\"{AUTOFOCUS}\" challenge=\"{CHALLENGE}\" disabled=\"{DISABLED}\" form=\"{FORM}\" keytype=\"{KEYTYPE}\" name=\"{NAME}\" accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" />{AFTER}",
                LABEL: "{BEFORE}<label for=\"{FOR}\" form=\"{FORM}\" accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</label>{AFTER}",
                LEGEND: "{BEFORE}<legend none=\"{NONE}\" accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</legend>{AFTER}",
                LI: "{BEFORE}<li value=\"{VALUE}\" accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</li>{AFTER}",
                MARK: "{BEFORE}<mark accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</mark>{AFTER}",
                LINK: "{BEFORE}<link />{AFTER}",
                MAP: "{BEFORE}<map name=\"{NAME}\" accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</map>{AFTER}",
                MENU: "{BEFORE}<menu type=\"{TYPE}\" label=\"{LABEL}\" accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</menu>{AFTER}",
                META: "{BEFORE}<meta />{AFTER}",
                METER: "{BEFORE}<meter value=\"{VALUE}\" min=\"{MIN}\" low=\"{LOW}\" high=\"{HIGH}\" max=\"{MAX}\" optimum=\"{OPTIMUM}\" accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</meter>{AFTER}",
                NOSCRIPT: "{BEFORE}<noscript accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</noscript>{AFTER}",
                NAV: "{BEFORE}<nav accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</nav>{AFTER}",
                OBJECT: "{BEFORE}<object data=\"{DATA}\" type=\"{TYPE}\" typemustmatch=\"{TYPEMUSTMATCH}\" name=\"{NAME}\" usemap=\"{USEMAP}\" form=\"{FORM}\" width=\"{WIDTH}\" height=\"{HEIGHT}\" accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</object>{AFTER}",
                OL: "{BEFORE}<ol reversed=\"{REVERSED}\" start=\"{START}\" type=\"{TYPE}\" accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</ol>{AFTER}",
                OPTGROUP: "{BEFORE}<optgroup disabled=\"{DISABLED}\" label=\"{LABEL}\" accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</optgroup>{AFTER}",
                OPTION: "{BEFORE}<option disabled=\"{DISABLED}\" label=\"{LABEL}\" selected=\"{SELECTED}\" value=\"{VALUE}\" accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</option>{AFTER}",
                P: "{BEFORE}<p accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</p>{AFTER}",
                OUTPUT: "{BEFORE}<output for=\"{FOR}\" form=\"{FORM}\" name=\"{NAME}\" accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" />{AFTER}",
                PARAM: "{BEFORE}<param name=\"{NAME}\" value=\"{VALUE}\" accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" />{AFTER}",
                PRE: "{BEFORE}<pre accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</pre>{AFTER}",
                PROGRESS: "{BEFORE}<progress value=\"{VALUE}\" max=\"{MAX}\" accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</progress>{AFTER}",
                Q: "{BEFORE}<q cite=\"{CITE}\" accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</q>{AFTER}",
                RUBY: "{BEFORE}<ruby none=\"{NONE}\" accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</ruby>{AFTER}",
                RP: "{BEFORE}<rp none=\"{NONE}\" accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</rp>{AFTER}",
                RT: "{BEFORE}<rt none=\"{NONE}\" accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</rt>{AFTER}",
                S: "{BEFORE}<s accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</s>{AFTER}",
                SAMP: "{BEFORE}<samp accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</samp>{AFTER}",
                SCRIPT: "{BEFORE}<script src=\"{SRC}\" async=\"{ASYNC}\" defer=\"{DEFER}\" type=\"{TYPE}\" charset=\"{CHARSET}\" accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</script>{AFTER}",
                SECTION: "{BEFORE}<section accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</section>{AFTER}",
                SELECT: "{BEFORE}<select autofocus=\"{AUTOFOCUS}\" disabled=\"{DISABLED}\" form=\"{FORM}\" multiple=\"{MULTIPLE}\" name=\"{NAME}\" size=\"{SIZE}\" accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</select>{AFTER}",
                SMALL: "{BEFORE}<small accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</small>{AFTER}",
                SOURCE: "{BEFORE}<source src=\"{SRC}\" type=\"{TYPE}\" media=\"{MEDIA}\" accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" />{AFTER}",
                SPAN: "{BEFORE}<span accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</span>{AFTER}",
                STRONG: "{BEFORE}<strong accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</strong>{AFTER}",
                STYLE: "{BEFORE}<style >{INSERT}</style>{AFTER}",
                SUB: "{BEFORE}<sub accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</sub>{AFTER}",
                SUMMARY: "{BEFORE}<summary accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</summary>{AFTER}",
                SUP: "{BEFORE}<sup accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</sup>{AFTER}",
                TABLE: "{BEFORE}<table border=\"{BORDER}\" accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</table>{AFTER}",
                TBODY: "{BEFORE}<tbody accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</tbody>{AFTER}",
                TD: "{BEFORE}<td colspan=\"{COLSPAN}\" rowspan=\"{ROWSPAN}\" headers=\"{HEADERS}\" accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</td>{AFTER}",
                TEXTAREA: "{BEFORE}<textarea autofocus=\"{AUTOFOCUS}\" disabled=\"{DISABLED}\" dirname=\"{DIRNAME}\" form=\"{FORM}\" maxlength=\"{MAXLENGTH}\" name=\"{NAME}\" placeholder=\"{PLACEHOLDER}\" readonly=\"{READONLY}\" required=\"{REQUIRED}\" rows=\"{ROWS}\" cols=\"{COLS}\" wrap=\"{WRAP}\" accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</textarea>{AFTER}",
                TFOOT: "{BEFORE}<tfoot accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</tfoot>{AFTER}",
                TH: "{BEFORE}<th colspan=\"{COLSPAN}\" rowspan=\"{ROWSPAN}\" headers=\"{HEADERS}\" scope=\"{SCOPE}\" accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</th>{AFTER}",
                THEAD: "{BEFORE}<thead accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</thead>{AFTER}",
                TIME: "{BEFORE}<time datetime=\"{DATETIME}\" accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</time>{AFTER}",
                TITLE: "{BEFORE}<title >{INSERT}</title>{AFTER}",
                TR: "{BEFORE}<tr accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</tr>{AFTER}",
                TRACK: "{BEFORE}<track kind=\"{KIND}\" src=\"{SRC}\" srclang=\"{SRCLANG}\" label=\"{LABEL}\" default=\"{DEFAULT}\" accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" />{AFTER}",
                UL: "{BEFORE}<ul accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</ul>{AFTER}",
                VAR: "{BEFORE}<var accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</var>{AFTER}",
                VIDEO: "{BEFORE}<video src=\"{SRC}\" crossorigin=\"{CROSSORIGIN}\" poster=\"{POSTER}\" preload=\"{PRELOAD}\" autoplay=\"{AUTOPLAY}\" mediagroup=\"{MEDIAGROUP}\" loop=\"{LOOP}\" muted=\"{MUTED}\" controls=\"{CONTROLS}\" width=\"{WIDTH}\" height=\"{HEIGHT}\" accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" >{INSERT}</video>{AFTER}",
                WBR: "{BEFORE}<wbr accesskey=\"{ACCESSKEY}\" hidden=\"{HIDDEN}\" itemtype=\"{ITEMTYPE}\" class=\"{CLASS}\" id=\"{ID}\" lang=\"{LANG}\" contenteditable=\"{CONTENTEDITABLE}\" inert=\"{INERT}\" spellcheck=\"{SPELLCHECK}\" contextmenu=\"{CONTEXTMENU}\" itemid=\"{ITEMID}\" style=\"{STYLE}\" dir=\"{DIR}\" itemprop=\"{ITEMPROP}\" tabindex=\"{TABINDEX}\" draggable=\"{DRAGGABLE}\" itemref=\"{ITEMREF}\" title=\"{TITLE}\" dropzone=\"{DROPZONE}\" itemscope=\"{ITEMSCOPE}\" translate=\"{TRANSLATE}\" />{AFTER}"
            });
        }

        this.extTpls({
            H: '{BEFORE}<h{NO} id="{ID}" class="{CLASSES}">{CONTENT}</h{NO}>{AFTER}',
            LINK: '<a id="{ID}" class="{CLASSES}" href="{URL}" title="{TITLE}" target="{TARGET}">{CONTENT}</a>',
            FORM: '<form method="{METHOD}" action="{ACTION}" id="{ID}">{CONTENT}</form>',
            INPUT: '<input type="{TYPE}" value="{VALUE}" id="{ID}" name="{NAME}" class="{CLASSES}" maxlength="{MAXLENGTH}"/>',
            LABEL: '{BEFORE}<label for="{FOR}" classes="{CLASSES}">{CONTENT}</label>{AFTER}',
            HEADLINE_1: '<h1 id="{ID}" class="{CLASSES}">{TEXT}</h1>',

            TABLE: '<table id="{ID}" class="{CLASSES}"><thead>{HEAD}</thead><tbody>{BODY}</tbody></table>',
            TABLE_TR: '<tr class="{CLASSES}">{TABLE_TDS}</tr>',
            TABLE_TH: '<th class="{CLASSES}">{CONTENT}</th>',
            TABLE_TD: '<td class="{CLASSES}">{CONTENT}</td>',

            IMG: '<img id="{ID}" class="{CLASSES}" alt="{ALT}" src="{SRC}" style="{STYLE}"/>',
            DIV: '<div id="{ID}" class="{CLASSES}" style="{STYLE}">{CONTENT}</div>',
            SPAN: '<span id="{ID}" class="{CLASSES}">{CONTENT}</span>',
            P: '<p class="{CLASSES}">{CONTENT}</p>',
            STRONG: '<strong class="{CLASSES}">{CONTENT}</strong>',
            TEXTAREA: '<textarea id="{ID}" class="{CLASSES}">{CONTENT}</textarea>',

            UL: '<ul id="{ID}" class="{CLASSES}">{CONTENT}</ul>',
            LI: '{BEFORE}<li id="{ID}" class="{CLASSES}">{CONTENT}</li>{AFTER}',
            PIPE: '{CONTENT}'
        }, true);
    };

    /**
     * Set a new Template object instead of the Standard HTML Tags with its Attributes
     * @method setTpls
     * @param {Object} oTpls an object containing a KEY:TEMPLATE Structure
     * @return {Object} self reference
     * @chainable
     */
    Template.prototype.setTpls = function (oTpls) {
        if (oTpls instanceof Object) {
            this.oTpls = oTpls;
        }
        return this;
    };
    /**
     * Return the current representation of the HTML Template structure
     * @method getTpls
     * @return {Object} the value of the Template storage
     * @chainable
     */
    Template.prototype.getTpls = function () {
        return this.oTpls;
    };
    /**
     * Extend custom html templates
     * @method extTpls
     * @param {Object} oExtends the object whith elements to extend
     * @param {Boolean} bForce (optional) if element already exists and force is set to true existing version is replaced
     * @return {Object} self reference
     * @chainable
     */
    Template.prototype.extTpls = function (oExtends, bForce) {
        var sTag;
        // Set bForce if there wasn't a definition given
        if (bForce === undefined || bForce !== true) {
            bForce = false;
        }

        // Start extending of the internal stored templatelist
        if (oExtends instanceof Object) {
            for (sTag in oExtends) {
                if (oExtends.hasOwnProperty(sTag)) {
                    if (this.oTpls[sTag] === undefined || bForce === true) {
                        this.oTpls[sTag] = oExtends[sTag];
                    }
                }
            }
        }
        return this;
    };
    /**
     * Render given configuration into HTML
     * @method toHtml
     * @return  {String} the finally generated HTML code
     */
    Template.prototype.toHtml = function () {

        var sReturn = '';
        var tplconf;
        var i;
        var loca;

        try {
            sReturn = '';
            for (tplconf in this.config) {
                if (this.config.hasOwnProperty(tplconf)) {
                    if (this.config[tplconf] instanceof Array) {
                        for (i = 0; i < this.config[tplconf].length; i += 1) {
                            sReturn += new Template(JSON.parse('{"' + tplconf + '":' + JSON.stringify(this.config[tplconf][i]) + '}')).setTpls(this.getTpls()).toHtml();
                        }
                    } else {
                        for (loca in this.config[tplconf]) {
                            if (this.config[tplconf].hasOwnProperty(loca)) {
                                if (typeof (this.config[tplconf][loca]) === 'object') {
                                    this.config[tplconf][loca] = new Template(this.config[tplconf][loca]).setTpls(this.getTpls()).toHtml();
                                }
                            }
                        }

                        // Create real HTML from rawdata
                        sReturn += this.render(this.oTpls[tplconf], this.config[tplconf]);
                    }
                }
            }
        } catch (e) {
            if (this.debug) {
                log(e);
            }
        }

        return this.cleanUp(sReturn);
    };

    /**
     * Render the insertion data into the template
     * @method render
     * @param {Object} oTemplate The template object
     * @param {Object} oInsert The Replacemnets for templateobject
     * @return {Object} a prefinal HTML string containing unused locastrings and attributes
     */
    Template.prototype.render = function (oTemplate, oInsert) {

        var LOCA;
        var oRegExp;

        for (LOCA in oInsert) {
            if (oInsert.hasOwnProperty(LOCA)) {
                oRegExp = new RegExp('{' + LOCA + '}', 'g');
                oTemplate = oTemplate.replace(oRegExp, oInsert[LOCA]);
            }
        }

        if (this.debug) {
            log('Cant render data of type ' + typeof (oInsert), 'error');
        }

        return oTemplate;

    };

    /**
     * Cleanup the generated HTML and remove unused LOCA strings and not used
     * attributes
     * @method cleanUp
     * @param {String} sPreOutput The HTML string containing nonrequired data
     * @return {String} the postfinal HTML string
     */
    Template.prototype.cleanUp = function (sPreOutput) {
        // Remove unused locastrings
        sPreOutput = sPreOutput.replace(/\{[A-Z_]*\}/ig, '');
        // Remove unused attributes
        sPreOutput = sPreOutput.replace(/[a-z]+="\s*"/ig, '');
        // Remove multiple whitespaces
        sPreOutput = sPreOutput.replace(/\s{2,}/g, ' ');
        // Remove tag ending whitespaces
        sPreOutput = sPreOutput.replace(/ >/g, '>');

        // Return finally cleand string
        return sPreOutput.toString();
    };
    /**
     * Set the template configuration
     * @method setConfig
     * @param {Object} oConfig The data for later HTML rendering
     * @return {Object} self reference
     * @chainable
     */
    Template.prototype.setConfig = function (oConfig) {
        if (oConfig instanceof Object) {
            this.config = oConfig;
        } else if (this.debug) {
            log('The given configuration was invalid (Object required)', 'notice');
        }
        return this;
    };
})();
