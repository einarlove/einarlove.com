var Bunny = function( x, y, width, height, color){

	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.color = color;

	this.sprite = new Sprite("bunny");

	this.onSolid = false;
	this.hanging = {};

	// Related to Y
	this.GRAVITY = 0.89;
	this.WEIGHT = 17;
	this.JUMP_FORCE = 17;
	this.verticalForce = 0;

	// Related to X
	this.MAX_SPEED = 8;
	this.ACCELERATION = 1.3;
	this.STOPFORCE = 1.6;
	this.velocity = 0;


	this.display = function(){
		this.updatePosition();
		this.checkCollision();
		this.checkBoundingbox();
		// this.displayBodyParts();

		if(this.hanging.onWall && this.inAir && this.verticalForce < 0){
			this.sprite.gotoAndPlay("hang_on_wall")
		}
		else if(this.velocity == 0 && this.onSolid)
			this.sprite.gotoAndPlay("stand_still")
		else
			this.sprite.gotoAndPlay("run")

		this.sprite.draw(this.x, this.y, this.width, this.height)
	}

	this.updatePosition = function(){

		this.applyGravity();
		this.y -= this.verticalForce;

		this.applyAcceleration();
		this.x += this.velocity;

		// Flip sprite after direction
		if(this.velocity != 0){
			if(this.velocity < 0)
				this.sprite.flip = true;
			else this.sprite.flip = false;
		}

		// Slow fallspeed when hanging on wall
		if(this.hanging.onWall && this.inAir && this.verticalForce < -3){
			this.verticalForce = -3;
		}
	}

	this.checkBoundingbox = function(){
		if(
			this.x > canvas.width ||
			this.y > canvas.height ||
			this.x + this.width < 0 ||
			this.y + this.height < 0
			)
			game.requestRestart = true;
	}

	this.jump = function(){
		if(this.onSolid){
			this.verticalForce = this.JUMP_FORCE;
			this.jumping = true;
			this.onSolid = false;
		}
		else if(this.hanging.onWall){
			this.direction = this.hanging.direction;

			if(this.direction == "left")
				this.velocity = -this.MAX_SPEED;
			else if(this.direction == "right")
				this.velocity = this.MAX_SPEED;

			this.verticalForce = this.JUMP_FORCE;
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
		if(this.onSolid) this.verticalForce = 0;
		if(this.verticalForce < -this.WEIGHT) return;
		this.verticalForce -= this.GRAVITY;
	}

	this.collect = function(object){
		object.respawn();
		game.currentLevel.score++;
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
