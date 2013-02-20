Sprite = function(spriteType, object){

	"use strict";

	// Create own position & dimensions for drawn area
	var drawnArea = {
		x : object.position.x,
		y : object.position.y,
		width : object.width,
		height : object.height
	}

	// Make it possible to set an anchorpoint
	var anchor;

	// import spritesheet
	var sprite = spritesheets[spriteType];
	var image = new Image();
	image.src = sprite.file;

	// Make dimensions public
	this.width = sprite.width;
	this.height = sprite.height;

	// Create pattern from image
	var pattern;
	var repeat = sprite.repeat;
	if(sprite.repeat) image.onload = createPattern;

	var fillPosX = 0;
	var fillPosY = 0;
	var offset = object.offset;

	// Hitbox is the actual physical area
	var hitbox = sprite.hitbox;

	// Variables for animation spritesheets
	var animations = sprite.animations;
	if(animations){
		var label = sprite.animationDefault;
		var currentAnimation = animations[label];
		hitbox = currentAnimation.hitbox;
		var frame = {
			x : 0,
			y : 0,
			width : sprite.width,
			height : sprite.height
		};
		var playhead = 1;
		createTimeline();
	}

	var flip = false;

	// I need it public for bunny
	this.hitbox = hitbox;

	// Apply hitbox, offsets, etc on creation
	changeProperties();

	this.draw = function() {
		drawSpriteType();
	};

	function drawSpriteType () {

		if(sprite.animations) drawAnimations();
		else if(sprite.repeat) drawRepeated();
		else drawStatic();
	}

	function changeProperties (){
		if(hitbox) applyHitbox();
		if(offset) applyPatternOffset();
		if(anchor) applyAnchor(anchor);
		changeDimensions();
	}

	this.updatePosition = function() {
		drawnArea.x = object.position.x;
		drawnArea.y = object.position.y;
		changeProperties();
	}

	this.applyAnchor = function(point) {
		anchor = point;
		if(anchor === "right"){
			var newPos = object.position.x + object.width;
			newPos -= sprite.width*2;
			newPos += hitbox.x;
			drawnArea.x = newPos;
		}
	}

	this.flip = function(){
		flip = true;
		if(animations) frame.x = sprite.width;
		else{
			fillPosX = sprite.width;
		}
	}

	this.unFlip = function(){
		flip = false;
		if(animations) frame.x = 0;
	}

	function changeDimensions () {
		if(repeat == "repeat-y"){
			drawnArea.width = sprite.width;
		}
		if(repeat == "repeat-x"){
			drawnArea.height = sprite.height;
		}
	}

	function createPattern () {
		pattern = ctx.createPattern(image, repeat);
	}

	function applyPatternOffset () {
		if(repeat == "repeat-y"){
			fillPosY -= offset;
			drawnArea.y += offset;
		}
		else if(repeat == "repeat-x"){
			fillPosX -= offset;
			drawnArea.x += offset;
		}
	}

	function applyHitbox () {
		if(flip)
			drawnArea.x -= frame.width - hitbox.width - hitbox.x;
		else
			drawnArea.x -= hitbox.x || 0;


		drawnArea.y -= hitbox.y || 0;
	}

	function drawRepeated () {
		ctx.save();

		ctx.translate(drawnArea.x, drawnArea.y);
		ctx.fillStyle = pattern;
		ctx.fillRect(fillPosX, fillPosY, drawnArea.width, drawnArea.height);

		ctx.restore();
	}

	function drawStatic () {
		ctx.drawImage(
			image,
			drawnArea.x,
			drawnArea.y,
			sprite.width,
			sprite.height
		);
	}

	function drawAnimations (argument) {
		drawImage();
	}

	function drawImage () {
		ctx.drawImage(
			image,

			frame.x,
			frame.y,
			frame.width,
			frame.height,

			drawnArea.x,
			drawnArea.y,
			frame.width,
			frame.height
		);
	}

	function createTimeline () {

	}

	function changeFramePosition (frameNumber) {
		frame.y = frame.height * frameNumber;
	}

	function changePlayhead (argument) {
		// body...
	}

	this.gotoAndPlay = function(animation) {
		currentAnimation = animations[animation];
		hitbox = currentAnimation.hitbox;
		changeFramePosition(currentAnimation.start);
	}

}