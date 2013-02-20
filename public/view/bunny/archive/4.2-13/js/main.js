
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
		"sprites/spritesheets/trap.json",
		"sprites/spritesheets/carrot.json",

		"js/Game.js",
		"js/Camera.js",

		"js/Level.js",
		"js/levels/one.js",
		"js/levels/two.js",

		"js/Obstacle.js",
		"js/obstacles/Soil.js",
		"js/obstacles/Grass.js",
		"js/obstacles/Trap.js",
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

	bunny = new Bunny( 285, 550, 2, 30, 40);

	game.camera.follow(bunny);
	game.camera.zoomTo = 1;
	game.camera.panSpeed = 0.05;

	var timer = Date.now();
	var timeGone = 0;
	var timeTotal = 0;

	game.loop = function(){

		// // Olivier Magic
		// timeGone = Date.now() - timer;
		// if(timeGone > 100) timeGone = 0;
		// timer = Date.now();
		// timeTotal += timeGone;

		// if(timeTotal > 5000){
		// 	timeTotal = 0;
		// 	console.log("kill shot!");
	 //  }

		game.currentLevel.displayScore(70, 50);

	};
	game.draw();
}
