function Trap () {
	this.type = "trap"
	this.harmfull = true;
	this.walkThrough = true;

	Obstacle.apply(this, arguments);

	// Jesus christ. whats up with this public/private bullshit
	var trap = this; // Ops: Not transexual

	// Wait 300ms then close
	this.close = function(){
		setTimeout(function(){

			trap.sprite.gotoAndPlay("close")
			// else trap.sprite.gotoAndPlay("close_with_blood")
			trap.closed = true;

			// Disable the harmfullness after Bunny is finished with collisiondetection
			// setTimeout(function(){trap.harmfull = false;},40)
			setTimeout(trap.reset, 1000)

		},300)
	}

	this.reset = function(){
		if(bunny.playable || game.stopDraw){
			trap.closed = false;
			trap.sprite.gotoAndPlay("stand_still")
		}
	}

}