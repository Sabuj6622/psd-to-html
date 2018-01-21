/**
 *****************************************
 * main.js
 *
 * JS FILE FOR CUSTOM JS AND ACTIVE JS
 *
 *****************************************
 **/

(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {

     $(".home-carousel-active").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            dots: false,
            nav: true,
            navText:["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"]
            
        });
     
         $(".team-list").owlCarousel({
            items: 3,
            margin:30,
            loop: true,
            autoplay: true,
            dots: true,
            nav: false,
            
        }); 
     
         $(".testimonial-list").owlCarousel({
            items: 3,
            margin:30,
            loop: true,
            autoplay: true,
            dots: true,
            nav: false,
            
        });  
     
         $(".logo-carousel").owlCarousel({
            items: 5,
            margin:30,
            loop: true,
            autoplay: true,
            dots: true,
            nav: false,
            
        });     
   $('.video-btn').magnificPopup({
            type: 'video',
        }); 

     $('#webprogress-element').circleProgress({
    value: 0.90,
    size:200,
    fill: '#22bbc0',
    thickness:3,
    emptyFill:'#fff'
  })
    .on('circle-animation-progress', function(event, progress) {
    $(this).find('.progress-percentage').html(Math.round(90 * progress) + '<i>%</i>');
  }); 
      $('#graphicsprogress-element').circleProgress({
    value: 0.90,
    size:200,
    fill: '#22bbc0',
    thickness:3,
    emptyFill:'#fff'
  })
    .on('circle-animation-progress', function(event, progress) {
    $(this).find('.progress-percentage').html(Math.round(95 * progress) + '<i>%</i>');
  });
      $('#digitalprogress-element').circleProgress({
    value: 0.90,
    size:200,
    fill: '#22bbc0',
    thickness:3,
    emptyFill:'#fff'
  })
    .on('circle-animation-progress', function(event, progress) {
    $(this).find('.progress-percentage').html(Math.round(84 * progress) + '<i>%</i>');
  });

    });

// isotope active


$('.portfolio-list').isotope({
  // options...
  layoutMode:'masonry',
  masonry: {
    columnWidth: '.col-md-3'
  },
});

 $('.portfolio_menu li').on('click', function(){
            $('.portfolio_menu li').removeClass("active");
            $(this).addClass("active");
        var filterValue = $(this).attr("data-filter");

        $('.portfolio-list').isotope({
            filter:filterValue,
            transitionDuration: '0.8s',
            hiddenStyle: {
              opacity: 0,
              transform: 'rotate(0deg)',
            },
            visibleStyle: {
              opacity: 1,
              transform: 'rotate(180deg)',
            }
            });
        });

    jQuery(window).load(function () {
        
        // -------------------------------------------------------------
        // animation active
        // -------------------------------------------------------------
        new WOW().init();
        
        jQuery('#preloader').fadeOut(3000);

    });


}(jQuery));
