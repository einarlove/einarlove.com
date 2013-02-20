function Trap () {
	this.type = "trap"
	this.harmfull = true;
	this.walkThrough = true;

	Obstacle.apply(this, arguments);

	// Jesus christ. whats up with this public/private bullshit
	var trap = this;

	// Wait 300ms then close, wait
	this.close = function(){
		setTimeout(function(){
			if(bunny.playable) trap.sprite.gotoAndPlay("close")
			else trap.sprite.gotoAndPlay("close_with_blood")
			trap.closed = true;
			setTimeout(trap.reset, 1000)
		},300)
	}

	this.reset = function(){
		if(bunny.playable){
			trap.closed = false;
			trap.sprite.gotoAndPlay("stand_still")
		}
	}

}