
function level_2 (canvas) {
	var obstacles = [];

	obstacles.push(new Soil({
		x: 0,
		y: canvas.height - 80,
		z: 3,
		width: 600,
		height: 200,
		grassOn: "top",
		offset: 12
	}))


	// Left wall
	obstacles.push(new Soil({
		x: -50,
		y: 48,
		z: 4,
		width: 100,
		height: 600,
		grassOn: "right",
		offset: 70
	}))

	// Right wall
	obstacles.push(new Soil({
		x: 550,
		y: 48,
		z: 4,
		width: 100,
		height: 597,
		grassOn: "left",
		offset: 100
	}))


	obstacles.push(new Soil({
		x: 170,
		y: canvas.height - 250,
		z: 4,
		width: 80,
		height: 40
	}))

	obstacles.push(new Soil({
		x: 443,
		y: canvas.height - 330,
		z: 4,
		width: 130,
		height: 40,
		offset: 100
	}))

	obstacles.push(new Soil({
		x: 27,
		y: canvas.height - 480,
		z: 3,
		width: 210,
		height: 40,
		offset: 130
	}))

	obstacles.push(new Trap({
		x: 175,
		y: canvas.height - 263,
		z: 3,
	}))

	obstacles.push(new Trap({
		x: 380,
		y: canvas.height - 93,
		z: 3,
	}))

	obstacles.push(new Trap({
		x: 445,
		y: canvas.height - 343,
		z: 3,
	}))

	obstacles.push(new Carrot({
		x: 150,
		y: canvas.height - 550,
		height: 13,
		z: 2,
	}))


	return obstacles
}



// function level_2(canvas){
// 	return [
// 		// Background
// 		{
// 			x: 0,
// 			y: 0,
// 			z: 1,
// 			width: canvas.width,
// 			height: canvas.height,
// 			type: "background",
// 			untouchable : true
// 		},

// 		// Ground
// 		{
// 			x: 0,
// 			y: canvas.height - 80,
// 			z: 3,
// 			width: 600,
// 			height: 80,
// 			type: "ground",
// 		},

// 		// Carrot
// 		{
// 			x: 280,
// 			y: canvas.height - 620,
// 			z: 3,
// 			width: 8*3,
// 			height: 8*3,
// 			type: "carrot",
// 			collectable: true
// 		},

// 		// Left wall
// 		{
// 			x: 0,
// 			y: -200,
// 			z: 3,
// 			width: 180,
// 			height: canvas.height - 80 + 223,
// 			type: "left_wall",
// 		},

// 		// Right wall
// 		{
// 			x: canvas.width - 180,
// 			y: 0,
// 			z: 3,
// 			width: 180,
// 			height: canvas.height - 80 + 23,
// 			type: "right_wall",
// 		},
// 	]
// }