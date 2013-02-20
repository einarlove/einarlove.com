Obstacle = function(properties){
	this.x = properties.x;
	this.y = properties.y;
	this.width = properties.width;
	this.height = properties.height;
	this.type = properties.type;
	this.collectable = properties.collectable;
	this.z = properties.z || 100;
	this.untouchable = properties.untouchable;
	this.graphic;

	if(this.type === "ground"){
		this.graphic = function(){
			// Ground
			ctx.fillStyle = "hsl(25, 30%, 50%)"
			ctx.fillRect(this.x, this.y, this.width, this.height)

			// Grass
			ctx.fillStyle = "hsl(120, 40%, 50%)"
			ctx.fillRect(this.x, this.y, this.width, this.height/4)
			for(i=0; i<this.width/20;i++){
				ctx.fillRect(this.x+(i*20), this.y+this.height/4, 16, 2)
			}
		}
	}

	if(this.type === "left_wall" || this.type === "right_wall"){
		this.graphic = function(){
			// Dirt
			ctx.fillStyle = "hsl(25, 30%, 50%)"
			ctx.fillRect(this.x, this.y, this.width, this.height)

			// Grass
			ctx.fillStyle = "hsl(120, 40%, 50%)";
			var width = this.width/4;
			ctx.fillRect(this.x + (this.type === "left_wall" ? this.width - width : 0), this.y, width, this.height)
		}
	}

	if(this.type === "background"){
		this.graphic = function(){
			ctx.fillStyle = "hsl(190, 40%, 70%)"
			ctx.fillRect(0, 0, canvas.width, canvas.height)
		}
	}

	// Carrot

	if(this.type === "carrot"){
		this.graphic = function(){
			var x = this.x;
			var y = this.y;
			var wp = this.width/8;
			var hp = this.height/8;

			// Carrot head
			ctx.fillStyle = "hsl(120, 40%, 50%)";
			ctx.strokeStyle = "hsl(120, 40%, 30%)";
			ctx.fillRect(x+ wp*4, y+ hp*1 , wp*4, hp*2)
			// ctx.strokeRect(x+ wp*4, y+ hp*1 , wp*4, hp*2)
			ctx.fillRect(x+ wp*5, y , wp*2, hp*4)
			// ctx.strokeRect(x+ wp*5, y , wp*2, hp*4)

			// carrot body
			ctx.fillStyle = "hsl(20, 30%, 50%)"
			ctx.strokeStyle = "hsl(20, 40%, 30%)";
			ctx.fillRect(x, y+ hp*6 , wp*2, hp*2)
			// ctx.strokeRect(x, y+ hp*6 , wp*2, hp*2)
			ctx.fillRect(x+ wp, y+ hp*5 , wp*2, hp*2)
			// ctx.strokeRect(x+ wp, y+ hp*5 , wp*2, hp*2)
			ctx.fillRect(x+ wp*2, y+ hp*3 , wp*4, hp*2)
			// ctx.strokeRect(x+ wp*2, y+ hp*3 , wp*4, hp*2)
			ctx.fillRect(x+ wp*3, y+ hp*2, wp*2, hp*4)
			// ctx.strokeRect(x+ wp*3, y+ hp*2, wp*2, hp*4)


			// Floating
			this.y += Math.sin(game.frameCounter/20)/5

			this.respawn = function(){
				var newX = random(0, canvas.width)
				var newY = random(0, canvas.height)

				this.x = newX;
				this.y = newY;
				carrot = this;
						console.log(carrot.x);
						console.log(carrot.y);
				game.thisLevel.obstacles.forEach(function(obstacle){
					if(isOverlaying(obstacle, carrot)){
						if(!obstacle.untouchable)
							carrot.respawn();
					}
				})
			}

		}
	}


}