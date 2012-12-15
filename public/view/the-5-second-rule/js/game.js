Game = function(){
	this.playable = true;
	this.spawnInterval = 2000;
	this.won = function(){
		game.playable = false;
		king.playable = false;
		king.gotoAndPlay("start_cheer");
		// Wait 1 second and display overlay
		setTimeout(function(){
			document.querySelector(".game").classList.add("won");
			blurOrFade(canvas);
		},1000);
		if(tracking) _gaq.push(['_trackEvent', 'Game', 'Won']);
	}
	this.lost = function(){
		game.playable = false;
		king.gotoAndPlay("stand");
		// Wait 1 second and display overlay
		setTimeout(function(){
			document.querySelector(".game").classList.add("lost");
			blurOrFade(canvas);
		},1000);
		if(tracking) _gaq.push(['_trackEvent', 'Game', 'Lost']);
	}
	this.countDown = function(){
		setInterval(function(){
			if(game.timer === 0 && game.playable)
				game.won()
			else if(game.playable)
				game.timer--;

			if(game.timer == 40)
				game.spawnInterval = 1700;
			if(game.timer == 30)
				game.spawnInterval = 1500;
			if(game.timer == 15)
				game.spawnInterval = 1300;
		}, 1000)
	}
	this.start = function(){
		document.body.classList.add("start_game");
		setTimeout(function(){
			document.querySelector(".game").classList.add("show");
			game.draw();
			game.countDown();
			game.spawnBug();
			if(tracking) _gaq.push(['_trackEvent', 'Game', 'Started']);
		}, 1000 * 6);
	}
	this.displayTimer = function(x, y, size){
		ctx.font = size +'px "Rags to Riches"';
		ctx.fillStyle = '#000';
		ctx.fillText(game.timer, x, y);
	}
};