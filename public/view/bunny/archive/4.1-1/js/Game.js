Game = function(){

	this.frameCounter = 0;
	this.mousePos = {x:0, y:0}

	this.restart = function(){
		this.stopDraw = true;
		delete bunny;
		delete game.currentLevel;
		delete game;

		setup();
	}

	this.draw = function(){
		if(this.stopDraw){return;}

		ctx.clearCanvas();
		webkitRequestAnimationFrame(this.draw.bind(this));
		// setTimeout(this.draw.bind(this), 1000/1);
		game.frameCounter++;

		game.camera.move();

		ctx.fillStyle = "hsl(190, 40%, 70%)";
		ctx.fillRect(0,0, canvas.width, canvas.height)


		if(!this.currentLevel.obstacles.isSorted){
			this.currentLevel.obstacles.sort(function(a,b){
				if(a.z < b.z) return -1;
				if(a.z > b.z) return 1;
				return 0;
			});
			this.currentLevel.obstacles.isSorted = true;
		}


		this.currentLevel.obstacles.forEach(function(obstacle){
			if(!obstacle.hidden)
				obstacle.display();
			if(obstacle.type === "falling_stone" && !obstacle.onGround)
				obstacle.fall();
		})

		this.loop();

		if(this.requestRestart)
			this.restart();
	}
}