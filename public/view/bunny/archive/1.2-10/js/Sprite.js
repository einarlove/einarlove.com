Sprite = function(spriteType){

	this.size = 1;
	this.flip = false;

	var spritesheet = spritesheets[spriteType];

	var image = new Image();

	image.width = spritesheet.width * this.size
	image.height = spritesheet.height * this.size

	image.src = spritesheet.file;

	var framePosition = {x:0,y:0};
	var playhead = 0;
	var currentAnimation;
	var label;

	var drawWidth, drawHeight;


	this.draw = function(x, y, width, height){

		var hitbox = currentAnimation.hitbox;
		if(this.flip){
			x -= (image.width - hitbox.width - hitbox.x)
		}else{
			x -= hitbox.x
		}

		ctx.drawImage(image,
			this.flip ? spritesheet.width : framePosition.x,
			framePosition.y + (spritesheet.height * playhead),
			spritesheet.width,
			spritesheet.height,
			x,
			y - hitbox.y,
			image.width, image.height);
	}

	this.gotoAndPlay = function(animation){
		label = animation;
		currentAnimation = spritesheet.animations[label]
		playhead = currentAnimation.start;
	}

	this.changePlayhead = function(){
	}
}