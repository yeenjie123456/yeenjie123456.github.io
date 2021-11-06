(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {

        /*------------------------------
            Header Slick Slider
        -------------------------------*/

        $('.header-slider-init').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
            fade: true,
            arrows: true,
            autoplay: true,
            cssEase: 'linear',
            prevArrow: '<div class="prev-arrow"><i class="las la-angle-left"></i></div>',
            nextArrow: '<div class="next-arrow"> <i class="las la-angle-right"></i></div>',
        });

        /*------------------------------
            Header Slick Slider
        -------------------------------*/

        $('.blog-slider-inst, .video-slider-inst').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 800,
            arrows: false,
            autoplay: true,
            dots: true
        });

        /*------------------------------
            Header Slider index-04
        -------------------------------*/

        $('.header-slider-index-04-inst').slick({
            dots: false,
            infinite: true,
            speed: 500,
            arrows: true,
            autoplay: true,
            cssEase: 'linear',
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '400px',
            prevArrow: '<div class="prev-arrow"><i class="las la-angle-left"></i></div>',
            nextArrow: '<div class="next-arrow"> <i class="las la-angle-right"></i></div>',

            responsive: [

                {
                    breakpoint: 1601,
                    settings: {
                        centerPadding: '350px',
                    }
                },

                {
                    breakpoint: 1201,
                    settings: {
                        centerPadding: '200px',
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        centerMode: false,
                    }
                }
            ]
        });

        /*------------------------------
            magnific popup
        -------------------------------*/

        $('.magnific-inst').magnificPopup({
            type: 'video',
            // other options
        });

        /*------------------------------
            wow js init
        -------------------------------*/
        new WOW().init();

        /*------------------------------------
        search popup
        -----------------------------------*/
        $(document).on('click', '#search_icon', function (e) {
            e.preventDefault();
            $('#search_popup').addClass('show');
        });
        $(document).on('click', '#search-popup-close-btn', function (e) {
            e.preventDefault();
            $('#search_popup').removeClass('show');
        });

    });

    /*------------------------------
           Scroll to top
    -------------------------------*/

    $(window).scroll(function () {

        if ($(this).scrollTop() > 800) {
            $(".scroll-to-top").fadeIn();
        } else {
            $(".scroll-to-top").fadeOut();
        }
    })

    $(".scroll-to-top").click(function () {

        $("html, body").animate({
            scrollTop: 0
        }, 2000);
    })

    $(window).on('load', function () {

        /*------------------------------
           Preloader
        -------------------------------*/

        $('.preloader-inner').fadeOut(1000);
    });

}(jQuery));