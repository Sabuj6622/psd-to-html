(function($) {
    "use strict";
          
    jQuery(document).ready(function() {
       $(".project-list").masonry({


  });
       
     $(".portfolio-menu li").on('click',  function(){
      var selector = $(this).attr('data-filter');
      $(".project-list").isotope({
        filter: selector,
        transitionDuration: '.8s',
        hiddenStyle: {
          'transform': 'scale(.5)',
          opacity: 0
        },
        visibleStyle: {
          'transform': 'scale(1)',
          opacity: 1
        },
        stagger: 70
      });
    });


$( "#clickme" ).click(function() {
  if ( $( "#book" ).is( ":hidden" ) ) {
    $( "#book" ).show( "slow" );
  } else {
    $( "#book" ).slideUp();
  }
});
 
    
  

    }); // document function end




    jQuery(window).load(function(){
    });

}(jQuery));