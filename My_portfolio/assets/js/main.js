
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

    });




    $(function(){
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
        // $(".slider-active").on("translate.owl.carousel",function(){
        // $(".single-testimonial-item p").removeClass("fadeInUp animated").hide()});
        // $(".slider-active").on("translated.owl.carousel",function(){
        //     $(".owl-item.active .single-testimonial-item p").addClass("fadeInUp animated").show()});
        

    }); 
    $(function(){
// testimonial-carousel   /
       $('.mainmenu').slicknav({
        label: '',
        duration: 1000,
        easingOpen: "easeOutBounce"
      });
        // $(".slider-active").on("translate.owl.carousel",function(){
        // $(".single-testimonial-item p").removeClass("fadeInUp animated").hide()});
        // $(".slider-active").on("translated.owl.carousel",function(){
        //     $(".owl-item.active .single-testimonial-item p").addClass("fadeInUp animated").show()});
        

    });




    jQuery(window).load(function() {

      

    });

}(jQuery));