Game = function(){

	this.frameCounter = 0;
	this.mousePos = {x:0, y:0}

	this.restart = function(){
		window.clearInterval(fallingStones);
		delete bunny;
		this.stopDraw = true;
		delete game;


		setup();
	}

	this.draw = function(){
		if(this.stopDraw){return;}

		ctx.clearCanvas();
		webkitRequestAnimationFrame(this.draw.bind(this));
		// setTimeout(this.draw.bind(this), 1000/6);
		game.frameCounter++;

		if(!this.thisLevel.obstacles.isSorted){
			this.thisLevel.obstacles.sort(function(a,b){
				if(a.z < b.z) return -1;
				if(a.z > b.z) return 1;
				return 0;
			});
			this.thisLevel.obstacles.isSorted = true;
		}

		this.thisLevel.obstacles.forEach(function(obstacle){
			if(!obstacle.hidden)
				obstacle.display();
			if(obstacle.type === "falling_stone" && !obstacle.onGround)
				obstacle.fall();
		})

		this.loop();
	}
}