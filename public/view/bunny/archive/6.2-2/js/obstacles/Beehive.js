var Beehive = function(properties){

	this.type = "beehive"
	this.harmfull = true;
	this.walkThrough = true;

	Obstacle.apply(this, arguments);

	this.extraSprites = []
	if(this.hasBees){
		var bees = new Sprite("bees", this)
		this.extraSprites.push(bees)
	}

}