

// // Store new mouse position in 'game.mousePos' variable
// document.addEventListener("mousemove", getMousePos)

// // Updates new position of mouse
// function getMousePos(event){
// 	game.mousePos.x = event.offsetX || ctx.center.x;
// 	game.mousePos.y = event.offsetY || ctx.center.y;
// }

// document.addEventListener("click",function(e){
// 	bunny.jump();
// })

var backward_button_down = false;
var forward_button_down = false;

document.addEventListener("keydown",function(e){
	var key = keycode.getValueByEvent(e);

	// disable arrow scrolling
	if(key === "up" || key === "down")
		e.preventDefault();

	switch(key){

		case "left":
			backward_button_down = true;
			break;

		case "right":
			forward_button_down = true;
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

	if(key === "left")
		backward_button_down = false;

	if(key === "right")
		forward_button_down = false;

	if(key === "up" || key === " ")
		game.jumpKeyPressed = false;

	// disable arrow scrolling
	if(key === "up" || key === "down")
		e.preventDefault();


})
