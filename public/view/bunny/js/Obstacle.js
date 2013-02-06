Obstacle = function(properties){
	for(property in properties){
		this[property] = properties[property]
	}

	this.position = new Vector(this.x, this.y, this.z)
	this.originalPosition = this.position.get();

	if(!this.sprite)
		this.sprite = new Sprite(this.type, this)

	// If no dimension is spesified in new Creation, copy sprite's
	if(!this.width) this.width = this.sprite.width;
	if(!this.height) this.height = this.sprite.height;

	this.display = function(){
		this.sprite.draw();

		if(this.extraSprites)
			this.extraSprites.forEach(function(sprite){
				sprite.draw();
				if(sprite.type == "bees")
					sprite.moveBees();
			})

		if(this.customLoop)
			this.customLoop()

	}

	this.reset = function(){
		this.position = this.originalPosition.get();
	}


}