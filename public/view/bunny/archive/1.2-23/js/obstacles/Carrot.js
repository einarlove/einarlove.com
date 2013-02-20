 var Carrot = function(properties){

 	for(property in properties){
 		this[property] = properties[property]
 	}


 	this.display = function(){
 		this.fallbackGraphic();
 	}

	this.fallbackGraphic = function(){

		var x = this.x;
		var y = this.y;
		var wp = this.width/8;
		var hp = this.height/8;

		// Carrot head
		ctx.fillStyle = "hsl(120, 40%, 50%)";
		ctx.fillRect(x+ wp*4, y+ hp*1 , wp*4, hp*2)
		ctx.fillRect(x+ wp*5, y , wp*2, hp*4)

		// Carrot body
		ctx.fillStyle = "hsl(20, 30%, 50%)"
		ctx.fillRect(x, y+ hp*6 , wp*2, hp*2)
		ctx.fillRect(x+ wp, y+ hp*5 , wp*2, hp*2)
		ctx.fillRect(x+ wp*2, y+ hp*3 , wp*4, hp*2)
		ctx.fillRect(x+ wp*3, y+ hp*2, wp*2, hp*4)


		// Floating
		this.y += Math.sin(game.frameCounter/20)/5

		// Relocate to new position
		this.respawn = function(){
			var newX = random(0, canvas.width)
			var newY = random(0, canvas.height)

			this.x = newX;
			this.y = newY;

			game.currentLevel.obstacles.forEach(function(obstacle){
				if(isOverlaying(obstacle, this)){
					if(!obstacle.untouchable)
						this.respawn();
				}
			}, this)
		}


	}

}