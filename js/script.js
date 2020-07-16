// staart navbar
$(document).ready(function(){

  $("  header .row i").click(function(){
  	$("header .nav-list").slideToggle();

  });

  $("header .nav-list .menu").click(function() {
    $("header .submmenu").slideToggle();
  });
  
  // popup
  $('.pop').magnificPopup({
    type:'iframe'
  });

  // owl-carousel
$('.owl-theme').owlCarousel({
    loop:true,
    margin:15,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});
// End-carousel

  // owl-carousel-2
  $('.owl-theme-2').owlCarousel({
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});

});
