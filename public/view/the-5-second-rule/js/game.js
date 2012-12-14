Game = function(){
	this.playable = true;
	this.won = function(){
		game.playable = false;
		king.playable = false;
		king.gotoAndPlay("start_cheer");
		document.querySelector(".game").classList.add("won");
		blurOrFade(canvas);
		_gaq.push(['_trackEvent', 'Game', 'Won']);
	}
	this.lost = function(){
		game.playable = false;
		king.gotoAndPlay("stand");
		document.querySelector(".game").classList.add("lost");
		blurOrFade(canvas);
		_gaq.push(['_trackEvent', 'Game', 'Lost']);
	}
	this.countDown = function(){
		setInterval(function(){
			if(game.timer === 0 && game.playable)
				game.won()
			else if(game.playable)
				game.timer--;
		}, 1000)
	}
	this.start = function(){
		document.body.classList.add("start_game");
		setTimeout(function(){
			document.querySelector(".game").classList.add("show");
			game.draw();
			game.countDown();
			setInterval(game.spawnBug, 2000)
			_gaq.push(['_trackEvent', 'Game', 'Started']);
		}, 1000 * 6);
	}
	this.displayTimer = function(x, y, size){
		ctx.font = size +'px "Rags to Riches"';
		ctx.fillStyle = '#000';
		ctx.fillText(game.timer, x, y);
	}
};