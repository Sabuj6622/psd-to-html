(function($) {
    "use strict";

    jQuery(document).ready(function() {
       
     jQuery('#mobile-menu').meanmenu({

        meanMenuContainer: 'body',
        meanScreenWidth: "767",
     });
     $('.slider-active').owlCarousel({
                    items: 1,
                    loop: true,
                    autoplay: false,
                    dots: false,
                    nav:true,
                    navText: ['Back','Next'],
                    margin:30,
                    smartSpeed:450,
                    responsiveClass:true,
                    responsive:{
                        0:{
                            items:1,
                            nav:false,
                        },
                        600:{
                            items:2,
                            nav:false
                        },
                        1000:{
                            items:5,
                            nav:true,
                            loop:false
                        }
                    }
                });
         $('.product-wrapper').owlCarousel({
                items: 4,
                loop: true,
                autoplay: false,
                dots: false,
                nav:true,
                navText: ['PREV','Next'],
                margin:30,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1,
                        nav:false,
                    },
                    600:{
                        items:2,
                        nav:false
                    },
                    1000:{
                        items:5,
                        nav:true,
                        loop:false
                    }
                }
            });
         $('.brand-active').owlCarousel({
                items: 6,
                loop: true,
                autoplay: true,
                dots: false,
                nav:false,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:2,
                        nav:false,
                    },
                    600:{
                        items:3,
                        nav:false
                    },
                    1000:{
                        items:5,
                        nav:true,
                        loop:false
                    }
                }
            });

         $(".").owlCarousel({
            
            
        });
           $(".slider-active").on("translate.owl.carousel", function(){ 
            $(".slide-text p").removeClass("animated fadeInDown");
            $(".slide-text span").removeClass("animated bounceIn");
            });
           

            $(".slider-active").on("translated.owl.carousel", function(){
            $(".slide-text p").addClass("animated fadeInDown");
            $(".slide-text span").addClass("animated bounceIn");
            });



    }); 

}(jQuery));