Bunny.prototype = {

	bunny : this,

	checkCollision : function(){

		bunny.checkOverlay();
		// if(bunny.touchingDirection === "bottom"){
		// 	bunny.y = bunny.touchingObstacle.y - bunny.height;
		// 	bunny.onSolid = true;
		// 	bunny.jumping = false;
		// }

		// if(bunny.touchingDirection === "left"){
		// 	bunny.x = bunny.touchingObstacle.x + bunny.touchingObstacle.width + 5;
		// 	console.log("ON THE LEFT");
		// }
	},

	inAir : function(){
		bunny.onSolid = false;
	},

	isOnGround : function(){
		// var onSolid;
		game.thisLevel.obstacles.forEach(function(obstacle){
			// if(obstacle.untouchable) return;
			// if(bunny.checkDistance(bunny, obstacle)){
			// 	bunny.y = obstacle.y - bunny.height
			// 	onSolid = true;
			// 	return;
			// }
			// if(bunny.y + bunny.height === obstacle.y){
			// 	onSolid = true;
			// 	return;
			// }
		})

		// if(onSolid) return true;

		// bunny.onSolid = false;
		// return false;
	},

	checkTouching : function(overlayingObstacles){
		var justMovedVerticly;
		overlayingObstacles.forEach(function(o){

			if(o.direction === "top"){
				bunny.y = o.obstacle.y + o.obstacle.height;
				bunny.speed.y = 0;
				justMovedVerticly = true;
			}

			if(o.direction === "bottom"){
				bunny.y = o.obstacle.y - bunny.height;
				bunny.onSolid = true;
				justMovedVerticly = true;
			}
			if(!justMovedVerticly){
				if(o.direction === "left")
					bunny.x = o.obstacle.x + o.obstacle.width;
				if(o.direction === "right")
					bunny.x = o.obstacle.x - bunny.width;
			}



			// switch(o.direction){

			// 	case "top":
			// 		bunny.y = o.obstacle.y + o.obstacle.height;
			// 		bunny.speed.y = 0;
			// 		justMovedHorizontally = true;
			// 		break;

			// 	case "bottom":
			// 		bunny.y = o.obstacle.y - bunny.height;
			// 		bunny.onSolid = true;
			// 		justMovedHorizontally = true;
			// 		break;

			// 	case "left":
			// 	case !justMovedHorizontally:
			// 		bunny.x = o.obstacle.x + o.obstacle.width;
			// 		break;

			// 	case "right":
			// 	case !justMovedHorizontally:
			// 		bunny.x = o.obstacle.x - bunny.width;
			// 		break;
			// }
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

			ol = obstacle.x;
			ot = obstacle.y;
			or = obstacle.x + obstacle.width;
			ob = obstacle.y + obstacle.height;


			if(ol>br || or<bl) return;
			if(ot>bb || ob<bt) return;


			if(ol>bl && ol<br)
				overlayingObstacles.push({
					direction: "right",
					obstacle: obstacle
				})
			if(or>bl && or<br)
				overlayingObstacles.push({
					direction: "left",
					obstacle: obstacle
				})
			if(ot>bt && ot<bb)
				overlayingObstacles.push({
					direction: "bottom",
					obstacle: obstacle
				})
			if(ob>bt && ob<bb)
				overlayingObstacles.push({
					direction: "top",
					obstacle: obstacle
				})
		})
		if(overlayingObstacles.length === 0){
			bunny.inAir();
			return;
		}
		bunny.checkTouching(overlayingObstacles);
	}
}