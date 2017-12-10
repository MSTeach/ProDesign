
$(document).ready(function(){
  'use strict';


  $(window).scroll(function(){
    var navbar = $('.navbar');
    if ($(window).scrollTop() >= navbar.height())
    {
      navbar.addClass('navbar-fixed-top');
    }else {
      navbar.removeClass('navbar-fixed-top');
    }
  });


  $("html").niceScroll(
    {
      cursorcolor:"#f39c12",
      cursorwidth:"7px",
      cursorborder:"1px solid #f39c12",
      cursorborderradius:"5px",
      zindex:"999999"
    });


    /* Start Scroll Up */
      var scrollButtom = $("#scroll-up")
      $(window).scroll(function(){
        console.log($(this).scrollTop());
        $(this).scrollTop() >= 500 ? scrollButtom.show("fast") : scrollButtom.hide("fast");
      });
      scrollButtom.click(function(){
        $("html,body").animate({scrollTop: 0},700);
      });
    /* End Scroll Up */

});
