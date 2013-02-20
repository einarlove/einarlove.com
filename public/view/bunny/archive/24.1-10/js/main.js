
window.onload = function(){

	include("helpers");
	include("events");
	include("Game");
	include("Bunny");
	include("detectCollision");

}

function setup(){

	game = new Game();
	canvas = getCanvas("#myCanvas");
	ctx = canvas.ctx;

	bunny = new Bunny( 350, 200, 30, 40, "#eee");

	ground = {
		x: 0,
		y: 330,
		height: 80,
		width: 600
	}

	game.loop = function(){

		// Background
		ctx.fillStyle = "hsl(190, 40%, 70%)"
		ctx.fillRect(0, 0, canvas.width, canvas.height)

		bunny.display();

		// Ground
		ctx.fillStyle = "hsl(25, 30%, 50%)"
		ctx.fillRect(ground.x, ground.y, ground.width, ground.height)

		// Grass
		ctx.fillStyle = "hsl(120, 40%, 50%)"
		ctx.fillRect(ground.x, ground.y, ground.width, ground.height/4)
		for(i=0; i<30;i++){
			ctx.fillRect(ground.x+(i*20), ground.y+ground.height/4, 16, 2)
		}
	};

	game.draw();
}