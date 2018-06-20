(function($) {
    "use strict";
          
    jQuery(document).ready(function() {
       
     


  $(".portfolio_list").masonry({


  });
    
  $(".single_portfolio_item").hover(function(){
   $( ".single_portfolio_item .portfolio_content h2" ).removeClass("animated fadeInDown");
   $( this ).find( ".portfolio_content h2" ).addClass("animated fadeInDown");
  });
  
  $(".single_portfolio_item").hover(function(){
   $( ".single_portfolio_item .portfolio_content p" ).removeClass("animated fadeInUp");
   $( this ).find( ".portfolio_content p" ).addClass("animated fadeInUp");
  });


  // offcanvas_menu

  $(".menu_trigger").on('click', function() {
    $(".offcanvas-menu, .theme-overlay").addClass("active");
  });
  $(".menu-close i.fas, .theme-overlay").on('click', function() {
    $(".offcanvas-menu, .theme-overlay").removeClass("active");
  });


   $(".header_area").headroom({
    
   });

    }); // document function end




    jQuery(window).load(function(){
    });

}(jQuery));