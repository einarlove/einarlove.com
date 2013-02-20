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
			switch(o.direction){

				case "top":
					bunny.y = o.obstacle.y + o.obstacle.height;
					bunny.speed.y = 0;
					break;

				case "bottom":
					bunny.y = o.obstacle.y - bunny.height;
					bunny.onSolid = true;
					bunny.inAir = false;
					bunny.walkBoost = 0;
					break;

				case "left":
					bunny.x = o.obstacle.x + o.obstacle.width;
					if(bunny.inAir){
						bunny.walkBoost = 10;
						bunny.destination.x = bunny.x;
					}
					bunny.closeTo = o;
					break;

				case "right":
					bunny.x = o.obstacle.x - bunny.width;
					bunny.closeTo = o;
					break;
			}
		})
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
			var direction;

			var ol = obstacle.x;
			var ot = obstacle.y;
			var or = obstacle.x + obstacle.width;
			var ob = obstacle.y + obstacle.height;

			if(ol===br){
				obstacle.direction = "right"
				bunny.standingNextTo = obstacle;
			}
			if(or===bl && obstacle.type === "left_wall"){
				obstacle.direction = "left"
				bunny.standingNextTo = obstacle;
			}
			// if(obstacle.type === "left_wall"){
			// 	console.log(or); // 600
			// 	console.log(bl); // 21
			// }

			if(ol>br || or<bl) return;
			if(ot>bb || ob<bt) return;

			if(ol>bl && ol<br) direction = "right"
			if(or>bl && or<br) direction = "left"
			if(ot>bt && ot<bb) direction = "bottom"
			if(ob>bt && ob<bb) direction = "top"

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


		if(!bunny.closeTo) return;
		if(bunny.closeTo.height < bunny.height) return;

		if(bunny.closeTo.x + bunny.closeTo.width === bunny.x){
				bunny.hanging.direction = "left"; console.log("LEFT");}
		else if(bunny.closeTo.x  === bunny.x + bunny.width)
				bunny.hanging = "right"
		else{
			delete bunny.hanging.direction;
			delete bunny.hanging.obstacle;
			return;
		}

		bunny.hanging.obstacle = bunny.closeTo;

		delete bunny.closeTo;
		}
}