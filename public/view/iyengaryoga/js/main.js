$(document).ready(function() {


	


	// if($(location).attr('href')){
	// 	ankeret = extractHash($(location));
	// 	$("span#"+ankeret).addClass("chosenOne");
	// }

		
	// if you are on another page then the tag
	if($(location).attr('href')){
		ankeret = extractHash($(location));
		if(	$("#" + ankeret).length != 0) {
				$('html, body').animate({scrollTop: $("#" + ankeret).offset().top - 140}, 500);
		}
	}



	function hideMeny(button, element){
		$(button).mouseover(function() {
			$('.submeny > div').hide();
			$(element).not(":visible").fadeIn();
		});
	}

	// 
	$('.submeny a').click(function(){
		ankeret = extractHash($(this));
		if(	$("#" + ankeret).length != 0) {
			$('html, body').animate({scrollTop: $("#" + ankeret).offset().top - 140}, 500);
			$('.submeny > div').fadeOut();	
		}
	});


	hideMeny("#yogaKnapp", "#iyengarSub");
	hideMeny("#larereKnapp", "#larereSub");
	hideMeny("#utdannelseKnapp", "#utdannelseSub");
	hideMeny("#foreningenKnapp", "");




	$('#header').mouseleave(function() {
		$('.submeny > div').fadeOut();
	});



});

// For slideren
$(window).load(function() {
			$("div#slider").smoothDivScroll({
				
				autoScroll: "onstart" , 
				autoScrollDirection: "endlessloopright", 
				autoScrollStep: 1, 
				autoScrollInterval: 20,	
				startAtElementId: "start", 
		
			});
});





function viewCity(city){
	$("#larere > ul > li").show();
	$("#larere > ul > li").not($('.' + city)).hide();
	console.log(city);
}
function viewMap(place){
	place = "gfx/larere/" + place + ".jpg";
	$("#lokaler img").attr('src', place);
}
function extractHash(link){
	link = link.attr('href');
	var hash = link.split("#")[1];
	return hash
}

