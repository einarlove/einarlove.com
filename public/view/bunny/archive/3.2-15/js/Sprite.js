Sprite = function(spriteType, object){

	var spritesheet = spritesheets[spriteType];

	var image = new Image();
	image.src = spritesheet.file;

	this.width = spritesheet.width
	this.height = spritesheet.height

	var offsetX = object.offsetX || 0;
	var offsetY = object.offsetY || 0;

	var animations = spritesheet.animations

	var framePosition = {x:0,y:0};
	var playhead = 0;
	var currentAnimation = {};
	var label;

	var position = {};


	this.update = function() {

		position = object.position.get();

		if(currentAnimation.hitbox)
			var hitbox = currentAnimation.hitbox;
		else if(spritesheet.hitbox)
			var hitbox = spritesheet.hitbox;
		else return;

		if(this.flip){
			position.x -= (this.width - hitbox.width - hitbox.x)
		}else{
			position.x -= hitbox.x
		}
		position.y -= hitbox.y
	};

	this.draw = function(){

		this.update();

		if(animations)
			this.drawAnimated()
		else if(spritesheet.repeat)
			this.drawRepeat()
		else
			this.drawStatic();
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
		ctx.translate(position.x + offsetX, position.y + offsetY);
		ctx.fillRect(0 - offsetX, 0 - offsetY, object.width, object.height)
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
			this.width, this.height);
	};

	this.gotoAndPlay = function(animation){
		label = animation;
		currentAnimation = spritesheet.animations[label]
		playhead = currentAnimation.start;
	}

	this.changePlayhead = function(){
	}
}