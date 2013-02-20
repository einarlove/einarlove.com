var Bunny = function( x, y, width, height, color){

	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.color = color;

	this.onSolid = false;
	this.hanging = {};

	// Related to Y
	this.GRAVITY = 0.89;
	this.WEIGHT = 17;
	this.JUMP_FORCE = 17;
	this.speed = {y: 0}

	// Related to X
	this.MAX_SPEED = 8;
	this.ACCELERATION = 1.3;
	this.STOPFORCE = 1.6;
	this.velocity = 0;


	this.display = function(){
		this.updatePosition();
		this.checkCollision();
		this.displayBodyParts();
	}

	this.updatePosition = function(){

		this.applyGravity();
		this.y -= this.speed.y;

		this.applyAcceleration();
		this.x += this.velocity;

		// Slow fallspeed when hanging on wall
		if(this.hanging.onWall && this.inAir && this.speed.y < -3){
			this.speed.y = -3;
		}


	}

	this.jump = function(){
		if(this.onSolid){
			this.speed.y = this.JUMP_FORCE;
			this.jumping = true;
			this.onSolid = false;
		}
		else if(this.hanging.onWall){
			this.direction = this.hanging.direction;

			if(this.direction == "left")
				this.velocity = -this.MAX_SPEED;
			else if(this.direction == "right")
				this.velocity = this.MAX_SPEED;

			this.speed.y = this.JUMP_FORCE;
			this.jumping = true;
			this.hanging.onWall = false;
			delete this.hanging.direction
		}
	}

	this.applyAcceleration = function(){
		if(forward_button_down){
			this.velocity += this.ACCELERATION;
			if(this.velocity > this.MAX_SPEED){
				this.velocity = this.MAX_SPEED
			}
		}
		else if (backward_button_down){
			this.velocity -= this.ACCELERATION;
			if(this.velocity < -this.MAX_SPEED){
				this.velocity = -this.MAX_SPEED;
			}
		} else if(!this.inAir) {
			if(this.velocity < 0){
				this.velocity += this.STOPFORCE;
				if(this.velocity >= 0){
					this.velocity = 0;
				}
			} else {
				this.velocity -= this.STOPFORCE;
				if(this.velocity <= 0){
					this.velocity = 0;
				}
			}
		}
	}

	this.applyGravity = function(){
		if(this.onSolid) this.speed.y = 0;
		if(this.speed.y < -this.WEIGHT) return;
		this.speed.y -= this.GRAVITY;
	}

	this.collect = function(object){
		object.respawn();
		game.thisLevel.score++;
	}

	this.touchesDangerous = function(obstacle, direction){
		if(obstacle.type == "falling_stone" &&
			direction.top || direction.right || direction.left)
			bunny.die();
	}

	this.die = function(){
		game.requestRestart = true;
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
