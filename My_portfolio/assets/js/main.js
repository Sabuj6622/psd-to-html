
(function($) {
    "use strict";

    jQuery(document).ready(function($) {


$(".portfolio-menu li").on('click',  function(){
      var selector = $(this).attr('data-filter');
      $(".project-list").isotope({
        filter: selector,
        transitionDuration: '.8s',
        hiddenStyle: {
          'transform': 'scale(1.5)',
          opacity: 0
        },
        visibleStyle: {
          'transform': 'scale(1)',
          opacity: 1
        },
        stagger: 70
      });
    });

    $(".portfolio-menu li").on('click', function(){
      $(".portfolio-menu li").removeClass("active");
      $(this).addClass("active");
    });
        
 $( '.intro-teletype' ).teletype( {
      text: [ 'Front End Designer', 'Freelancer', 'web Developer' ],
      typeDelay: 0,
    } );

$("#kenburnsy-bg").kenburnsy({
            fullscreen:true,
         });


// testimonial-carousel   /
        $('.slider-active').owlCarousel({
            items:1,
            autoplay:true,
            autoplayTimeout:4500,
            smartSpeed: 1000,
            autoplayHoverPause:true,
            animateIn:'bounceInRight',
            animateOut:'bounceOutRight',
            loop:true,
            nav:false,
            dots:true,
        });
        
       $('.mainmenu').slicknav({
        label: '',
        duration: 1000,
        easingOpen: "easeOutBounce"
      });

        var bodyHeight = $('body').outerHeight();
        var windowHeight = $(window).outerHeight();
        if (bodyHeight < windowHeight) {
            $('body').addClass('fullheight');   
        }

    });





}(jQuery));