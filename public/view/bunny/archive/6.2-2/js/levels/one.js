
levels[1] = function(){

	this.width = 900;
	this.height = 1300;
	this.defaultZoom = 1.4;

	this.startPosition = {
		x: 130,
		y :1200,
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
			offset: 290
		}),


		// Left wall
		new Soil({
			x: -50,
			y: 0,
			z: 5,
			width: 70,
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

		// Big left block
		new Soil({
			x: 0,
			y: 0,
			z: 6,
			width: 400,
			height: 1000,
			offset: 20,
			grassOn : "right"
		}),

		// Big right block
		new Soil({
			x: 600,
			y: 350,
			z: 7,
			width: 350,
			height: 898,
			offset: 200,
			grassOn:"left"
		}),

		new Soil({
			x: 600,
			y: 324,
			z: 6,
			width: 269,
			height: 40,
			offset: 300
		}),


		new Beehive({
			x: 320,
			y: 999,
			z: 5,
			hasBees : true
		}),

		new Carrot({
			x: 740,
			y: 210,
			z: 1,
		})
	]

	return this;
}