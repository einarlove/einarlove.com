var Level = function(levelNumber){

	this.number = parseInt(levelNumber,10);

	// Copy all properties from level object
	var levelObject = levels[this.number]();


	this.width = levelObject.width
	this.height = levelObject.height

	this.startPosition = new Vector(levelObject.startPosition);
	this.defaultZoom = levelObject.defaultZoom;

	this.score = 0;

	this.obstacles = levelObject.obstacles.slice(0)

	// Temporary background for prototype
	this.soilBg = new Soil({
		x: -this.width/2,
		y: -this.width/2,
		width: this.width * 2,
		height: this.height * 2
	})

	this.won = function(){
		game.camera.zoomTo = 1.7
		bunny.playable = false;
		var nextLevel = this.number + 1;
		if(this.isLastLevel()){
			game.finished()
			return;
		}
		setTimeout(function(){
			game.changeLevelTo(nextLevel)
		}, 1500)
	}


	// New array with obstacles, Bunny and related for Z axis
	this.visibleElements = this.obstacles.slice(0)

	this.resetObstacles = function(){
		this.obstacles.forEach(function(obstacle){
			obstacle.reset();
		})
	}

	this.reset = function(firstTime){
		this.resetObstacles();
		game.changeLevelTo(this.number)
		if(!firstTime) _gaq.push(['_trackEvent', 'Level', "restart", this.number.toString()]);
	}

	this.isLastLevel = function(){
		if(levels[this.number + 1] !== undefined) return false;
		else return true;
	}
}