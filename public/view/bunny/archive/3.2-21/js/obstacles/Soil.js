var Soil = function(properties){

	this.type = "soil"
	Obstacle.apply(this, arguments);

	this.extraSprites = []
	if(this.grassOn == "right"){
		var rightGrass = new Sprite("vertical_grass", this)
		rightGrass.anchor = "right";
		rightGrass.flip = true;
		this.extraSprites.push(rightGrass)
	}
	else if(this.grassOn == "left"){
		var leftGrass = new Sprite("vertical_grass", this)
		this.extraSprites.push(leftGrass)
	}
	else if(!this.plain) {
		this.extraSprites.push(new Sprite("grass", this))
	}

}