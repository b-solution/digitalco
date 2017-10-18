// JavaScript Document

jQuery(document).ready(function ($) {
    "use strict";

    /* ==============================================
     Preloader
     =============================================== */
    $(window).bind("load", function () { // makes sure the whole site is loaded
        $("#status").fadeOut(); // will first fade out the loading animation
        $("#preloader").delay(450).fadeOut("slow"); // will fade out the white DIV that covers the website.
    });

    /* ==============================================
     Full screen div for home video
     =============================================== */
    // global vars
    var winWidth = $(window).width();
    var winHeight = $(window).height();
    // set initial div height / width
    $(".full-screen-block").css({
        'width': winWidth,
        'height': winHeight
    });

    // make sure div stays full width/height on resize
    $(window).resize(function () {
        winWidth = $(window).width();
        winHeight = $(window).height();
        $(".full-screen-block").css({
            'width': winWidth,
            'height': winHeight
        });
    });

    /* ==============================================
     Hide navbar on click (Mobile)
     =============================================== */
    var mobileNav = $(".navbar-collapse");
    $(".navbar-collapse  ul li a").on("click", function () {
        mobileNav.removeClass("in");
    });
    
    /* ==============================================
     menu hover open
     =============================================== */

    $(function () {
        $('.dropdown').on("mouseenter", function () {
            $(this).addClass('open');
        });
        $('.dropdown').on("mouseleave", function () {
            $(this).removeClass('open');
        });
    });

    /* ==============================================
     Top Header
     =============================================== */
    $(function () {
        //Keep track of last scroll
        var lastScroll = 0;
        var header = $("#header");
        var headerfixed = $("#header-body-fixed");
        $(window).scroll(function () {
            //Sets the current scroll position
            var st = $(this).scrollTop();
            //Determines up-or-down scrolling
            if (st > lastScroll) {

                //Replace this with your function call for downward-scrolling
                if (st > 50) {
                    header.addClass("header-top-fixed");
                    headerfixed.addClass("header-body-fixed");
                    $("#totop").css("display", "block");
                }
            }
            else {
                //Replace this with your function call for upward-scrolling
                if (st < 50) {
                    header.removeClass("header-top-fixed");
                    headerfixed.removeClass("header-body-fixed");
                    $("#totop").css("display", "none");
                }
            }
            //Updates scroll position
            lastScroll = st;
        });
    });

    /* ==============================================
     Page Scrolling
     =============================================== */

    $('.navbar-default #navbar-full').singlePageNav({
        currentClass: 'current',
        // Class to add to the list item when the navigation item is selected
        updateHash: true, // If you want the hash to change when the user clicks on the navigation, change this to true
        speed: 750, // Speed to scroll the page when the navigation is clicked
        offset: 0,
        threshold: 120,
        filter: ':not(.external)',
        easing: 'swing'
    });


    $(window).load(function () {
        /* ==============================================
         Company-about Carousel
         =============================================== */
        $("#owl-company-about").owlCarousel({
            // Most important owl features
            loop: true,
            margin: 0,
            responsive: {
                0: {
                    items: 1
                },
                320: {
                    items: 1
                },
                580: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            },
            lazyLoad: true,
            singleItem: false,
            itemsScaleUp: false,
            responsiveRefreshRate: 200,
            responsiveBaseWidth: window,
            stagePadding: 0,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            navigation: false
        });

        /* ==============================================
         partners Carousel
         =============================================== */
        $("#owl-partners").owlCarousel({
            // Most important owl features
            loop: true,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                320: {
                    items: 2
                },
                580: {
                    items: 3
                },
                768: {
                    items: 4
                },
                992: {
                    items: 5
                },
                1200: {
                    items: 6
                }
            },
            lazyLoad: true,
            singleItem: false,
            itemsScaleUp: false,
            responsiveRefreshRate: 200,
            responsiveBaseWidth: window,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            navigation: false
        });

        /* ==============================================
         partners Carousel
         =============================================== */
        $("#owl-projects").owlCarousel({
            // Most important owl features
            loop: true,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                320: {
                    items: 1
                },
                580: {
                    items: 2
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            },
            lazyLoad: true,
            singleItem: false,
            itemsScaleUp: false,
            responsiveRefreshRate: 200,
            responsiveBaseWidth: window,
            autoplay: false,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            navigation: true
        });

    });


});

/* ==============================================
 Youtube player
 =============================================== */
$(function () {
    $(".bg-youtube").mb_YTPlayer();
});

/* ==============================================
 background ticker
 =============================================== */
$('.fade-ticker:has(>div:eq(1))').list_ticker({
    speed: 5000,
    effect: 'fade'
});


/* ==============================================
 Count down time
 =============================================== */
// Daily Deal CountDown Clock Settings
var date = new Date().getTime();			// This example is just to show how this function works.
//var new_date = new Date(date + 86400000);	// You can set your own time whenever you want.
 var new_date = new Date('2016-11-25').getTime();
//    var n = new_date.toUTCString();				// 'date' value is given in milliseconds.
//alert(new_date);
$(".coming-time").countdown({
    date: new_date,
    yearsAndMonths: false,
    leadingZero: true
});

/* ==============================================
 Revolution slider
 =============================================== */
