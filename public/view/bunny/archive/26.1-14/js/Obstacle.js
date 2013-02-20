Obstacle = function(properties){
	this.x = properties.x;
	this.y = properties.y;
	this.width = properties.width;
	this.height = properties.height;
	this.type = properties.type;
	this.zIndex = properties.zIndex || 100;
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


}