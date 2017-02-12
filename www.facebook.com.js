javascript:
(function() {
    // Disable mouse hover popups on Facebook
    var remove_hovercards = function() {
    	var nodes = document.getElementsByTagName('*');
	var count = 0;
	for (var i = 0; i < nodes.length; i++) {
	    var node = nodes[i];
	    if (typeof node.dataset.hovercard != 'undefined') {
		node.removeAttribute('data-hovercard');
		count++;
	    }
	    if (typeof node.dataset.hover != 'undefined') {
		node.removeAttribute('data-hover');
		count++;
	    }
	}
	if (count > 0) {
	    console.log('removed hovercards:', count);
	}
    };
    remove_hovercards();
    window.addEventListener('scroll', remove_hovercards);
})();

// For the Tampermonkey - Chrome extension
// https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en
//
// To use with Tampermonkey, just replace the first line of this file, (the ``javascript:'' line)
// with these comment lines:

// ==UserScript==
// @name         Hovercraft
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Remove annoying Facebook popups
// @author       me@clojure.us
// @match        https://www.facebook.com/
// @grant        none
// ==/UserScript==
