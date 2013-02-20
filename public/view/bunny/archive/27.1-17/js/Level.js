var Level = function(){
	this.obstacles = []
	this.score = 0;

	this.displayScore = function(x ,y){
		ctx.font = "bold 24px Helvetica";

		ctx.fillStyle = "hsl(200, 20%, 80%)"
		ctx.fillText(this.score, x, y+1)

		ctx.fillStyle = "hsl(200, 20%, 50%)"
		ctx.fillText(this.score, x, y);
	}
}