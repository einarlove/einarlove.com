document.addEventListener("DOMContentLoaded", function(){

	bugs = [];
	winningBugs = [];

	!function setup(){
		game = new Game();
		canvas = getCanvas("#mainCanvas");
		ctx    = canvas.ctx;
		game.timer = 60;

		mousePos = {x:canvas.width/2,y:canvas.height/2};

		pizza = new Image();
		pizza.src = "canvas_resources/pizza-sepia.png";

		king = new King(sprites.king, 400, 200);

	}()


	game.draw = function(){
		ctx.clearCanvas();
		requestAnimationFrame(game.draw);

		displayPizza(pizza,20, 450, 1);

		bugs.forEach(displayBug);

		if(game.playable)
			king.changePosition();

		king.display();

		winningBugs.forEach(displayBug);

		game.displayTimer(20, 50, 46);
	}

	game.spawnBug = function(){
		randomX = randomFromTo(70, ctx.canvas.width-60);
		randomS = randomFromTo(5, 20) / 100;
		if(game.playable)
			bugs.unshift(new Bug(sprites.bug1, randomX, 250, randomS ))
	}


	// Make king's hit animation on click
	canvas.addEventListener("click", function(){
		king.gotoAndPlay("hit")
	})

	function displayBug(bug, index, bugs){

		if(isInfrontKing(bug, 20) && !bug.dying){
			bug.dying = true;
			bug.gotoAndPlay("die");
			king.gotoAndPlay("hit");
		}

		if(bug.y >= 550-bug.height && !bug.dying && game.playable){
			bug.won = true;
			game.lost();
		}
		else if(!bug.dying && !bug.won && game.playable){
			bug.progress += 0.001;
			bug.y = (450 * bug.progress/2) + 200;
			var newSize = bug.progress*2 + 0.2;
			bug.changeSize( newSize );
			if(bug.isBeyondKing)
				bug.x = linear(bug.x, 0, 400, 0, 0.005).x;

			// Move bug to another array to be drawn after king
			if(!bug.isBeyondKing && bug.y >= 480 - bug.height){
				bug.isBeyondKing = true;
				winningBugs.unshift(bug);
				bugs.splice(index,1);
			}
		}

		bug.display();

		if(bug.dead)
			bugs.splice(index,1)
	}

	function displayPizza(pizza, x, y, size){
		var pizza = pizza;
		ctx.drawImage(pizza, x, y);
	}

	function isInfrontKing(bug, distance){
		kl = king.x + 10;
		kr = king.x + king.width - 10;
		kb = king.y + king.height;

		bl = bug.x;
		br = bug.x + bug.width;
		bb = bug.y + bug.height;

		if(kl > br || kr < bl) { return false };
		if(kb < bb)				     { return false };
		if(kb - bb <= distance){ return true };

		return false;
	}

	// show only canvas for testing purposes
	if(window.location.hash === "#onlyCanvas"){
		document.querySelector(".game").classList.add("show");
		game.draw();
		game.countDown(game.timer);
		setInterval(game.spawnBug, 2000)
	}
	else{
		// Start intro animation
		window.onload = function(){
			document.querySelector(".intro").classList.add("animate");
			// Wait 9 seconds and then show game menu
			setTimeout(function(){
				document.body.classList.add("show_game_menu");
			},1000 * 11)
		}
	}

	if(!browserIsSupported()){
		document.body.classList.add("browser-not-supported");
		_gaq.push(['_trackEvent', 'Browser', 'Not supported']);
	}

	document.querySelector("#start_game").addEventListener("click",game.start);
	canvas.addEventListener("mousemove", getMousePos)
})