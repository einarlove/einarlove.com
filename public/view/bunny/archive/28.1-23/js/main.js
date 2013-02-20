
window.onload = function(){

	include([
		"Bunny",
		"events",
		"Game",
		"Level",
		"levels/one",
		"levels/two",
		"Obstacle",
		"helpers",
		"detectCollision"
	])

	hash = window.location.hash;

}

function setup(){

	canvas = getCanvas("#myCanvas");
	ctx = canvas.ctx;

	game = new Game();

	if(hash == "#1")
		game.thisLevel = new Level(level_1);
	else
		game.thisLevel = new Level(level_2);

	game.thisLevel.createObstacles();

	bunny = new Bunny( 300, 550, 30, 40, "#eee");

	if(hash != "#1"){
		var toggle = true;
		fallingStones = setInterval(function(){
			toggle = !toggle;
			game.thisLevel.obstacles.push(
				new Obstacle({
					x: random(160, 420),
					y: -30,
					z: 1,
					width: 15,
					height: 15,
					harmfull: true,
					type: "falling_stone"
				})
			)
		}, 1000)
	}

	game.loop = function(){
		bunny.display();
		game.thisLevel.displayScore(70, 50);
	};
	game.draw();
}
