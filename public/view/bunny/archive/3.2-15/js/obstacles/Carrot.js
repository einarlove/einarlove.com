 var Carrot = function(){

 	this.type = "carrot";
 	Obstacle.apply(this, arguments);

 	this.collectable = true;

 	this.customLoop = function() {
	 	// Floating
	 	this.position.y += Math.sin(game.frameCounter/20)/5
 	};

 	// Relocate to new position
 	this.respawn = function(){
 		var newX = random(0, canvas.width)
 		var newY = random(0, canvas.height)

 		this.position.x = newX;
 		this.position.y = newY;
 		game.currentLevel.obstacles.forEach(function(obstacle){
 			if(isOverlaying(obstacle, this)){
 				if(!obstacle.untouchable){
 					this.respawn();
 				}
 			}
 		}, this)
 	}
}