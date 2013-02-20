

// Store new mouse position in 'game.mousePos' variable
document.addEventListener("mousemove", getMousePos)

// Updates new position of mouse
function getMousePos(event){
	game.mousePos.x = event.offsetX || ctx.center.x;
	game.mousePos.y = event.offsetY || ctx.center.y;
}

document.addEventListener("click",function(e){
	bunny.jump();
})

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
			if(!game.jumpKeyPressed)
				bunny.jump();
			game.jumpKeyPressed = true;
			break;
	}

})
document.addEventListener("keyup",function(e){
	var key = keycode.getValueByEvent(e);

	if(bunny.direction === key){
		delete bunny.direction;
	}

	if(key === "up" || key === " ")
		game.jumpKeyPressed = false;

	// disable arrow scrolling
	if(key === "up" || key === "down")
		e.preventDefault();


})
