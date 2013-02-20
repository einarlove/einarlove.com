
document.addEventListener("keydown",function(e){
	var key = keycode.getValueByEvent(e);

	// disable arrow scrolling
	if(key === "up" || key === "down")
		e.preventDefault();

	switch(key){

		case "left":
			bunny.move("left")
			break;

		case "right":
			bunny.move("right")
			break;

		case "up": case " ":
			bunny.jump();
			break;
	}

})
document.addEventListener("keyup",function(e){
	var key = keycode.getValueByEvent(e);

	if(bunny.direction === key){
		delete bunny.direction;
	}


	// disable arrow scrolling
	if(key === "up" || key === "down")
		e.preventDefault();


})
