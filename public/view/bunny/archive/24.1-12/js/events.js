
document.addEventListener("keydown",function(e){
	var key = keycode.getValueByEvent(e);

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

})
