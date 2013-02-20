Bunny.prototype = {

	checkCollision : function(){
		if(this.isOnGround()){
			this.onSolid = true;
			this.jumping = false;
		}
	},

	isOnGround : function(){
		var onSolid;
		var bunny = this;
		game.thisLevel.obstacles.forEach(function(obstacle){
			if(obstacle.untouchable) return;
			if(isOverlaying(bunny, obstacle)){
				bunny.y = obstacle.y - bunny.height
				onSolid = true;
				return;
			}
			if(bunny.y + bunny.height === obstacle.y){
				onSolid = true;
				return;
			}
		})

		if(onSolid) return true;

		bunny.onSolid = false;
		return false;
	}

}