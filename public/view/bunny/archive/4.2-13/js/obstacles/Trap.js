function Trap () {
	this.type = "trap"
	this.harmfull = true;
	this.walkThrough = true;


	// Wait 300ms then close, wait
	this.close = function(){
		var trap = this;
		setTimeout(function(){
			trap.sprite.gotoAndPlay("close")
			trap.closed = true;
			setTimeout(function(){
				if(bunny.playable){
					trap.closed = false;
					trap.sprite.gotoAndPlay("stand_still")
				}
			}, 1000)
		},300)
	}

	Obstacle.apply(this, arguments);
}