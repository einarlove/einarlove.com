var Camera = function(){

	this.x = canvas.width/2;
	this.y = canvas.height/2;

	this.destination = {};

	this.zoom = 1;
	this.zoomTo;

	this.panSpeed = 0.05

	this.move = function(){
		this.getPositionTo(this.followedObject)
		this.checkBoundingBox();
		this.adjustZoom();
		this.moveTowards(this.destination)
	}

	this.follow = function(object){
		this.followedObject = object;
	}

	this.getPositionTo = function(object){
		this.destination.x = object.position.x + object.width/2;
		this.destination.y = object.position.y + object.height/2;
	}

	// Changes zoom in bézier curve
	this.adjustZoom = function(){
		if(this.zoom != this.zoomTo && this.zoomTo)
			this.zoom = linear(this.zoom, 0, this.zoomTo, 0, 0.05).x;
	}

	// Stop camera if it goes outside canvas
	this.checkBoundingBox = function(){

		// Right
		if(this.destination.x + (canvas.width/2)/this.zoom > canvas.width)
			this.destination.x = canvas.width - (canvas.width/2)/this.zoom;

		// Left
		if(this.destination.x - (canvas.width/2)/this.zoom < 0)
			this.destination.x = (canvas.width/2)/this.zoom;

		// Bottom
		if(this.destination.y + (canvas.height/2)/this.zoom > canvas.height)
			this.destination.y = canvas.height - (canvas.height/2)/this.zoom;

		// Top
		if(this.destination.y - (canvas.height/2)/this.zoom < 0)
			this.destination.y = (canvas.height/2)/this.zoom;
	}


	this.moveTowards = function(destination){

		var newPosition = linear(this.x, this.y, destination.x, destination.y, this.panSpeed);

		this.x = newPosition.x;
		this.y = newPosition.y;


		ctx.translate(
			(canvas.width/2 - this.x * this.zoom),
		  (canvas.height/2 - this.y * this.zoom)
		);

		ctx.scale(this.zoom, this.zoom)
	}

	// For testing purposes
	this.displayCameraParts = function(){
		ctx.fillRect(this.x, this.y, 20, 20)
		ctx.fillStyle = "red";
		ctx.fillRect(((canvas.width)), this.y, 50, 50)
	}
}