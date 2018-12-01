/*$(document).ready(function() {
	$('#button-callback').on('click', function() {
		$('#modal-callback').toggleClass('modal_visible');
	});
	$('.modal__close').on('click', function() {
		$('#modal-callback').toggleClass('modal_visible');
	});
});*/

/*document.querySelector('#button-callback').addEventListener('click', function() {
	document.querySelector('#modal-callback').classList.toggle('modal_visible');
});
document.querySelector('.modal__close').addEventListener('click', function() {
	document.querySelector('#modal-callback').classList.toggle('modal_visible');
});*/
jQuery(document).ready(function($) {
    $('.popup-content').magnificPopup({
        type: 'inline'
    });
});

/*$(document).ready(function(){
  $('.slider').slick({
  	slidesToShow: 3,
  	slidesToScroll: 1,
  	nextArrow: '<div class="arrow arrow-right"></div>',
  	prevArrow: '<div class="arrow arrow-left"></div>',
  	responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });
});*/

$(document).ready(function(){
  $(".slider").owlCarousel({
  	rtl:true,
   	responsiveClass:true,
    margin:20,
    nav:true,
    navText : ["",""],
    dots: false,
    loop : true,
    responsive:{
        768:{
            items:1
        },
        900:{
            items:2
        },
        1080:{
            items:3
        }
    }	
  });
});

$(document).ready(function(){
$('.form-media').on('submit', function(){
  var nameVal = $('[name = name]').val();
      phoneVal = $('[name = phone]').val();
  
        $.ajax({
          url: '/send.php',
          data:{name:nameVal, phone:phoneVal},
          success: function(){
            alert('Load was performed.');
          }
      });
        return false;
    });
});