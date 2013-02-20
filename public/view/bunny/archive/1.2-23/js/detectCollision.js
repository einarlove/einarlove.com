Bunny.prototype = {

	checkCollision : function(){

		this.checkOverlay();
		this.checkIfOnWall();

	},

	whenInAir : function(){
		this.inAir = true;
		this.onSolid = false;
	},

	adjustProperties : function(overlayingObstacles){
		overlayingObstacles.forEach(function(o){

			// Check corner collsion
			if(o.direction.cornerCollision){

				if(this.y > o.obstacle.y){
					// Bottom
					if(this.x <= o.obstacle.x){
						// Left
						var xAxis = ( this.x + this.width) - o.obstacle.x
						var yAxis = ( o.obstacle.y + o.obstacle.height) - this.y
					}
					else{
						// Right
						var xAxis = ( o.obstacle.x + o.obstacle.width) - this.x
						var yAxis = ( o.obstacle.y + o.obstacle.height) - this.y
					}
				}
				else{
					// Top
					if(this.x <= o.obstacle.x){
						// Left
						var xAxis = ( this.x + this.width) - o.obstacle.x
						var yAxis = (this.y + this.height) - o.obstacle.y
					}
					else{
						// Right
						var xAxis = ( o.obstacle.x + o.obstacle.width) - this.x
						var yAxis = (this.y + this.height) - o.obstacle.y
					}
				}

				if(xAxis > yAxis - this.GRAVITY)
					o.cornerX = true
				else
					o.cornerY = true


			}

			if(o.direction.bottom && !o.cornerY){
				this.y = o.obstacle.y - this.height;

				if(!this.onSolid && this.verticalForce <= -this.WEIGHT){
					this.sprite.gotoAndPlay("land_on_ground")
				}
				this.onSolid = true;
				this.inAir = false;
			}

			if(o.direction.top && !o.cornerY){
				this.y = o.obstacle.y + o.obstacle.height;
				this.verticalForce = 0;
			}


			if(o.direction.left && !o.cornerX){
				this.x = o.obstacle.x + o.obstacle.width;
				this.velocity = 0;
			}

			if(o.direction.right && !o.cornerX){
				this.x = o.obstacle.x - this.width;
				this.velocity = 0;
			}
		}, this);
	},

	checkOverlay : function(){
		var bl = this.x;
		var bt = this.y;
		var br = this.x + this.width;
		var bb = this.y + this.height;
		var ot, or, ob, ol;
		var overlayingObstacles = [];

		game.currentLevel.obstacles.forEach(function(obstacle){
			if(obstacle.untouchable) return;
			var direction = {};


			var ol = obstacle.x;
			var ot = obstacle.y;
			var or = obstacle.x + obstacle.width;
			var ob = obstacle.y + obstacle.height;

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
			if(o.y <= this.y && o.y + o.height > this.y + this.height){
				if(o.x === this.x + this.width){
					closeTo.opositeDirection = "left"
					closeTo.obstacle = o;
				}
				if(o.x + o.width === this.x){
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

		this.hanging.direction = closeTo.opositeDirection;

		this.hanging.obstacle = closeTo.obstacle;
		this.hanging.onWall = true;

	}
}