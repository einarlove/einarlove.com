var Grass = function(){

	Obstacle.apply(this, arguments);

	this.sprite = new Sprite("grass")

	this.display = function(){
		if(!this.sprite)
			this.fallbackGraphic();
		else{
			this.sprite.draw(this.x, this.y, this.width, this.height);
		}

	}

	this.fallbackGraphic = function(){
		// Ground
		ctx.fillStyle = "hsl(25, 30%, 50%)"
		ctx.fillRect(this.x, this.y, this.width, this.height)

		// Grass
		ctx.fillStyle = "hsl(120, 40%, 50%)"
		ctx.fillRect(this.x, this.y, this.width, this.height/4)
		for(i=0; i<this.width/20;i++){
			ctx.fillRect(this.x+(i*20), this.y+this.height/4, 16, 2)
		}
	}

}