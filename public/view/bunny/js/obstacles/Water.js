var Water = function(){

	this.type = "water";
	Obstacle.apply(this, arguments);
	this.walkThrough = true;
	this.harmfull = true;

	this.customLoop = function() {
		this.sprite.offset = 0.4;
		this.sprite.moveWater();
	};

}