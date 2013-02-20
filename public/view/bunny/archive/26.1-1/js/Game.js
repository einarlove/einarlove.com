Game = function(){

	this.frameCount = 0;
	this.runningTime = 0;
	this.deltaTime = 0;

	this.draw = function(){
		ctx.clearCanvas();
		webkitRequestAnimationFrame(this.draw.bind(this));
		// setTimeout(this.draw.bind(this), 1000/6);

		if(!this.thisLevel.obstacles.isSorted){
			this.thisLevel.obstacles.sort(function(a,b){
				if(a.z < b.z) return -1;
				if(a.z > b.z) return 1;
				return 0;
			});
			this.thisLevel.obstacles.isSorted = true;
		}

		this.thisLevel.obstacles.forEach(function(obstacle){
			obstacle.graphic();
		})

		this.loop();
	}
}