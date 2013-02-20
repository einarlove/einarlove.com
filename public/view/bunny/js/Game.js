Game = function(){

	this.frameCounter = 0;
	this.mousePos = {x:0, y:0}


	this.start = function(levelNumber){
		game.currentLevel = new Level(levelNumber || 1);
		bunny = new Bunny(game.currentLevel.startPosition)
		game.camera = new Camera();
		this.restart(true);
		game.draw();
		_gaq.push(['_trackEvent', 'Game', "start"]);
	}

	this.restart = function(){
		this.stopDraw = true;
		game.currentLevel.reset();
	}

	this.changeLevelTo = function(levelNumber){
		if(levelNumber != game.currentLevel.number){
			delete bunny;
			game.currentLevel = new Level(levelNumber);
			bunny = new Bunny(game.currentLevel.startPosition)
			game.camera.resetTo(bunny);
			window.location.hash = "#" + levelNumber;
			console.log(typeof levelNumber);
			_gaq.push(['_trackEvent', 'Level', "start", levelNumber.toString()]);
		}
		else{
			bunny.reset();
		}

		bunny.playable = true;
		game.camera.follow(bunny)
		game.camera.zoomTo = game.currentLevel.defaultZoom;
		this.stopDraw = false;
		this.requestRestart = false;
	}

	this.finished = function(){
		var finishedOverlay = document.querySelector('.finished.overlay');
		finishedOverlay.classList.add("fadeIn");
		this.stopDraw = true;
		_gaq.push(['_trackEvent', 'Game', "won"]);
	}

	this.draw = function(){
		if(this.stopDraw){return;}

		ctx.clearCanvas();
		requestAnimationFrame(this.draw.bind(this));
		game.frameCounter++;

		game.camera.move();

		game.currentLevel.soilBg.display();

		// Sky
		ctx.fillStyle = "hsl(190, 40%, 70%)";
		ctx.fillRect(0,0, game.currentLevel.width, game.currentLevel.height)


		if(!this.currentLevel.visibleElements.isSorted){
			this.currentLevel.visibleElements.sort(function(a,b){
				if(a.position.z < b.position.z) return -1;
				if(a.position.z > b.position.z) return 1;
				return 0;
			});
			this.currentLevel.visibleElements.isSorted = true;
		}

		this.currentLevel.visibleElements.forEach(function(element){
			if(!element.hidden)
				element.display();
			if(element.type === "falling_stone" && !element.onGround)
				element.fall();
		})

		if(this.requestRestart)
			this.restart();
	}
}