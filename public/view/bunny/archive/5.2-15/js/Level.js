var Level = function(levelNumber){

	this.number = levelNumber;

	// Copy all properties from level object
	var levelObject = levels[this.number]();

	this.width = levelObject.width
	this.height = levelObject.height

	this.startPosition = new Vector(levelObject.startPosition);
	this.defaultZoom = levelObject.defaultZoom;

	this.score = 0;


	this.obstacles = levelObject.obstacles.slice(0)


	// New array with obstacles, Bunny and related for Z axis
	this.visibleElements = this.obstacles.slice(0)

	this.resetObstacles = function(){
		this.obstacles.forEach(function(obstacle){
			obstacle.reset();
		})
	}

	this.reset = function(){
		this.resetObstacles();
		game.changeLevelTo(this.number)
	}

}