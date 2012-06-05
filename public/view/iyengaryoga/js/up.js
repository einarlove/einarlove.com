$(document).ready(function() {

	$("div.contentWrapper#footer").height($(window).height());

	$('a[href=#up]').click(function(){
		$('html, body').animate({scrollTop: 0}, 500);
	    return false;
	});
	
	$('a[href=#about]').click(function(){
		$('html, body').animate({scrollTop: $(".contentWrapper#about").offset().top - 140}, 500);
	    return false;
	});
	
	$('a[href=#work]').click(function(){
	    $('html, body').animate({scrollTop: $(".contentWrapper#work").offset().top - 140}, 500);
	    return false;
	});
	
	$('a[href=#contact]').click(function(){
	    $('html, body').animate({scrollTop: $(".contentWrapper#footer").offset().top - 140}, 500);
	    return false;
	});
	
});


