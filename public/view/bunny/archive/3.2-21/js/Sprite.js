Sprite = function(spriteType, object){


	// Create own position & dimensions for drawn area
	var drawnArea = {
		x : object.position.x,
		y : object.position.y,
		width : object.width,
		height : object.height
	}

	// import spritesheet
	var spritesheet = spritesheets[spriteType]
	var image = new Image();
	image.src = spritesheet.file;

	// Create pattern from image
	var pattern;
	var repeat = spritesheet.repeat
	if(spritesheet.repeat) image.onload = createPattern;

	var fillPosX = 0;
	var fillPosY = 0;
	var offset = object.offset;

	// Hitbox is the actual physical area
	var hitbox = spritesheet.hitbox

	// Apply hitbox, offsets, etc on creation
	changeProperties();

	this.draw = function() {
		drawSpriteType();
	};

	function drawSpriteType () {

		if(spritesheet.animations) drawAnimations();
		else if(spritesheet.repeat) drawRepeated();
		else drawStatic();
	}

	function changeProperties () {
		if(hitbox) applyHitbox();
		if(offset) applyPatternOffset();
		if(this.anchor) applyAnchor();
		changeDimensions();
	}

	function applyAnchor () {
		// body...
	}

	function changeDimensions () {
		// body...
	}

	function createPattern () {
		pattern = ctx.createPattern(image, repeat);
	}

	function applyPatternOffset () {
		if(repeat == "repeat-y"){
			fillPosY -= offset
			drawnArea.y += offset
		}
		else if(repeat == "repeat-x"){
			fillPosX -= offset
			drawnArea.x += offset
		}
	}

	function applyHitbox () {
		drawnArea.x -= hitbox.x || 0;
		drawnArea.y -= hitbox.y || 0;
	}

	function drawRepeated () {
		ctx.save();
		ctx.fillStyle = pattern;
		ctx.translate(drawnArea.x, drawnArea.y);
		ctx.fillRect(fillPosX, fillPosY, drawnArea.width, drawnArea.height)
		ctx.restore();
	}

	function drawStatic () {
		// body...
	}

	function drawAnimations (argument) {
		// body...
	}

	function drawImage () {
		ctx.drawImage(image,
			this.flip ? spritesheet.width : framePosition.x,
			framePosition.y + (spritesheet.height * playhead),
			spritesheet.width,
			spritesheet.height,
			position.x,
			position.y,
			this.width, this.height
		);
	}

	function changeFramePosition (frameNumber) {
		// body...
	}

	function changePlayhead (argument) {
		// body...
	}

	this.gotoAndPlay = function(animation) {
		// body...
	}

}