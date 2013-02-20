
window.onload = function(){

	window.spritesheets = {};

	include([

		"js/Bunny.js",
		"js/events.js",
		"js/detectCollision.js",

		"js/Sprite.js",
		"sprites/spritesheets/bunny.json",
		"sprites/spritesheets/soil.json",
		"sprites/spritesheets/grass.json",
		"sprites/spritesheets/vertical_grass.json",
		"sprites/spritesheets/carrot.json",

		"js/Game.js",
		"js/Camera.js",

		"js/Level.js",
		"js/levels/one.js",
		"js/levels/two.js",

		"js/Obstacle.js",
		"js/obstacles/Soil.js",
		"js/obstacles/Grass.js",
		"js/obstacles/Carrot.js",

		"js/helpers.js",
		"js/lib/Vector.js"
	], setup)


	hash = window.location.hash;

}

var setup = function(){

	canvas = getCanvas("#myCanvas");
	ctx = canvas.ctx;

	game = new Game();
	game.camera = new Camera();

	game.currentLevel = new Level(level_2(canvas));

	game.currentLevel.createObstacles();

	bunny = new Bunny( 285, 550, 30, 40);

	game.camera.follow(bunny);
	game.camera.zoomTo = 1

	// if(hash != "#1"){
	// 	var toggle = true;
	// 	fallingStones = setInterval(function(){
	// 		toggle = !toggle;
	// 		game.currentLevel.obstacles.push(
	// 			new Obstacle({
	// 				x: random(160, 420),
	// 				y: -30,
	// 				z: 1,
	// 				width: 15,
	// 				height: 15,
	// 				harmfull: true,
	// 				type: "falling_stone"
	// 			})
	// 		)
	// 	}, 1000)
	// }

	game.loop = function(){
		bunny.display();
		game.currentLevel.displayScore(70, 50);
	};
	game.draw();
}
