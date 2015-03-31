head.ready(function() {

// main slider
(function () {
    var slEl = $('.js-sl');
    if (slEl.length) {
        var slNav = $('.js-sl-nav');
        if (slEl.find('>div').length > 6) {
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
        }
    	else {
            slNav.addClass('is-six');
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
                focusOnSelect: true
            });
            slNav.find('.slick-slide').eq(0).addClass('is-active');
            slEl.on('afterChange', function(event, slick, currentSlide, nextSlide){
                slNavSlide = slNav.find('.slick-slide');
                slNavSlide.removeClass('is-active');
                slNavSlide.eq(currentSlide).addClass('is-active');
            });
        }
    };
 }());

});