SoilAndGrass = function() {

	this.type = "soilAndGrass"
	ObstacleGroup.apply(this, arguments);

	this.obstacles = [];

	this.obstacles.push(
		new Soil({
			x: this.x,
			y: this.y,
			width: this.width,
			height: this.height,
			offset: this.offset
		})
	);

	if(this.vertical){
		this.obstacles.push(
			new Grass({
				x: this.x,
				y: this.y,
				height: this.height,
				offsetX: this.offsetX,
				vertical: this.vertical
			})
		)
	}
	else{
		this.obstacles.push(
			new Grass({
				x: this.x,
				y: this.y,
				width: this.width,
				offsetX: this.offsetX
			})
		)
	}



};