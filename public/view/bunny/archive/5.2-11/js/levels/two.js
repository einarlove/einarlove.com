
Levels[2] = function() {


	this.obstacles = [
		new Soil({
			x: 0,
			y: canvas.height - 80,
			z: 4,
			width: 600,
			height: 200,
			grassOn: "top",
			offset: 90
		}),


		// Left wall
		new Soil({
			x: -50,
			y: 0,
			z: 5,
			width: 100,
			height: 643,
			grassOn: "right",
			offset: 627
		}),

		// Right wall
		new Soil({
			x: 550,
			y: 0,
			z: 5,
			width: 100,
			height: 643,
			grassOn: "left",
			offset: 226
		}),


		new Soil({
			x: 170,
			y: canvas.height - 250,
			z: 6,
			width: 80,
			height: 40,
			offset: 20
		}),

		new Soil({
			x: 443,
			y: canvas.height - 330,
			z: 6,
			width: 124,
			height: 40,
			offset: 200
		}),

		new Soil({
			x: 36,
			y: canvas.height - 480,
			z: 6,
			width: 200,
			height: 40,
			offset: 380
		}),

		new Trap({
			x: 177,
			y: canvas.height - 263,
			z: 3,
		}),

		new Trap({
			x: 380,
			y: canvas.height - 93,
			z: 3,
		}),

		new Trap({
			x: 445,
			y: canvas.height - 343,
			z: 3,
		}),

		new Carrot({
			x: 150,
			y: canvas.height - 550,
			z: 1,
		})
	]

	Level.apply(this, arguments);
}