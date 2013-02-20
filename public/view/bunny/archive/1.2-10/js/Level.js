var Level = function(importedObstacles){
	this.obstacles = [];
	this.score = 0;

	this.createObstacles = function(){
		importedObstacles(canvas).forEach(function(obstacleProperties){
			this.obstacles.push( new Obstacle(obstacleProperties) )
		}, this)
	}

	this.displayScore = function(x , y){
		ctx.font = "bold 24px Helvetica";

		ctx.fillStyle = "hsl(200, 20%, 80%)"
		ctx.fillText(this.score, x, y+1)

		ctx.fillStyle = "hsl(200, 20%, 50%)"
		ctx.fillText(this.score, x, y);
	}
}