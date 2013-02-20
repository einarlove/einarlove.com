Bunny.prototype = {

	bunny : this,

	checkCollision : function(){

		bunny.checkOverlay();
		bunny.checkIfOnWall();

	},

	whenInAir : function(){
		bunny.inAir = true;
		bunny.onSolid = false;
	},

	adjustProperties : function(overlayingObstacles){
		overlayingObstacles.forEach(function(o){

			// Check corner collsion
			if(o.direction.cornerCollision){

				if(bunny.y > o.obstacle.y){ // Bottom
					if(bunny.x <= o.obstacle.x){ // Left side
						var xx = ( bunny.x + bunny.width) - o.obstacle.x
						var yy = ( o.obstacle.y + o.obstacle.height) - bunny.y
					}
					else{ // right side
						var xx = ( o.obstacle.x + o.obstacle.width) - bunny.x
						var yy = ( o.obstacle.y + o.obstacle.height) - bunny.y
					}
				}else{ // Top
					if(bunny.x <= o.obstacle.x){ // Left side
						var xx = ( bunny.x + bunny.width) - o.obstacle.x
						var yy = (bunny.y + bunny.height) - o.obstacle.y
					}
					else{ // right side
						var xx = ( o.obstacle.x + o.obstacle.width) - bunny.x
						var yy = (bunny.y + bunny.height) - o.obstacle.y
					}

				}

				if(xx > yy)
					o.cornerX = true
				else
					o.cornerY = true

			}

			if(o.direction.bottom && !o.cornerY){
				bunny.y = o.obstacle.y - bunny.height;
				bunny.onSolid = true;
				if(bunny.inAir)
					delete bunny.direction;
				bunny.inAir = false;
				bunny.walkBoost = 0;
			}

			if(o.direction.top && !o.cornerY){
				bunny.y = o.obstacle.y + o.obstacle.height;
				bunny.speed.y = 0;
			}


			if(o.direction.left && !o.cornerX){
				bunny.x = o.obstacle.x + o.obstacle.width;
				if(bunny.inAir){
					bunny.destination.x = bunny.x;
					delete bunny.direction
				}
			}

			if(o.direction.right && !o.cornerX){
				bunny.x = o.obstacle.x - bunny.width;
				if(bunny.inAir){
					bunny.destination.x = bunny.x;
					delete bunny.direction
				}
			}
		});
	},

	checkOverlay : function(){
		var bl = bunny.x;
		var bt = bunny.y;
		var br = bunny.x + bunny.width;
		var bb = bunny.y + bunny.height;
		var ot, or, ob, ol;
		var overlayingObstacles = [];

		game.thisLevel.obstacles.forEach(function(obstacle){
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
				bunny.collect(obstacle)
				return;
			}

			overlayingObstacles.push({
				direction: direction,
				obstacle: obstacle
			})
		})
		if(overlayingObstacles.length === 0){
			bunny.whenInAir();
			return;
		}
		bunny.adjustProperties(overlayingObstacles);


	},

	checkIfOnWall : function(){

		var closeTo = {};

		game.thisLevel.obstacles.forEach(function(o){
			if(o.y <= bunny.y && o.y + o.height > bunny.y + bunny.height){
				if(o.x === bunny.x + bunny.width){
					closeTo.opositeDirection = "left"
					closeTo.obstacle = o;
				}
				if(o.x + o.width === bunny.x){
					closeTo.opositeDirection = "right"
					closeTo.obstacle = o;
				}
			}
		})

		if(!closeTo.obstacle){
			bunny.hanging.onWall = false;
			delete bunny.hanging.obstacle;
			delete bunny.hanging.opositeDirection;
			return;
		}

		bunny.hanging.direction = closeTo.opositeDirection;

		bunny.hanging.obstacle = closeTo.obstacle;
		bunny.hanging.onWall = true;

	}
}