Game = function(){

	this.frameCount = 0;
	this.runningTime = 0;
	this.deltaTime = 0;

	this.draw = function(){
		ctx.clearCanvas();
		webkitRequestAnimationFrame(this.draw.bind(this));


		this.loop();
	}
}