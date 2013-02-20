 var Cloud = function(){

 	this.type = "cloud";
 	Obstacle.apply(this, arguments);

 	this.walkThrough = true;

 	this.customLoop = function() {
	 	// Floating
	 	this.position.x -= 0.2;
	 	this.sprite.updatePosition();
 	};

}