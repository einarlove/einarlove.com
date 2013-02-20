
document.addEventListener("keydown",function(e){
	var key = keycode.getValueByEvent(e);

	if(key === " " || key === "up"){
		bunny.jump();
	}

	if(key === "left"){
		bunny.destination.x = bunny.x - 60
	}

	if(key === "right"){
		bunny.destination.x = bunny.x + 60
	}

})
