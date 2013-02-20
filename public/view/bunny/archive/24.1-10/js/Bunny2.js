var Bunny = function( x, y, width, height, color){

	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.color = color;
	this.destination = {};
	this.speed = {x:0, y:0}
	this.jumpForce = 10;

	this.display = function(){
		this.updatePosition();
		this.applyGravity();
		this.displayBodyParts();
	}

	this.jump = function(){
		if(this.isOnGround())
			this.y -= 90;
	}

	this.updatePosition = function(){
		if(this.destination.x == this.x || Math.abs(this.x - this.destination.x) < 1)
			delete this.destination.x

		if(this.destination.x)
			bunny.x = linear(bunny.x, 0, this.destination.x, 0, 0.05).x
	}

	this.applyGravity = function(){
		if(!bunny.isOnGround()){
			this.speed.y -= 0.08;
			this.y += this.jumpForce - this.speed.y
		}
	}

	this.isOnGround = function(){
		if(isOverlaying(this, ground))
			return true;
		else return false;
	}

	this.displayBodyParts = function(){
		// Body
		ctx.fillStyle = this.color;
		ctx.fillRect( this.x, this.y, this.width, this.height)
		// Ears
		ctx.fillRect( this.x, this.y - 15, 8, 15)
		ctx.fillRect( this.x + 9, this.y - 15, 8, 15)
		// Tail
		ctx.fillRect( this.x + this.width, this.y + this.height - 10, 6, 10)
		// Eyes
		ctx.fillStyle = "#222";
		ctx.fillRect( this.x + 3, this.y + 10, 3, 3)
		ctx.fillRect( this.x, this.y + 10, 2, 3)
		// Nose
		ctx.fillStyle = "hsl(0, 60%, 80%)";
		ctx.fillRect( this.x, this.y + 16, 3, 3)
	}
}
