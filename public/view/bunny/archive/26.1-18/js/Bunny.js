var Bunny = function( x, y, width, height, color){

	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.color = color;
	this.destination = {};
	this.walkDistance = 20;
	this.walkBoost = 0;
	this.speed = {
		x : 0.4,
		y: 0
	}
	this.onSolid = false;
	this.GRAVITY = 0.89;
	this.JUMP_FORCE = 17;
	this.hanging = {};

	this.display = function(){
		this.updatePosition();
		this.checkCollision();
		this.displayBodyParts();
	}

	this.jump = function(){
		if(this.onSolid){
			this.speed.y = this.JUMP_FORCE;
			this.jumping = true;
			this.onSolid = false;
		}
		else if(this.hanging.onWall){
			this.direction = this.hanging.direction;
			this.speed.y = this.JUMP_FORCE;
			this.jumping = true;
			this.hanging.onWall = false;
			delete this.hanging.direction
		}
	}

	this.updatePosition = function(){
		this.applyGravity();
		this.y -= this.speed.y;


		if(this.direction){
			this.move(this.direction)
		}
		if(this.destination.x)
			bunny.x = linear(bunny.x, 0, this.destination.x, 0, this.speed.x).x
	}

	this.applyGravity = function(){
		if(this.onSolid) this.speed.y = 0;
		if(this.speed.y < -20) return;
		this.speed.y -= this.GRAVITY;
	}

	this.move = function(direction){
		this.direction = direction;
		switch(direction){
			case "left":
				this.destination.x = this.x - this.walkDistance + this.walkBoost;
				break;
			case "right":
				this.destination.x = this.x + this.walkDistance + this.walkBoost;
				break;
		}

	}

	this.collect = function(object){
		object.respawn();
	}

	this.displayBodyParts = function(){

		// Body
		ctx.fillStyle = this.color;
		ctx.fillRect( this.x, this.y, this.width, this.height)
		// Ears
		ctx.fillRect( this.x, this.y - 15, 8, 15)
		ctx.fillRect( this.x + 9, this.y - 15, 8, 15)
		ctx.fillStyle = "hsl(0, 60%, 80%)";
		ctx.fillRect( this.x + 9, this.y - 12, 3, 12)
		ctx.fillRect( this.x, this.y - 12, 2, 12)
		// Tail
		ctx.fillStyle = this.color;
		ctx.fillRect( this.x + this.width, this.y + this.height - 10, 6, 10)
		// Eyes
		ctx.fillStyle = "#222";
		ctx.fillRect( this.x + 3, this.y + 10, 3, 3)
		ctx.fillRect( this.x, this.y + 10, 2, 3)
		// Nose
		ctx.fillStyle = "hsl(0, 60%, 80%)";
		ctx.fillRect( this.x, this.y + 16, 3, 3)
		// feet lines
		ctx.fillStyle = "#ccc";
		// ctx.fillRect( this.x + 5, this.y + 30, 1, 10)
		ctx.fillRect( this.x + 10, this.y + 25, 1, 15)
		ctx.fillRect( this.x + 10, this.y + 25, 10, 1)

	}
}
