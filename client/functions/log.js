/**
 * A proxy to console.log
 * And it's controlled by a global config value (CONF.PROPS.BOOLEAN.LOG)
 * So logging can be disabled if your application is going into production mode
 *
 * @param {mixed} logdata
 */
function log(logdata) {
	if ( typeof (console) != CONF.PROPS.STRING.UD) {
		if (CONF.PROPS.BOOLEAN.LOG === true) {
			console.log(logdata);
		}
	}
}