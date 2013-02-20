
levels[2] = function(){

	this.width = 1000;
	this.height = 700;

	this.defaultZoom = 1.1;

	this.startPosition = {
		x: 185,
		y :550,
		z: 2
	}

	this.obstacles = [

		// Ground
		new Soil({
			x: 0,
			y: 620,
			z: 4,
			width: 300,
			height: 200,
			grassOn: "top",
			offset: 90
		}),

		// middle ground
		new Soil({
			x: 400,
			y: 620,
			z: 4,
			width: 70,
			height: 200,
			grassOn: "top",
			offset: 180
		}),

		// middle ground
		new Soil({
			x: 570,
			y: 620,
			z: 4,
			width: 70,
			height: 200,
			grassOn: "top",
			offset: 290
		}),

		// middle ground
		new Soil({
			x: 740,
			y: 620,
			z: 4,
			width: 70,
			height: 200,
			grassOn: "top",
			offset: 90
		}),


		// middle ground
		new Soil({
			x: 890,
			y: 620,
			z: 4,
			width: 200,
			height: 200,
			grassOn: "top",
			offset: 190
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
			x: 950,
			y: 0,
			z: 5,
			width: 100,
			height: 643,
			grassOn: "left",
			offset: 226
		}),

		// Plateau
		new Soil({
			x: 36,
			y: 220,
			z: 6,
			width: 250,
			height: 40,
			offset: 380
		}),

		// floating thing
		new Soil({
			x: 700,
			y: 350,
			z: 6,
			width: 80,
			height: 40,
			offset: 20
		}),

		new Trap({
			x: 707,
			y: 337,
			z: 3,
		}),


		// Second floating thing
		new Soil({
			x: 433,
			y: 310,
			z: 6,
			width: 120,
			height: 40,
			offset: 200
		}),

		new Carrot({
			x: 150,
			y: this.height - 550,
			z: 1,
		})
	]

	return this;
}