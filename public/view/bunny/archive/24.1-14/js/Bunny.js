var Bunny = function( x, y, width, height, color){

	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.color = color;
	this.destination = {};
	this.speed = {
		x : 0.6,
		y: 0
	}

	var GRAVITY = 0.89;
	var JUMP_FORCE = 17;

	this.display = function(){
		this.updatePosition();
		this.checkCollision();
		this.displayBodyParts();
	}

	this.jump = function(){
		if(this.onSolid){
			this.speed.y = JUMP_FORCE;
			this.jumping = true;
			this.onSolid = false;
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
		// if(this.y >= 290) {
		// 	this.speed.y = 0;
		// 	this.y = 290;
		// 	return;
		// }

		if(!this.onSolid){ this.speed.y -= GRAVITY;}

	}

	this.move = function(direction){
		this.direction = direction;
		var distance = 15;
		switch(direction){
			case "left":
				this.destination.x = this.x - distance;
				break;
			case "right":
				this.destination.x = this.x + distance;
				break;
		}

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
