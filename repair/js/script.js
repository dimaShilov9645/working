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
        0:{
            items:1
        },
        768:{
            items:2
        },
        1080:{
            items:3
        }
    }	
  });

$('form').submit(function(event) {
      event.preventDefault();
      $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
      }).done(function() {
        $(this).find("input").val("");
        alert("Сообщение успешно отправлено");
        $("form").trigger("reset");
      });
      return false;
    });

  new WOW().init();
});

ymaps.ready(init);
var myMap, myPlacemark, myPin;
    function init(){ 
        // Создание карты.    
        myMap = new ymaps.Map("map", {
            center: [55.611480, 37.201290],
            zoom: 17
        });

        myMap.behaviors.disable([
            'drag',
            'scrollZoom'
          ]);

        myPin = new ymaps.GeoObjectCollection({}, {
          /*preset: 'islands#redIcon',*/
          /*draggable: true,*/
          iconLayout: 'default#image',
          iconImageHref: 'img/pin.png',
          iconImageSize: [64, 64],
          iconImageOffset: [-50, -50]
        });
      
        myPlacemark = new ymaps.Placemark([55.611482, 37.201292],{
          balloonContentHeader: 'Привет',
          balloonContentBody: 'Привет',
          balloonContentFooter: 'Привет',
          hintContent: 'Привет'
        });

        myPin.add(myPlacemark);
        myMap.geoObjects.add(myPin);
   }