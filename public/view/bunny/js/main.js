// @Author Einar Löve http://einarlove.com

window.addEventListener("DOMContentLoaded", function(){

	window.overlay = document.querySelector('.start.overlay')
	window.playButton = document.querySelector('#play_btn')

	if(!window.location.hash) overlay.classList.remove("hidden")

	playButton.onclick = function(){
		overlay.classList.add("fadeOut")
		game.start();
	}

	// Check if browser is Chrome
	var browserCompatible = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;


	if(browserCompatible)
		loadAssets();
	else{
		document.querySelector(".incompatible.overlay").classList.add("fadeIn");
		_gaq.push(['_trackEvent', 'Game', "incompatible"]);
	}

})




function loadAssets(){

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
		"sprites/spritesheets/beehive.json",
		"sprites/spritesheets/bees.json",
		"sprites/spritesheets/thorn_bush.json",
		"sprites/spritesheets/cloud.json",
		"sprites/spritesheets/water.json",

		"js/Game.js",
		"js/Camera.js",

		"js/Obstacle.js",
		"js/obstacles/Soil.js",
		"js/obstacles/Cloud.js",
		"js/obstacles/Grass.js",
		"js/obstacles/Trap.js",
		"js/obstacles/Carrot.js",
		"js/obstacles/Beehive.js",
		"js/obstacles/ThornBush.js",
		"js/obstacles/Water.js",


		"js/Level.js",
		"js/levels/one.js",
		"js/levels/two.js",
		"js/levels/three.js",
		"js/levels/four.js",

		"js/helpers.js",
		"js/lib/Vector.js",
	], setup, function(remainingFiles){
		var newWidth = (remainingFiles/165) + 165 + "px";
		playButton.style.width = newWidth;
	})


	hash = window.location.hash.substr(1);

}

var setup = function(){

	playButton.classList.remove("disabled")

	canvas = getCanvas("#myCanvas");
	ctx = canvas.ctx;

	game = new Game();

	if(hash){
		var levelNumber = hash
		game.start(levelNumber);
	}

}