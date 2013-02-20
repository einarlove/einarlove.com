Bunny.prototype = {

	checkCollision : function(){
		if(this.isOnGround()){
			this.onSolid = true;
			this.jumping = false;
		}
	},

	isOnGround : function(){
		if(isOverlaying(this, ground)){
			this.y = ground.y - this.height
			return true;
		}
		if(this.y + this.height === ground.y)
			return true;

		this.onSolid = false;
		return false;
	}

}