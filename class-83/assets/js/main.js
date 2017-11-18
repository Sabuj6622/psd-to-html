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
    value: 0.75,
     size:200,
    fill: '#22bbc0',
    thickness:3,
    emptyFill:'#fff'
   
  })
    .on('circle-animation-progress', function(event, progress) {
    $(this).find('.progress-percentage').html(Math.round(95 * progress) + '<i>%</i>');
  });
       
        $('#digitalprogress-element').circleProgress({
    value: 0.50,
    size:200,
    fill: '#22bbc0',
    thickness:3,
    emptyFill:'#fff'
  })
    .on('circle-animation-progress', function(event, progress) {
    $(this).find('.progress-percentage').html(Math.round(84 * progress) + '<i>%</i>');
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
