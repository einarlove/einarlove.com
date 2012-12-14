function King(sprite, x, y, size){
	this.sprite = sprite;
	this.image = new Image();
	this.image.src = this.sprite.sprite;
	this.x = x;
	this.y = y;
	this.size = size || 1;
	this.width = this.sprite.frameWidth * this.size;
	this.height = this.sprite.frameHeight * this.size;
	this.playhead = 1;
	this.label = "stand";
	this.animation = this.sprite.labels[this.label];
	this.playable = true;

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
		if(this.label === label && label != "cheer")
			return false;
		if(label === "start_cheer")
			this.customSpeed = 0.6;
		this.label = label;
		this.animation = this.sprite.labels[label];
		this.playhead = this.animation.start;
		this.changePlayhead();
	}
	this.changePlayhead = function(){
		this.playhead += this.customSpeed || 0.4;
		if(this.playhead >= this.animation.stop){
			if(this.label === "start_cheer"){
				this.gotoAndPlay("cheer");
			}
			else if(this.label === "cheer")
				this.gotoAndPlay("cheer");
			else if(this.label === "hit")
				this.gotoAndPlay("stand");
			else
				this.playhead = this.animation.start;
		}
	}
	this.changePosition = function(){
		this.centerPoint = 50 / this.size;
		var distance = Math.abs(this.x - (mousePos.x - this.centerPoint));
		this.customSpeed = distance / 400;
		if(this.label === "hit"){
			this.customSpeed = 0.6;
			return;
		}
		if(this.x - (mousePos.x - this.centerPoint) > 10){
			this.gotoAndPlay("walk_left");
		}
		else if(this.x - (mousePos.x - this.centerPoint) < -10){
			this.gotoAndPlay("walk_right");
		}
		else
			this.playhead = this.animation.stop;

		this.x = linear(this.x,0, mousePos.x - this.centerPoint,0, 0.01).x;
	}
}