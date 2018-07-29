(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
        



        //Owl carousel Start//
            $(".case-carousel-wrapper").owlCarousel({
             loop: true,
             autoplay: false,
             dots:false,
             nav: false,
             margin: 30, 
             responsive:{
                 0:{
                     items:1,
                 },
                 600:{
                     items:2,
                 },
                 1000:{
                     items:3,
                 }
             }
            
         });
            $(".case-carousel-on-3.case-carousel-wrapper-3").owlCarousel({
             loop: true,
             autoplay: false,
             dots:false,
             nav: false,
             margin: 0,  
             responsive:{
                 0:{
                     items:1,
                 },
                 600:{
                     items:3,
                 },
                 1000:{
                     items:5,
                 }
             }
            
         });
            $(".client-box-wrapper").owlCarousel({
             loop: true,
             autoplay: false,
             autoplayTimeout: 3000,
             autoplayHoverPause: true,
             dots: false,
             nav: false,
             margin: 50,    
             mouseDrag:true,
             touchDrag:false,
             responsive:{
                 0:{
                     items:1,
                 },
                 600:{
                     items:3,
                 },
                 1000:{
                     items:6,
                 }
             }
            
         });
            
            $(".case-details.testimonial-wrapper").owlCarousel({
             loop: true,
             autoplay: false,
             autoplayTimeout: 3000,
             autoplayHoverPause: true,
             dots: false,
             nav: false,
             mouseDrag:true,
             touchDrag:false,
             items:1
            
         });
            $(".testimonial-wrapper").owlCarousel({
             loop: true,
             autoplay: false,
             autoplayTimeout: 3000,
             autoplayHoverPause: true,
             dots: true,
             nav: false,
             mouseDrag:true,
             touchDrag:false,
             items:1
            
         });
            $(".testimonial-wrapper-2").owlCarousel({
             loop: true,
             autoplay: false,
             autoplayTimeout: 3000,
             autoplayHoverPause: true,
             dots: false,
             nav: false,
             mouseDrag:true,
             touchDrag:false,
             items:1
            
         });

            $(".case-carousel-wrapper-2-on.case-carousel-wrapper-2").owlCarousel({
             loop: true,
             autoplay: false,
             autoplayTimeout: 3000,
             autoplayHoverPause: true,
             dots: false,
             nav: false,
             mouseDrag:true,
             touchDrag:false,
             margin: 50,       
             responsive:{
                 0:{
                     items:1,
                 },
                 600:{
                     items:2,
                 },
                 1000:{
                     items:3,
                 }
             }
            
         });
            $(".hero-slider-3").owlCarousel({
             loop: true,
             autoplay: false,
             autoplayTimeout: 3000,
             autoplayHoverPause: true,
             dots:false,
             nav: true,
             navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
             mouseDrag:true,
             touchDrag:false,
             items:1
            
         });
    //Owl carousel End//





    //For Search Bar//   
        $(".search-triger").on('click', function(){
            $(".search-form").addClass("search-open");
        });
        $(".search-close").on('click', function(){
            $(".search-form").removeClass("search-open");
        });
 
 // layoutchanger
        $(".boxed-layout").on('click', function(){
            $("body").addClass("boxed-layout").removeClass("wide-layout");
            $(".layout-changer span").removeClass("active");
            $(this).addClass("active");
            
        });
        $(".wide-layout").on('click', function(){
            $("body").addClass("wide-layout").removeClass("boxed-layout");
            $(".layout-changer span").removeClass("active");
            $(this).addClass("active");
        });


    //For Offcanvas Menu//    
       
        $(".off-canvas-menu-triger").on('click', function(){
            $(".off-canvas-menu").addClass("menu-active");
            $(".off-canvas-overley").addClass("off-canvas-overley-active");
        });
        $(".menu-close, .off-canvas-overley").on('click', function(){
            $(".off-canvas-menu").removeClass("menu-active");
            $(".off-canvas-overley").removeClass("off-canvas-overley-active");
        });


    //For Testimonial Active//    

        $(".single-testimonial-item").hover(function(){
            $(".single-testimonial-item").removeClass('testi-active');
            $(this).addClass('testi-active');
        });

    //For Magnific Popup//
        $('.video-play-btn').magnificPopup({
            type: 'video',
        });

    

    });


    jQuery(window).load(function(){

        
    });


}(jQuery)); 