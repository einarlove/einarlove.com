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

	checkTouching : function(overlayingObstacles){
		overlayingObstacles.forEach(function(o){
			if(o.direction.top){
				bunny.y = o.obstacle.y + o.obstacle.height;
				bunny.speed.y = 0;
			}

			if(o.direction.bottom){
				bunny.y = o.obstacle.y - bunny.height;
				bunny.onSolid = true;
				if(bunny.inAir)
					delete bunny.direction;
				bunny.inAir = false;
				bunny.walkBoost = 0;
			}

			if(o.direction.left){
				if(!o.direction.top && !o.direction.bottom)
					bunny.x = o.obstacle.x + o.obstacle.width;
				if(bunny.inAir){
					bunny.destination.x = bunny.x;
				}
				bunny.closeTo = o;
			}

			if(o.direction.right){
				if(!o.direction.top && !o.direction.bottom)
					bunny.x = o.obstacle.x - bunny.width;
				bunny.closeTo = o;
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

			if(ol===br){
				obstacle.direction = "right"
				bunny.closeTo = obstacle;
			}
			if(or===bl){
				obstacle.direction = "left"
				bunny.closeTo = obstacle;
			}

			if(ol>br || or<bl) return;
			if(ot>bb || ob<bt) return;

			if(ol>bl && ol<br) direction.right  = true
			if(or>bl && or<br) direction.left   = true
			if(ob>bt && ob<bb) direction.top    = true
			if(ot>bt && ot<bb) direction.bottom = true

			// if(direction.bottom && direction.right) direction.final = "bottom_right"
			// else if(direction.bottom && direction.left) direction.final = "bottom_left"
			// else if(direction.top && direction.right) direction.final = "top_right"
			// else if(direction.top && direction.left) direction.final = "top_left"


			overlayingObstacles.push({
				direction: direction,
				obstacle: obstacle
			})
		})
		if(overlayingObstacles.length === 0){
			bunny.whenInAir();
			return;
		}
		bunny.checkTouching(overlayingObstacles);
	},

	checkIfOnWall : function(){

		if(!bunny.closeTo){
			bunny.hanging.onWall = false;
			delete bunny.hanging.obstacle;
			delete bunny.hanging.direction;
			return;
		}

		if(bunny.closeTo.height < bunny.height) return;

		bunny.hanging.direction = bunny.closeTo.direction;

		bunny.hanging.obstacle = bunny.closeTo;
		bunny.hanging.onWall = true;

		if(bunny.hanging.obstacle){}
		delete bunny.closeTo;
		}
}