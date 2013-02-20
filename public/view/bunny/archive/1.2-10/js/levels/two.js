
function level_2(canvas){
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
			x: 280,
			y: canvas.height - 620,
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
			width: 180,
			height: canvas.height - 80 + 223,
			type: "left_wall",
		},

		// Right wall
		{
			x: canvas.width - 180,
			y: 0,
			z: 2,
			width: 180,
			height: canvas.height - 80 + 23,
			type: "right_wall",
		},
	]
}