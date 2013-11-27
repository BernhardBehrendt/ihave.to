var oTpl = {
	H : '{BEFORE}<h{NO} id="{ID}" class="{CLASSES}">{CONTENT}</h{NO}>{AFTER}',
	LINK : '<a id="{ID}" class="{CLASSES}" href="{URL}" title="{TITLE}">{CONTENT}</a>',
	FORM : '<form method="{METHOD}" action="{ACTION}" id="{ID}">{CONTENT}</form>',
	INPUT : '<input type="{TYPE}" value="{VALUE}" id="{ID}" name="{NAME}" class="{CLASSES}" maxlength="{MAXLENGTH}"/>',
	LABEL : '{BEFORE}<label for="{FOR}" classes="{CLASSES}">{CONTENT}</label>{AFTER}',
	HEADLINE_1 : '<h1 id="{ID}" class="{CLASSES}">{TEXT}</h1>',

	TABLE : '<table id="{ID}" class="{CLASSES}"><thead>{HEAD}</thead><tbody>{BODY}</tbody></table>',
	TABLE_TR : '<tr class="{CLASSES}">{TABLE_TDS}</tr>',
	TABLE_TH : '<th class="{CLASSES}">{CONTENT}</th>',
	TABLE_TD : '<td class="{CLASSES}">{CONTENT}</td>',

	IMG : '<img id="{ID}" class="{CLASSES}" alt="{ALT}" src="{SRC}" style="{STYLE}"/>',
	DIV : '<div id="{ID}" class="{CLASSES}" style="{STYLE}">{CONTENT}</div>',
	SPAN : '<span id="{ID}" class="{CLASSES}">{CONTENT}</span>',
	P : '<p class="{CLASSES}">{CONTENT}</p>',
	STRONG : '<strong class="{CLASSES}">{CONTENT}</strong>',
	TEXTAREA : '<textarea id="{ID}" class="{CLASSES}">{CONTENT}</textarea>',

	UL : '<ul id="{ID}" class="{CLASSES}">{CONTENT}</ul>',
	LI : '{BEFORE}<li id="{ID}" class="{CLASSES}">{CONTENT}</li>{AFTER}',
	PIPE : '{CONTENT}'
};
