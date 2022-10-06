(function ($) {
    "use strict";

    //Buy Now Btn
    $('body').append("<a href='https://themeforest.net/checkout/from_item/36745181?license=regular&support=bundle_6month&_ga=2.188380395.2131256700.1648234835-1425290503.1590986634' class='buy-now-btn' target='_blank'><img src='assets/img/envato.png' alt='envato'/>Buy Now</a>");
    
    //Preloader
    $(window).on('load', function (event) {
        $('.js-preloader').delay(500).fadeOut(500);
    });
    
    //Open Search Box
    $('.searchbtn').on('click', function() {
        $('.search-area').toggleClass('open');
    });
    $('.close-searchbox').on('click', function() {
        $('.search-area').removeClass('open');
    });

    //Count Down Timer
    $('[data-countdown]').each(function () {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function (event) {
            $this.html(event.strftime('<div class="cdown day"><span class="time-count">%-D</span> <p>Days</p></div> <div class="cdown hour"><span class="time-count">%-H</span> <p>Hours</p></div> <div class="cdown minutes"><span class="time-count">%M</span> <p>Minutes</p></div> <div class="cdown second"><span class="time-count">%S</span> <p>Seconds</p></div>'));
        });
    });

    //Tweenmax js
    $('.hero-wrap').mousemove(function (e) {
        var wx = $(window).width();
        var wy = $(window).height();
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var newx = x - wx / 2;
        var newy = y - wy / 2;
        $('.hero-content').each(function () {
            var speed = $(this).attr('data-speed');
            if ($(this).attr('data-revert')) speed *= -.4;
            TweenMax.to($(this), 1, { x: (1 - newx * speed), y: (1 - newy * speed) });
        });
    });
    
    //Hero  Slider 
    $(".hero-img-slider").owlCarousel({
        nav: false,
        dots: true,
        loop: true,
        margin: 20,
        items: 1,
        thumbs: false,
        smartSpeed: 1300,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        responsiveClass: true,
        autoHeight: true,
    });

    //Auction  Slider 
    $(".auction-slider").owlCarousel({
        nav: true,
        dots: false,
        loop: true,
        margin: 20,
        navText: ['<i class="flaticon-left-arrow-1"></i>', '<i class="flaticon-next-1"></i>'],
        items: 1,
        thumbs: false,
        smartSpeed: 1300,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        responsiveClass: true,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 3,
            }
        }
    });

    //Popular  Slider 
    $(".popular-slider").owlCarousel({
        nav: true,
        dots: false,
        loop: true,
        margin: 20,
        navText: ['<i class="flaticon-left-arrow-1"></i>', '<i class="flaticon-next-1"></i>'],
        items: 1,
        thumbs: false,
        smartSpeed: 1300,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        responsiveClass: true,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 3,
            },
            1400: {
                items: 4,
            }
        }
    });
    
    //Colection  Slider 
    $(".collection-slider").owlCarousel({
        nav: true,
        dots: false,
        loop: true,
        margin: 20,
        navText: ['<i class="flaticon-left-arrow-1"></i>', '<i class="flaticon-next-1"></i>'],
        items: 1,
        thumbs: false,
        smartSpeed: 1300,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        responsiveClass: true,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 2.4,
            },
            1200: {
                items: 3.2,
            },
            1400: {
                items: 3.8,
            }
        }
    });

    //Volume  Slider 
    $(".volume-slider").owlCarousel({
        nav: true,
        dots: false,
        loop: true,
        margin: 20,
        navText: ['<i class="flaticon-left-arrow-1"></i>', '<i class="flaticon-next-1"></i>'],
        items: 1,
        thumbs: false,
        smartSpeed: 1300,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        responsiveClass: true,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 3,
            }
        }
    });

    //Testimonial  Slider 
    $(".testimonial-slider").owlCarousel({
        nav: true,
        dots: false,
        loop: true,
        margin: 20,
        navText: ['<i class="flaticon-left-arrow-1"></i>', '<i class="flaticon-next-1"></i>'],
        items: 1,
        thumbs: false,
        smartSpeed: 1300,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        responsiveClass: true,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            992: {
                items: 2,
            },
            1200: {
                items: 2,
            }
        }
    });

    //Editor  Slider 
    $(".editor-slider").owlCarousel({
        nav: true,
        dots: false,
        loop: true,
        margin: 25,
        navText: ['<i class="flaticon-left-arrow-1"></i>', '<i class="flaticon-next-1"></i>'],
        items: 1,
        thumbs: false,
        smartSpeed: 1300,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        responsiveClass: true,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 1.5,
            },
            768: {
                items: 2.3,
            },
            1200: {
                items: 3.5,
            },
            1600: {
                items: 4.5,
            }
        }
    });

    //Category  Slider 
    $(".category-slider").owlCarousel({
        nav: true,
        dots: false,
        loop: true,
        margin: 20,
        navText: ['<i class="flaticon-left-arrow-1"></i>', '<i class="flaticon-next-1"></i>'],
        items: 1,
        thumbs: false,
        smartSpeed: 1300,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        responsiveClass: true,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 3,
            }
        }
    });

    //Author  Slider 
    $(".author-slider-one").owlCarousel({
        nav: true,
        dots: false,
        loop: true,
        margin: 20,
        navText: ['<i class="flaticon-left-arrow-1"></i>', '<i class="flaticon-next-1"></i>'],
        items: 1,
        thumbs: false,
        smartSpeed: 1300,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        responsiveClass: true,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 3,
            },
            1400: {
                items: 4,
            }
        }
    });
    $(".author-slider-two").owlCarousel({
        nav: true,
        dots: false,
        loop: true,
        margin: 20,
        navText: ['<i class="flaticon-left-arrow-1"></i>', '<i class="flaticon-next-1"></i>'],
        items: 1,
        thumbs: false,
        smartSpeed: 1300,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        responsiveClass: true,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 3,
            },
            1400: {
                items: 4,
            }
        }
    });

    //Blog  Slider 
    $(".blog-slider").owlCarousel({
        nav: true,
        dots: false,
        loop: true,
        margin: 20,
        navText: ['<i class="flaticon-left-arrow-1"></i>', '<i class="flaticon-next-1"></i>'],
        items: 1,
        thumbs: false,
        smartSpeed: 1300,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        responsiveClass: true,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 2.4,
            },
            1200: {
                items: 3.2,
            },
            1400: {
                items: 3.8,
            }
        }
    });

    // Price Range Slider
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 8000,
        values: [1200, 3000],
        slide: function (event, ui) {
           $("#amount_one").val(ui.values[0] + " - " + " $" + ui.values[1] );
        }
    });
    $("#amount_one").val("$ " + $("#slider-range").slider("values", 0) +
        " - " + "$ " +  $("#slider-range").slider("values", 1));

    //sticky Header
    var wind = $(window);
    var sticky = $('.header-wrap');
    wind.on('scroll', function () {
        var scroll = wind.scrollTop();
        if (scroll < 100) {
            sticky.removeClass('sticky');
        } else {
            sticky.addClass('sticky');
        }
    });

    // Responsive mmenu
    $(window).on('resize', function() {
        if($(window).width() <= 1199) {
            $('.collapse.navbar-collapse').removeClass('collapse');
        }else{
            $('.navbar-collapse').addClass('collapse');
        }
    });
    $('.mobile-menu a').on('click', function() {
        $('.main-menu-wrap').addClass('open');
        $('.collapse.navbar-collapse').removeClass('collapse');
    });

    $('.mobile_menu a').on('click', function () {
        $(this).parent().toggleClass('open');
        $('.main-menu-wrap').toggleClass('open');
    });

    $('.menu-close').on('click', function () {
        $('.main-menu-wrap').removeClass('open')
    });
    $('.mobile-top-bar').on('click', function () {
        $('.header-top').addClass('open')
    });
    $('.close-header-top button').on('click', function () {
        $('.header-top').removeClass('open')
    });
    var $offcanvasNav = $('.navbar-nav'),
    $offcanvasNavSubMenu = $offcanvasNav.find('.dropdown-menu');
    $offcanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i class="ri-arrow-down-s-line"></i></span>');
    $offcanvasNavSubMenu.slideUp();
    $offcanvasNav.on('click', 'li a, li .menu-expand', function (e) {
        var $this = $(this);
        if (($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length) {
                $this.siblings('ul').slideUp('slow');
            } else {
                $this.closest('li').siblings('li').find('ul:visible').slideUp('slow');
                $this.siblings('ul').slideDown('slow');
            }
        }
        if ($this.is('a') || $this.is('span') || $this.attr('class').match(/\b(menu-expand)\b/)) {
            $this.parent().toggleClass('menu-open');
        } else if ($this.is('li') && $this.attr('class').match(/\b('dropdown-menu')\b/)) {
            $this.toggleClass('menu-open');
        }
    });

    // Scroll animation
    AOS.init();

    //Back To top
    function BackToTop() {
        $('.back-to-top').on('click', function () {
            $('html, body').animate({
                scrollTop: 0
            }, 100);
            return false;
        });

        $(document).scroll(function () {
            var y = $(this).scrollTop();
            if (y > 600) {
                $('.back-to-top').fadeIn();
                $('.back-to-top').addClass('open');
            } else {
                $('.back-to-top').fadeOut();
                $('.back-to-top').removeClass('open');
            }
        });
    }
    BackToTop();

})(jQuery);


// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('nedo_theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('nedo_theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('nedo_theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('slider').checked = false;
    } else {
        setTheme('theme-light');
        document.getElementById('slider').checked = true;
    }
})();

