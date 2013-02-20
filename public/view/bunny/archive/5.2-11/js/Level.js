var Level = function(levelNumber){

	this.score = 0;


	 this.createObstacles = function(){
		// clone obstacles array and use it as render list with bunny
		this.visibleElements = this.obstacles.slice(0)

	}
	this.createObstacles();

	this.displayScore = function(x , y){
		ctx.font = "bold 24px Helvetica";

		ctx.fillStyle = "hsl(200, 20%, 80%)"
		ctx.fillText(this.score, x, y+1)

		ctx.fillStyle = "hsl(200, 20%, 50%)"
		ctx.fillText(this.score, x, y);
	}
}