jQuery('.tp-banner').show().revolution(
        {
            dottedOverlay: "none",
            delay: 16000,
            startwidth: 1300,
            startheight: 750,
            hideThumbs: 200,
            thumbWidth: 100,
            thumbHeight: 50,
            thumbAmount: 5,
            navigationType: "none",
            navigationArrows: "solo",
            navigationStyle: "preview1",
            touchenabled: "on",
            onHoverStop: "off",
            swipe_velocity: 0.7,
            swipe_min_touches: 1,
            swipe_max_touches: 1,
            drag_block_vertical: false,
            parallax: "mouse",
            parallaxBgFreeze: "on",
            parallaxLevels: [7, 4, 3, 2, 5, 4, 3, 2, 1, 0],
            keyboardNavigation: "off",
            navigationHAlign: "center",
            navigationVAlign: "bottom",
            navigationHOffset: 0,
            navigationVOffset: 20,
            soloArrowLeftHalign: "left",
            soloArrowLeftValign: "center",
            soloArrowLeftHOffset: 20,
            soloArrowLeftVOffset: 0,
            soloArrowRightHalign: "right",
            soloArrowRightValign: "center",
            soloArrowRightHOffset: 20,
            soloArrowRightVOffset: 0,
            shadow: 0,
            fullWidth: "off",
            fullScreen: "on",
            spinner: "spinner1",
            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,
            shuffle: "off",
            autoHeight: "off",
            forceFullWidth: "on",
            hideThumbsOnMobile: "off",
            hideNavDelayOnMobile: 1500,
            hideBulletsOnMobile: "off",
            hideArrowsOnMobile: "off",
            hideTimerBar: "on",
            hideThumbsUnderResolution: 0,
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            startWithSlide: 0,
            fullScreenOffsetContainer: ""
        });

/* ==============================================
 Magnific Popup Initialization
 =============================================== */
$('.bubble-popup').magnificPopup({
    type: 'image',
    mainClass: 'mfp-with-zoom'
});
$('.ajax-content').magnificPopup({
    type: 'ajax'

});
$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: true,
    fixedContentPos: false
});

/* ==============================================
 FILTER Portfolio
 =============================================== */
// Clone portfolio items to get a second collection for Quicksand plugin
var $portfolioClone = $(".portfolio-list").clone();

// Attempt to call Quicksand on every click event handler
$(".portfolio-filter-title .filter a").on("click", function () {
    $(".portfolio-filter-title .filter li").removeClass("current");

    // Get the class attribute value of the clicked link
    var $filterClass = $(this).parent().attr("class");

    var $filteredPortfolio;

    if ($filterClass === "all") {
        $filteredPortfolio = $portfolioClone.find("li");
    } else {
        $filteredPortfolio = $portfolioClone.find("li[data-type~=" + $filterClass + "]");
    }

    // Call quicksand
    $(".portfolio-list").quicksand($filteredPortfolio, {
        duration: 400,
        easing: 'swing'
    }, function () {

        $('.bubble-popup').magnificPopup({
            type: 'image',
            mainClass: 'mfp-with-zoom'
        });
        $('.ajax-content').magnificPopup({
            type: 'ajax'
        });
        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: true,
            fixedContentPos: false
        });
    });


    $(this).parent().addClass("current");

    // Prevent the browser jump to the link anchor
    return false;
});
/* ==============================================
 smooth scroll
 =============================================== */
$("#start").on("click", function () {
    $('html, body').animate({
        scrollTop: parseInt($("#about").offset().top)}, '800');
    return false;

});
/* ==============================================
 TO TOP
 =============================================== */
$('#totop').on("click", function () {
    $('html, body').animate({scrollTop: 0}, '1200');
    return false;
});

/* ==============================================
 ANIMATED SKILL BARS
 =============================================== */

$('.progress-bar').appear(function () {
    var datavl = $(this).attr('data-value');
    $(this).animate({"width": datavl + "%"}, '300');
});

/* ==============================================
 COUNT FACTORS
 =============================================== */

$(function () {

    $(".fact").appear(function () {
        $('.fact').each(function () {
            dataperc = $(this).attr('data-perc');
            $(this).find('.factor').delay(6000).countTo({
                from: 0,
                to: dataperc,
                speed: 3000,
                refreshInterval: 50
            });
        });
    });
});

(function ($) {
    $.fn.countTo = function (options) {
        // merge the default plugin settings with the custom options
        options = $.extend({}, $.fn.countTo.defaults, options || {});

        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(options.speed / options.refreshInterval),
                increment = (options.to - options.from) / loops;

        return $(this).each(function () {
            var _this = this,
                    loopCount = 0,
                    value = options.from,
                    interval = setInterval(updateTimer, options.refreshInterval);

            function updateTimer() {
                value += increment;
                loopCount++;
                $(_this).html(value.toFixed(options.decimals));

                if (typeof (options.onUpdate) === 'function') {
                    options.onUpdate.call(_this, value);
                }

                if (loopCount >= loops) {
                    clearInterval(interval);
                    value = options.to;

                    if (typeof (options.onComplete) === 'function') {
                        options.onComplete.call(_this, value);
                    }
                }
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0, // the number the element should start at
        to: 100, // the number the element should end at
        speed: 1000, // how long it should take to count between the target numbers
        refreshInterval: 100, // how often the element should be updated
        decimals: 0, // the number of decimal places to show
        onUpdate: null, // callback method for every time the element is updated,
        onComplete: null // callback method for when the element finishes updating
    };
})(jQuery);

/* ==============================================
 WOW Appear
 =============================================== */
new WOW().init();

