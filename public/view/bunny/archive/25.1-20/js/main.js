
window.onload = function(){

	include([
		"helpers",
		"events",
		"Game",
		"Level",
		"Obstacle",
		"Bunny",
		"detectCollision"
	])

}

function setup(){

	game = new Game();
	game.thisLevel = new Level();
	canvas = getCanvas("#myCanvas");
	ctx = canvas.ctx;

	bunny = new Bunny( 350, 200, 30, 40, "#eee");

	createObstacles();

	game.loop = function(){
		bunny.display();
	};
	game.draw();
}

function createObstacles(){

	// Background
	game.thisLevel.obstacles.push(
		new Obstacle({
			x: 0,
			y: 0,
			width: canvas.width,
			height: canvas.height,
			type: "background",
			zIndex: 1,
			untouchable : true
		})
	)
	// Ground
	game.thisLevel.obstacles.push(
		new Obstacle({
			x: 0,
			y: canvas.height - 80,
			width: 600,
			height: 80,
			type: "ground",
			zIndex: 2
		})
	)

	// Left wall
	game.thisLevel.obstacles.push(
		new Obstacle({
			x: 0,
			y: 0,
			width: 30,
			height: canvas.height - 80 + 23,
			type: "left_wall",
			zIndex: 2
		})
	)

	// Right wall
	game.thisLevel.obstacles.push(
		new Obstacle({
			x: canvas.width - 30,
			y: 0,
			width: 30,
			height: canvas.height - 80 + 23,
			type: "right_wall",
			zIndex: 2
		})
	)

	// Floating platform
	game.thisLevel.obstacles.push(
		new Obstacle({
			x: 250,
			y: canvas.height - 200,
			width: 100,
			height: 40,
			type: "ground",
			zIndex: 2
		})
	)


	// Floating platform
	game.thisLevel.obstacles.push(
		new Obstacle({
			x: 22,
			y: canvas.height - 280,
			width: 100,
			height: 40,
			type: "ground",
			zIndex: 2
		})
	)

	// Floating platform
	game.thisLevel.obstacles.push(
		new Obstacle({
			x: 478,
			y: canvas.height - 280,
			width: 100,
			height: 40,
			type: "ground",
			zIndex: 2
		})
	)


	// Floor 2

	// Floating platform
	game.thisLevel.obstacles.push(
		new Obstacle({
			x: 200,
			y: canvas.height - 440,
			width: 200,
			height: 40,
			type: "ground",
			zIndex: 2
		})
	)


}