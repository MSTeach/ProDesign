$(function(){
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


/* Start */
/*
$('a[href*="#"]:not([href="#"])').click( function(event) {
	       event.preventDefault();
         var anchor = 0;
         if($(this.hash).offset().top > $(document).height()-$(window).height()){
              anchor=$(document).height()-$(window).height();
         }else{
  		  anchor = $(this.hash).offset().top - 24 ;
	       }
         $('html,body').stop().animate({scrollTop:anchor}, 1000,'swing');
     });
 $('.nav li a').click(function() {
    $(this).parent().find('a').removeClass('highlight');
    $(this).addClass('highlight');
});
$(window).scroll(function() {
    $('.section').each(function() {
        if($(window).scrollTop() >= $(this).offset().top - 50) {
            var id = $(this).attr('id');
            $('.nav li a').removeClass('highlight');
			$('.nav li a[href=#'+ id +']').addClass('highlight');
        }
    });
});
/* End */

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

/* Start Wow.Js */
  new WOW().init();
/* End Wow.Js */

/* Start Loading JS */
  $(window).on('load',function(){
    $(".loading .sk-cube-grid").fadeOut(2000,function(){
      $(this).parent().fadeOut(1000,function(){
        $("body").css("overflow","auto");
        $(this).remove();
      });
    });
  });


/*
$("#btn-submit").click(function(){
  swal("Good job!", "You clicked the button!", "success");
});

*/

  /* Start smooth scroll */
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });
  /* End smooth scroll */


  $('#myForm').validator();


    $("html").niceScroll(
      {
        cursorcolor:"#f39c12",
        cursorwidth:"7px",
        cursorborder:"1px solid #f39c12",
        cursorborderradius:"5px",
        zindex:"999999"
      });

    var mixer = mixitup('.mixss');

});
