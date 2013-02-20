Bunny.prototype = {

	checkCollision : function(){

		this.checkOverlay();
		this.checkIfOnWall();

	},

	whenInAir : function(){
		this.inAir = true;
		this.onSolid = false;
		this.standingOn = false;
	},

	adjustProperties : function(overlayingObstacles){
		overlayingObstacles.forEach(function(o){

			// Check corner collsion
			if(o.direction.cornerCollision){

				if(this.position.y > o.obstacle.position.y){
					// Bottom
					if(this.position.x <= o.obstacle.position.x){
						// Left
						var xAxis = ( this.position.x + this.width) - o.obstacle.position.x
						var yAxis = ( o.obstacle.position.y + o.obstacle.height) - this.position.y
					}
					else{
						// Right
						var xAxis = ( o.obstacle.position.x + o.obstacle.width) - this.position.x
						var yAxis = ( o.obstacle.position.y + o.obstacle.height) - this.position.y
					}
				}
				else{
					// Top
					if(this.position.x <= o.obstacle.position.x){
						// Left
						var xAxis = ( this.position.x + this.width) - o.obstacle.position.x
						var yAxis = (this.position.y + this.height) - o.obstacle.position.y
					}
					else{
						// Right
						var xAxis = ( o.obstacle.position.x + o.obstacle.width) - this.position.x
						var yAxis = (this.position.y + this.height) - o.obstacle.position.y
					}
				}

				if(xAxis > yAxis - this.GRAVITY)
					o.cornerX = true
				else
					o.cornerY = true


			}

			if(o.direction.bottom && !o.cornerY){
				this.position.y = o.obstacle.position.y - this.height;

				if(!this.onSolid && this.verticalForce <= -this.WEIGHT){
					this.sprite.gotoAndPlay("land_on_ground")
				}
				this.onSolid = true;
				this.standingOn = o.obstacle;
				this.inAir = false;
			}

			if(o.direction.top && !o.cornerY){
				this.position.y = o.obstacle.position.y + o.obstacle.height;
				this.verticalForce = 0;
			}


			if(o.direction.left && !o.cornerX){
				this.position.x = o.obstacle.position.x + o.obstacle.width;
				this.velocity = 0;
			}

			if(o.direction.right && !o.cornerX){
				this.position.x = o.obstacle.position.x - this.width;
				this.velocity = 0;
			}
		}, this);
	},

	checkOverlay : function(){
		var bl = this.position.x;
		var bt = this.position.y;
		var br = this.position.x + this.width;
		var bb = this.position.y + this.height;
		var ot, or, ob, ol;
		var overlayingObstacles = [];

		game.currentLevel.obstacles.forEach(function(obstacle){
			if(obstacle.untouchable) return;
			var direction = {};


			var ol = obstacle.position.x;
			var ot = obstacle.position.y;
			var or = obstacle.position.x + obstacle.width;
			var ob = obstacle.position.y + obstacle.height;

			if(ol>=br || or<=bl) return;
			if(ot>=bb || ob<=bt) return;

			if(ol>bl && ol<br) direction.right  = true
			if(or>bl && or<br) direction.left   = true
			if(ob>bt && ob<bb) direction.top    = true
			if(ot>bt && ot<bb) direction.bottom = true

			if(Object.keys(direction).length > 1)
				direction.cornerCollision = true;

			if(obstacle.collectable){
				this.collect(obstacle)
				return;
			}

			if(obstacle.harmfull)
				this.touchesDangerous(obstacle, direction);

			if(obstacle.walkThrough)
				return;

			overlayingObstacles.push({
				direction: direction,
				obstacle: obstacle
			})
		}, this)
		if(overlayingObstacles.length === 0){
			this.whenInAir();
			return;
		}
		this.adjustProperties(overlayingObstacles);


	},

	checkIfOnWall : function(){

		var closeTo = {};

		game.currentLevel.obstacles.forEach(function(o){
			if(o.y <= this.position.y && o.y + o.height > this.position.y + this.height){
				if(o.x === this.position.x + this.width){
					closeTo.opositeDirection = "left"
					closeTo.obstacle = o;
				}
				if(o.x + o.width === this.position.x){
					closeTo.opositeDirection = "right"
					closeTo.obstacle = o;
				}
			}
		}, this)

		if(!closeTo.obstacle){
			this.hanging.onWall = false;
			delete this.hanging.obstacle;
			delete this.hanging.opositeDirection;
			return;
		}

		if(this.inAir){
			this.hanging.direction = closeTo.opositeDirection;

			this.hanging.obstacle = closeTo.obstacle;
			this.hanging.onWall = true;
		}

	}
}