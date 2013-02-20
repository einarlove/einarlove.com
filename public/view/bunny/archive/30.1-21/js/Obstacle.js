Obstacle = function(properties){

	for(property in properties){
		this[property] = properties[property]
	}

	if(this.type === "ground"){
		this.display = function(){
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
		this.display = function(){
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
		this.display = function(){
			ctx.fillStyle = "hsl(190, 40%, 70%)"
			ctx.fillRect(0, 0, canvas.width, canvas.height)
		}
	}

	// Carrot

	if(this.type === "carrot"){
		this.display = function(){
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

	// Falling stone
	if(this.type === "falling_stone"){
		this.display = function(){

			ctx.fillStyle = "hsl(120, 0%, 50%)";
			ctx.fillRect(this.x, this.y+ this.height/4, this.width, this.height/2)
			ctx.fillRect(this.x+ this.width/4, this.y, this.width/2, this.height)

		}
		this.fall = function(){
			if(!this.onGround)
				this.y += 7;

			game.currentLevel.obstacles.forEach(function(obstacle){
				if(isOverlaying(obstacle, this)){
					if(!obstacle.untouchable && !obstacle.collectable)
						this.landOn(obstacle);
				}
			}, this)
		}

		this.landOn = function(obstacle){
			this.onGround = true;
			this.harmfull = false;
			this.hidden = true;
			this.untouchable = true
			this.y = obstacle.y - this.height;
		}
	}




}