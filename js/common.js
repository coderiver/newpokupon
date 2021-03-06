$(document).ready(function() {

// main slider
(function () {
    var slEl = $('.js-sl');
    if (slEl.length) {
        var slNav = $('.js-sl-nav');
        if (slEl.find('>div').length >= 6) {
            slEl.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: slNav
            });
            slNav.slick({
                slidesToShow: 5,
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
                focusOnSelect: true,
                infinite: false
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

// tabs
(function () {
    var tabs = $('.js-tabs'),
        nav = tabs.find('.js-tabs-nav a'),
        item = tabs.find('.js-tabs-item');
    nav.on('click', function () {
        var thisEl = $(this),
            index = thisEl.index();
        if (!thisEl.hasClass('is-active')) {
            nav.removeClass('is-active');
            thisEl.addClass('is-active');
            item.hide();
            item.eq(index).fadeIn();
        };
        return false;
    }).first().trigger('click');
}());

// code sort
(function () {
    var sort = $('.js-code-sort button'),
        code = $('.js-code');
    sort.on('click', function () {
        var type = $(this).data('code');
        sort.removeClass('is-active');
        $(this).addClass('is-active');
        if (type === undefined) {
            code.show();
        }
        else {
            code.hide();
            $('.' + type).show();
        }
        return false;
    });
}());

// letters
(function () {
    var letters = $('.js-letters');
    if (letters.length) {
        var lettersHeight = letters.height(),
            lettersMargin = 20,
            lettersLink = letters.find('a');
        $(window).scroll(function () {
            var lettersTop = letters.offset().top,
                scrollTop = $('body').scrollTop();
            if (scrollTop > lettersTop) {
                letters.addClass('is-fixed');
            }
            else {
                letters.removeClass('is-fixed');
            }
        });
        lettersLink.on('click', function () {
            var thisEl = $(this),
                letter = thisEl.data('letter'),
                letterTop = $('.' + letter).offset().top,
                scrollEl = letterTop - lettersHeight - lettersMargin;
            lettersLink.removeClass('is-active');
            thisEl.addClass('is-active');
            $('html, body').animate({
                scrollTop: scrollEl
            }, 500);
            return false;
        });
    };
}());

// toggle text
function shorten(text, maxLength) {
    var ret = text;
    if (ret.length > maxLength) {
        ret = ret.substr(0,maxLength-3) + "...";
    }
    return ret;
}
// 
(function () {
    var text = $('.js-toggle-text');
    text.each(function () {
        var thisText = $(this),
            content = thisText.text(),
            maxLength = 55;
        var shortText = $.trim(content).substring(0, maxLength).split(' ').slice(0, -1).join(' ') + " ...";
        thisText.text(shortText);
        thisText.on('click', function () {
            if (thisText.hasClass('is-open')) {
                thisText.text(shortText);
                thisText.removeClass('is-open');
            }
            else {
                thisText.text(content);
                thisText.addClass('is-open');
            }
        });
    });
}());


});