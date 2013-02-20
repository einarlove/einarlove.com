Sprite = function(spriteType){

	this.flip = false;

	var spritesheet = spritesheets[spriteType];

	var image = new Image();

	image.src = spritesheet.file;
	image.width = spritesheet.width
	image.height = spritesheet.height

	var animations = spritesheet.animations

	var framePosition = {x:0,y:0};
	var playhead = 0;
	var currentAnimation = {};
	var label;

	var position = {};

	this.update = function() {
		if(currentAnimation.hitbox)
			var hitbox = currentAnimation.hitbox;
		else if(spritesheet.hitbox)
			var hitbox = spritesheet.hitbox;
		else return;

		if(this.flip){
			position.x -= (image.width - hitbox.width - hitbox.x)
		}else{
			position.x -= hitbox.x
		}
		position.y -= hitbox.y
	};

	this.draw = function(x, y, width, height){

		position.x = x;
		position.y = y;
		position.width = width;
		position.height = height;

		this.update();

		if(animations)
			this.drawAnimated()
		else if(spritesheet.repeat)
			this.drawRepeat()
	}

	this.drawStatic = function(){
		this.drawImage();
	}

	this.drawAnimated = function(){
		this.drawImage();
	}

	this.drawRepeat = function() {
		var pattern = ctx.createPattern(image, spritesheet.repeat);
		ctx.fillStyle = pattern;

		ctx.save();
		ctx.translate(position.x, position.y);
		ctx.fillRect(0,0, position.width, position.height)
		ctx.restore();
	};

	this.drawImage = function() {
		ctx.drawImage(image,
			this.flip ? spritesheet.width : framePosition.x,
			framePosition.y + (spritesheet.height * playhead),
			spritesheet.width,
			spritesheet.height,
			position.x,
			position.y,
			image.width, image.height);
	};

	this.gotoAndPlay = function(animation){
		label = animation;
		currentAnimation = spritesheet.animations[label]
		playhead = currentAnimation.start;
	}

	this.changePlayhead = function(){
	}
}