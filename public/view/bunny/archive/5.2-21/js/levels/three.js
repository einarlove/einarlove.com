
levels[3] = function(){

	this.width = 900;
	this.height = 1300;
	this.defaultZoom = 1;

	this.startPosition = {
		x: 485,
		y :1050,
		z: 2
	}

	this.obstacles = [
	// {this.width, this.height}
	// ,
		new Soil({
			x: 0,
			y: this.height - 80,
			z: 4,
			width: 900,
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
			height: 1243,
			grassOn: "right",
			offset: 627
		}),

		// Right wall
		new Soil({
			x: 850,
			y: 0,
			z: 5,
			width: 100,
			height: 1243,
			grassOn: "left",
			offset: 226
		}),


		new Soil({
			x: 170,
			y: this.height - 250,
			z: 6,
			width: 80,
			height: 40,
			offset: 20
		}),

		new Soil({
			x: 443,
			y: this.height - 330,
			z: 6,
			width: 124,
			height: 40,
			offset: 200
		}),

		new Soil({
			x: 36,
			y: this.height - 480,
			z: 6,
			width: 200,
			height: 40,
			offset: 380
		}),

		// new Trap({
		// 	x: 177,
		// 	y: this.height - 263,
		// 	z: 3,
		// }),

		// new Trap({
		// 	x: 380,
		// 	y: this.height - 93,
		// 	z: 3,
		// }),

		// new Trap({
		// 	x: 445,
		// 	y: this.height - 343,
		// 	z: 3,
		// }),

		new Carrot({
			x: 150,
			y: this.height - 550,
			z: 1,
		})
	]

	return this;
}