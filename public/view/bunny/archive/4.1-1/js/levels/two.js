
function level_2 (canvas) {
	var obstacles = [];

	obstacles.push(new Soil({
		x: 0,
		y: canvas.height - 80,
		z: 2,
		width: 600,
		height: 200,
		grassOn: "top",
		offset: 12
	}))


	obstacles.push(new Soil({
		x: 200,
		y: canvas.height - 200,
		z: 2,
		width: 150,
		height: 40
	}))

	obstacles.push(new Soil({
		x: 400,
		y: canvas.height - 300,
		z: 2,
		width: 150,
		height: 40,
		offset: 100
	}))

	obstacles.push(new Soil({
		x: 100,
		y: canvas.height - 400,
		z: 2,
		width: 150,
		height: 40,
		offset: 130
	}))

	obstacles.push(new Soil({
		x: -50,
		y: 48,
		z: 2,
		width: 100,
		height: 600,
		grassOn: "right",
		offset: 70
	}))

	obstacles.push(new Soil({
		x: 550,
		y: 48,
		z: 2,
		width: 100,
		height: 597,
		grassOn: "left",
		offset: 100
	}))


	obstacles.push(new Carrot({
		x: 200,
		y: canvas.height - 260,
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
// 			z: 2,
// 			width: 600,
// 			height: 80,
// 			type: "ground",
// 		},

// 		// Carrot
// 		{
// 			x: 280,
// 			y: canvas.height - 620,
// 			z: 2,
// 			width: 8*3,
// 			height: 8*3,
// 			type: "carrot",
// 			collectable: true
// 		},

// 		// Left wall
// 		{
// 			x: 0,
// 			y: -200,
// 			z: 2,
// 			width: 180,
// 			height: canvas.height - 80 + 223,
// 			type: "left_wall",
// 		},

// 		// Right wall
// 		{
// 			x: canvas.width - 180,
// 			y: 0,
// 			z: 2,
// 			width: 180,
// 			height: canvas.height - 80 + 23,
// 			type: "right_wall",
// 		},
// 	]
// }