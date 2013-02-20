
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

	if(!hash == "#1")
		game.thisLevel.obstacles.push(
			new Obstacle({
				x: 200,
				y: 200,
				z: 1,
				width: 100,
				height: 100,
				harmfull: true,
				type: "falling_stone"
			})
		)

	game.loop = function(){
		bunny.display();
		game.thisLevel.displayScore(70, 50);
	};
	game.draw();
}
