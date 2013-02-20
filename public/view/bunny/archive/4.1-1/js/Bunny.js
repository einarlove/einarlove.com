var Bunny = function( x, y, width, height){

	this.position = new Vector(x, y);

	this.width = width;
	this.height = height;

	this.sprite = new Sprite("bunny", this);

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

		if(this.hanging.onWall && this.inAir && this.verticalForce < 0){
			this.sprite.gotoAndPlay("hang_on_wall")
		}
		else if(this.velocity == 0 && this.onSolid)
			this.sprite.gotoAndPlay("stand_still")
		else
			this.sprite.gotoAndPlay("run")

		this.sprite.updatePosition();
		this.sprite.draw()
	}

	this.updatePosition = function(){

		this.applyGravity();
		this.position.y -= this.verticalForce;

		this.applyAcceleration();
		this.position.x += this.velocity;

		// Flip sprite after direction
		if(this.velocity != 0){
			if(this.velocity < 0)
				this.sprite.flip()
			else this.sprite.unFlip()
		}

		// Slow fallspeed when hanging on wall
		if(this.hanging.onWall && this.inAir && this.verticalForce < -3){
			this.verticalForce = -3;
			if(this.hanging.direction == "left")
				this.sprite.flip();
			else if(this.hanging.direction == "right")
				this.sprite.unFlip();
		}
	}

	this.checkBoundingbox = function(){
		if(
			this.position.x > canvas.width ||
			this.position.y > canvas.height ||
			this.position.x + this.width < 0 ||
			this.position.y + this.height < 0
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
}
