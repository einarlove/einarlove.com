
levels[4] = function(){

	this.width = 800;
	this.height = 1000;
	this.defaultZoom = 1;

	this.startPosition = {
		x: 250,
		y: 900, // 900
		z: 2
	}

	this.obstacles = [
		new Soil({
			x: 0,
			y: this.height - 80,
			z: 4,
			width: 900,
			height: 200,
			grassOn: "top",
			offset: 130
		}),


		// Left wall
		new Soil({
			x: 0,
			y: 0,
			z: 5,
			width: 70,
			height: 943,
			grassOn: "right",
			offset: 627
		}),

		// Right wall
		new Soil({
			x: 730,
			y: 0,
			z: 5,
			width: 70,
			height: 943,
			grassOn: "left",
			offset: 126
		}),

		// first plateau
		new Soil({
			x: 70,
			y: 640,
			z: 5,
			width: 490,
			height: 60,
			grassOn: "top",
			offset: 526
		}),


		// first mini-wall
		new Soil({
			x: 520,
			y: 540,
			z: 6,
			width: 40,
			height: 160,
			grassOn: "top",
			offset: -60
		}),

		new Beehive({
			x: 520,
			y: 698,
			z: 5,
			hasBees : true
		}),

		new ThornBush({
			x: 630,
			y: 840,
			z: 4,
		}),

		new Trap({
			x: 510,
			y: 907,
			z: 4,
		}),

		new Trap({
			x: 430,
			y: 907,
			z: 4,
		}),

		// Upper bush
		new ThornBush({
			x: 420,
			y: 560,
			z: 4,
		}),



		// second plateau
		new Soil({
			x: 453,
			y: 200,
			z: 5,
			width: 470,
			height: 70,
			grassOn: "top",
			offset: 126
		}),

		// mini plateau
		new Soil({
			x: 200,
			y: 420,
			z: 5,
			width: 100,
			height: 40,
			grassOn: "top",
			offset: 326
		}),


		// mini plateau
		new Soil({
			x: 200,
			y: 200,
			z: 5,
			width: 100,
			height: 40,
			grassOn: "top",
			offset: 276
		}),

		new Beehive({
			x: 220,
			y: 238,
			z: 5,
			hasBees : true
		}),

		new Trap({
			x: 220,
			y: 187,
			z: 4,
		}),




		new Carrot({
			x: 600,
			y: 100,
			z: 1,
		})
	]

	return this;
}