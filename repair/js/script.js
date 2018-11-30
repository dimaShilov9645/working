$(document).ready(function() {
	$('#button-callback').on('click', function() {
		$('#modal-callback').toggleClass('modal_visible');
	});
	$('.modal__close').on('click', function() {
		$('#modal-callback').toggleClass('modal_visible');
	});
});

/*document.querySelector('#button-callback').addEventListener('click', function() {
	document.querySelector('#modal-callback').classList.toggle('modal_visible');
});
document.querySelector('.modal__close').addEventListener('click', function() {
	document.querySelector('#modal-callback').classList.toggle('modal_visible');
});*/