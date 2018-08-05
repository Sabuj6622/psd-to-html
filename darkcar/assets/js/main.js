(function($) {
    "use strict";
          
    jQuery(document).ready(function() {
       
 // Preloader
    $(window).on('load', function() { 
      $('#preloader').delay(3500).fadeOut('slow'); 
    })


$(".slide-active").owlCarousel({
        items:1,
        loop:true,
        dots:false,
        nav:true,
        navText: ["<img src='assets/img/nav-white.png'>","<img src='assets/img/nav-active.png'>"],
        autoplay:true,
         smartSpeed:3000,
         responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
        });


// portfolio-active

$('.active-portfolio-carousel').slick({
  centerMode: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]
});

    }); // document function end




    jQuery(window).load(function(){
    });

}(jQuery));