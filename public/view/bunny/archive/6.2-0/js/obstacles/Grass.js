var Grass = function(){

	if(arguments[0].vertical)
		this.type = "vertical_grass"
	else
		this.type = "grass"
	Obstacle.apply(this, arguments);

}