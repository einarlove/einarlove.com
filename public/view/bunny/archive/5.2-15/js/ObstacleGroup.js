ObstacleGroup = function(properties){
	for(property in properties){
		this[property] = properties[property]
	}

	this.position = new Vector(this.x, this.y)

	this.display = function(){

		this.obstacles.forEach(function(obstacle){
			obstacle.display();
		})

	}

}