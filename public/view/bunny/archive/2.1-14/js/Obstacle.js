Obstacle = function(properties){
	for(property in properties){
		this[property] = properties[property]
	}

	if(!this.sprite)
		this.sprite = new Sprite(this.type, this)

	if(!this.width) this.width = this.sprite.width;
	if(!this.height) this.height = this.sprite.height;

	this.position = new Vector(this.x, this.y)

	this.display = function(){

		this.sprite.draw(this.position, this.width, this.height);

		if(this.customLoop)
			this.customLoop()

	}


}