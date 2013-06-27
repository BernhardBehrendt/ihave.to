/**
 * Detect device type and operating system (in mobile case)
 */
function isMobile(not) {
	if ( typeof (not) == 'undefined')
		not = '';

	var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile'];

	for (var i in mobile)
	if (mobile[i] != not && navigator.userAgent.toLowerCase().indexOf(mobile[i]) > 0)
		return true;
	return false;
}