function Bug(sprite, x, y, size){
	this.sprite = sprite;
	this.image = new Image();
	this.image.src = this.sprite.sprite;
	this.x = x;
	this.y = y;
	this.size = size || 1;
	this.width = this.sprite.frameWidth * this.size;
	this.height = this.sprite.frameHeight * this.size;
	this.playhead = 1;
	this.label = "walk";
	this.animation = this.sprite.labels[this.label];
	this.progress = 0;

	this.display = function(){
		this.changePlayhead();
		this.flooredPH = Math.floor(this.playhead);
		ctx.drawImage(this.image,
			this.sprite.frames[this.flooredPH].x,
			this.sprite.frames[this.flooredPH].y,
			this.sprite.frameWidth,
			this.sprite.frameHeight,
			this.x, this.y,
			this.width, this.height);
	}
	this.gotoAndPlay = function(label){
		this.label = label;
		this.animation = this.sprite.labels[label];
		// console.log(this.animation);
		this.playhead = this.animation.start;
		this.changePlayhead();
	}
	this.changePlayhead = function(){
		this.playhead += 0.4;
		if(this.playhead > this.animation.stop){
			if(this.label === "fadeAway"){
				this.playhead = this.animation.stop;
				this.dead = true;
			}
			else if(this.label === "die")
				this.gotoAndPlay("fadeAway");
			else
				this.playhead = this.animation.start;
		}
	}
	this.changeSize = function(newSize){
		this.size = newSize;
		var prevHeight = this.height;
		var prevWidth = this.width;

		this.width = this.sprite.frameWidth * this.size;
		this.height = this.sprite.frameHeight * this.size;

		// Grow from bottom center for realistic look
		this.x = this.x + (prevWidth - this.width)/2;
		this.y = this.y + (prevHeight - this.height);
	}
}