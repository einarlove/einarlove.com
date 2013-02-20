
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
			z: 1,
			width: canvas.width,
			height: canvas.height,
			type: "background",
			untouchable : true
		})
	)
	// Ground
	game.thisLevel.obstacles.push(
		new Obstacle({
			x: 0,
			y: canvas.height - 80,
			z: 2,
			width: 600,
			height: 80,
			type: "ground",
		})
	)

	// Left wall
	game.thisLevel.obstacles.push(
		new Obstacle({
			x: 0,
			y: 0,
			z: 2,
			width: 30,
			height: canvas.height - 80 + 23,
			type: "left_wall",
		})
	)

	// Right wall
	game.thisLevel.obstacles.push(
		new Obstacle({
			x: canvas.width - 30,
			y: 0,
			z: 2,
			width: 30,
			height: canvas.height - 80 + 23,
			type: "right_wall",
		})
	)

	// Floating platform
	game.thisLevel.obstacles.push(
		new Obstacle({
			x: 250,
			y: canvas.height - 200,
			z: 2,
			width: 100,
			height: 40,
			type: "ground",
		})
	)


	// Floating platform
	game.thisLevel.obstacles.push(
		new Obstacle({
			x: 22,
			y: canvas.height - 280,
			z: 2,
			width: 100,
			height: 80,
			type: "ground",
		})
	)

	// Floating platform
	game.thisLevel.obstacles.push(
		new Obstacle({
			x: 478,
			y: canvas.height - 280,
			z: 2,
			width: 100,
			height: 40,
			type: "ground",
		})
	)


	// Floor 2

	// Floating platform
	game.thisLevel.obstacles.push(
		new Obstacle({
			x: 200,
			y: canvas.height - 440,
			z: 2,
			width: 200,
			height: 40,
			type: "ground",
		})
	)


}