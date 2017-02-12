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
