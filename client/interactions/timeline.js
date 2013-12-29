$(document)
    .on(CONF.EVENTS.CLICK, 'div.change.deleted', function(){
        Apprise('REALLY_RESTORE_MEMO'.translate());
    });
