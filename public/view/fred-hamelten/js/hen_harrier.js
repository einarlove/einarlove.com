$(function(){
	var offset,
			$header = $("#nav_header"),
			$fullScreens = $(".fullscreen"),
			$video = $("#intro video"),
			$bgHolder = $("#bgImageHolder"),
			headerRestPos = $header.offset().top,
			sticky = false,
			rescale = false;

	// Set section's height to window.height on load
	recalculate();

	// Checks if there is an hash in URL and scrolls to it
	$.localScroll.hash({
		target: window,
		qeue: true,
		duration: 2000,
		offset : 20
	});
	// Make navigation buttons smooth scroll to sections
	$("#nav_header").localScroll({
		hash : true,
		stop : true,
		offset : 20
	});


	// Change section height
	function recalculate(){
		if (window.innerHeight > 600)
			$fullScreens.each(function(i,element){
				height = window.innerHeight;
				if(element.id !== "intro")
					height += 40;
				$(element).css("height",height);
			})
		headerRestPos = window.innerHeight - $header.outerHeight();
		$video.css("margin-left", -$video.width()/2)
	}

	// recalculate() if window is resized
	$(window).resize(function(){
		if(rescale !== false)
			clearTimeout(rescale);
		rescale = setTimeout(recalculate, 500)
	})

	// Make navigation stick to top when scrolled past #top
	$(window).bind("scroll touchmove",function(){
		offset = window.pageYOffset;
		if(offset > headerRestPos && !sticky){
			$header.addClass("sticky");
			sticky = true;
		}
		if(offset < headerRestPos && sticky){
			$header.removeClass("sticky");
			sticky = false;
		}
	})

	// Hide contents if Javascript is supported and reveal them on scroll
	$("body").addClass("js")
	$("#kunster, #oyebryn, #kurs, #produkter, #kontakt").bind('inview', function(event, visible){
		if (visible === true)
			$(this).addClass("beenViewed")
	})

  // Center video 
	$video.bind('loadedmetadata', function(){
		$video.css("margin-left", -$video.width()/2);
		$("#intro .overlay").hide();
	})

	// Autoscroll down when video ends
	$video.bind("ended",function(){
		if(document.body.scrollTop === 0)
			$(window).scrollTo("#kunster", 2000);
	})
	

	$("#produkter nav a, #kontakt nav a").on("click", function(e){
		e.preventDefault();

		// If beta link
		if($(this).hasClass("beta"))
			return false;


		var id = $(this).attr("href").substring(1);
		$(this).parent().addClass("active")
			.siblings(".active").removeClass("active")
		
		$("#"+id).siblings(".current")
			.addClass("hidden").removeClass("current")
			.end()
			.addClass("current").removeClass("hidden");

		if($(this).parent().siblings("ul").length){
			$bgHolder.addClass(
				$("."+id+"-nav").find(".active a").attr("href").substring(1)
			)
		}
		else{
			$bgHolder.addClass(id)
		}
		bgImage = $bgHolder.css("background-image");

		$bgHolder.fadeIn(1000, function(){
				$("#produkter").css("background-image",bgImage);
				$(this).fadeOut("fast",function(){$(this).removeClass()})
			});


	})


	//  For beta purposes since this is not a finished site

	/* Disable links which does not work yet */
	$(".beta").on("click", function(e){
		e.preventDefault();
		e.stopPropagation()
	})

	// Preload images
	$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
	}
	$([
		"images/section-4-pinsett-design.jpg",
		"images/section-4-oyeskygge-kosmetikk.jpg"
		]).preload();



})
