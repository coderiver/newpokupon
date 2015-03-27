head.ready(function() {

// main slider
(function () {
    var slEl = $('.js-sl');
    if (slEl.length) {
    	var slNav = $('.js-sl-nav');
    	slEl.slick({
    		slidesToShow: 1,
    		slidesToScroll: 1,
    		asNavFor: slNav
    	});
    	slNav.slick({
 			slidesToShow: 6,
			slidesToScroll: 1,
			arrows: false,
			swipe: false,
			asNavFor: slEl,
			centerMode: true,
			focusOnSelect: true
    	});
    };
 }());


	

});