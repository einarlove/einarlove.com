
	"don't be strict yo";

window.onload = function(){

	window.spritesheets = {};
	window.levels = [];

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

		"js/Obstacle.js",
		"js/obstacles/Soil.js",
		"js/obstacles/Grass.js",
		"js/obstacles/Trap.js",
		"js/obstacles/Carrot.js",


		"js/Level.js",
		"js/levels/one.js",
		"js/levels/two.js",

		"js/helpers.js",
		"js/lib/Vector.js",
	], setup)


	hash = window.location.hash.substr(1);

}

var setup = function(){

	canvas = getCanvas("#myCanvas");
	ctx = canvas.ctx;

	game = new Game();
	game.camera = new Camera();

	if(hash) var levelNumber = hash;
	else var levelNumber = 2;

	game.currentLevel = new Level(levelNumber);

	bunny = new Bunny(game.currentLevel.startPosition);

	game.camera.follow(bunny);
	game.camera.zoomTo = game.currentLevel.defaultZoom || 1;

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

	};
	game.draw();
}
