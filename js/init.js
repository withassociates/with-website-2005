addLoadEvent(function() {
    var version = com.deconcept.FlashObjectUtil.getPlayerVersion();
    if (document.getElementById && (version['major'] >= 8)) {
        document.getElementsByTagName('html')[0].style['overflow'] = 'hidden';
    }
                
    var fo = new com.deconcept.FlashObject("/stub.swf", "main", "100%", "100%", "8", "#a7a6a7");
    fo.addParam("scale", "scale");
    fo.write("flashContent");
});


function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}