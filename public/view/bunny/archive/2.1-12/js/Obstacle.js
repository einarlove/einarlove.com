Obstacle = function(properties){

	for(property in properties){
		this[property] = properties[property]
	}

	this.display = function(){
		if(!this.sprite)
			this.fallbackGraphic();
		else{
			this.sprite.draw(this.x, this.y, this.width, this.height);
		}

	}

	// if(this.type === "ground"){
	// 	return new Ground();
	// }

	// if(this.type === "left_wall" || this.type === "right_wall"){
	// 	this.display = function(){
	// 		// Dirt
	// 		ctx.fillStyle = "hsl(25, 30%, 50%)"
	// 		ctx.fillRect(this.x, this.y, this.width, this.height)

	// 		// Grass
	// 		ctx.fillStyle = "hsl(120, 40%, 50%)";
	// 		var width = this.width/4;
	// 		ctx.fillRect(this.x + (this.type === "left_wall" ? this.width - width : 0), this.y, width, this.height)
	// 	}
	// }

	// if(this.type === "background"){
	// 	this.display = function(){
	// 		ctx.fillStyle = "hsl(190, 40%, 70%)"
	// 		ctx.fillRect(0, 0, canvas.width, canvas.height)
	// 	}
	// }

	// // Carrot

	// if(this.type === "carrot"){
	// 	return new Carrot(properties);
	// }

	// // Falling stone
	// if(this.type === "falling_stone"){
	// 	this.display = function(){

	// 		ctx.fillStyle = "hsl(120, 0%, 50%)";
	// 		ctx.fillRect(this.x, this.y+ this.height/4, this.width, this.height/2)
	// 		ctx.fillRect(this.x+ this.width/4, this.y, this.width/2, this.height)

	// 	}
	// 	this.fall = function(){
	// 		if(!this.onGround)
	// 			this.y += 7;

	// 		game.currentLevel.obstacles.forEach(function(obstacle){
	// 			if(isOverlaying(obstacle, this)){
	// 				if(!obstacle.untouchable && !obstacle.collectable)
	// 					this.landOn(obstacle);
	// 			}
	// 		}, this)
	// 	}

	// 	this.landOn = function(obstacle){
	// 		this.onGround = true;
	// 		this.harmfull = false;
	// 		this.hidden = true;
	// 		this.untouchable = true
	// 		this.y = obstacle.y - this.height;
	// 	}
	// }




}