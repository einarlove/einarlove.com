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

		// Sky
		ctx.fillStyle = "hsl(190, 40%, 70%)";
		ctx.fillRect(0,0, canvas.width, canvas.height)


		if(!this.currentLevel.visibleElements.isSorted){
			this.currentLevel.visibleElements.sort(function(a,b){
				if(a.position.z < b.position.z) return -1;
				if(a.position.z > b.position.z) return 1;
				return 0;
			});
			this.currentLevel.visibleElements.isSorted = true;
		}

		this.currentLevel.visibleElements.forEach(function(element){
			if(!element.hidden)
				element.display();
			if(element.type === "falling_stone" && !element.onGround)
				element.fall();
		})


		this.loop();

		if(this.requestRestart)
			this.restart();
	}
}