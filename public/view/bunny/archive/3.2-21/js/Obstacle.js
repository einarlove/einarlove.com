Obstacle = function(properties){
	for(property in properties){
		this[property] = properties[property]
	}

	this.position = new Vector(this.x, this.y)

	if(!this.sprite)
		this.sprite = new Sprite(this.type, this)

	if(!this.width) this.width = this.sprite.width;
	if(!this.height) this.height = this.sprite.height;


	this.display = function(){
		this.sprite.draw();

		if(this.extraSprites)
			this.extraSprites.forEach(function(sprite){
				sprite.draw();
			})

		if(this.customLoop)
			this.customLoop()

	}


}