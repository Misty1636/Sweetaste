jQuery(document).ready(function($) {

	$('.fa-heart').click(function(ev){
		ev.preventDefault();
		$(this).toggleClass('active');
	});

	$('.list-group a').click(function(ev){
		ev.preventDefault();
		$(this).addClass('active').siblings().removeClass('active');
	});

	$(".invoice").click(function(ev) {
    $(this).addClass('active').siblings().removeClass('active');
  });

});