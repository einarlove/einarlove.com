
function level_1(canvas){
	return [
		// Background
		{
			x: 0,
			y: 0,
			z: 1,
			width: canvas.width,
			height: canvas.height,
			type: "background",
			untouchable : true
		},

		// Ground
		{
			x: 0,
			y: canvas.height - 80,
			z: 2,
			width: 600,
			height: 80,
			type: "ground",
		},

		// Carrot
		{
			x: 270,
			y: canvas.height - 580,
			z: 2,
			width: 8*3,
			height: 8*3,
			type: "carrot",
			collectable: true
		},

		// Left wall
		{
			x: 0,
			y: -200,
			z: 2,
			width: 30,
			height: canvas.height - 80 + 223,
			type: "left_wall",
		},

		// Right wall
		{
			x: canvas.width - 30,
			y: 0,
			z: 2,
			width: 30,
			height: canvas.height - 80 + 23,
			type: "right_wall",
		},

		// Floating platform
		{
			x: 250,
			y: canvas.height - 200,
			z: 2,
			width: 100,
			height: 70,
			type: "ground",
		},


		// Floating platform
		{
			x: 22,
			y: canvas.height - 280,
			z: 2,
			width: 100,
			height: 40,
			type: "ground",
		},

		// Floating platform
		{
			x: 478,
			y: canvas.height - 280,
			z: 2,
			width: 100,
			height: 40,
			type: "ground",
		},


		// Floor 2

		// Floating platform
		{
			x: 200,
			y: canvas.height - 540,
			z: 2,
			width: 200,
			height: 40,
			type: "ground",
		}
	]
}