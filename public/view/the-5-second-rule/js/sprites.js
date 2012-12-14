var sprites = {
	bug1:{
		sprite: "canvas_resources/bug1-sepia.png",
		frameWidth: 114,
		frameHeight: 160,
		frames:{
			1:  { x:0,    y:0   },
			2:  { x:114,  y:0   },
			3:  { x:228,  y:0   },
			4:  { x:342,  y:0   },
			5:  { x:456,  y:0   },
			6:  { x:570,  y:0   },
			7:  { x:684,  y:0   },
			8:  { x:798,  y:0   },
			9:  { x:0,    y:160 },
			10: { x:114,  y:160 },
			11: { x:228,  y:160 },
			12: { x:342,  y:160 },
			13: { x:456,  y:160 },
			14: { x:570,  y:160 },
			15: { x:684,  y:160 },
			16: { x:798,  y:160 },
			17: { x:0,    y:320 },
			18: { x:114,  y:320 },
			19: { x:228,  y:320 },
			20: { x:342,  y:320 },
			21: { x:456,  y:320 },
			22: { x:570,  y:320 },
			23: { x:684,  y:320 },
			24: { x:798,  y:320 },
			25: { x:0,    y:480 },
			26: { x:114,  y:480 },
			27: { x:228,  y:480 },
			28: { x:342,  y:480 }
		},
		labels:{
			"stand": {start: 1, stop:1},
			"walk":  {start: 1, stop:16},
			"die":    {start: 17, stop:23},
			"fadeAway": {start: 24, stop:28}
		}
	},

	king:{
		sprite: "canvas_resources/king-sepia.png",
		frameWidth: 215,
		frameHeight: 268,
		frames:{
			0:  { x:0,    y:0},
			1:  { x:215,  y:0},
			2:  { x:430,  y:0},
			3:  { x:645,  y:0},
			4:  { x:860,  y:0},
			5:  { x:1075, y:0},
			6:  { x:1290, y:0},
			7:  { x:1505, y:0},
			8:  { x:1720, y:0},
			9:  { x:0,    y:268},
			10: { x:215,  y:268},
			11: { x:430,  y:268},
			12: { x:645,  y:268},
			13: { x:860,  y:268},
			14: { x:1075, y:268},
			15: { x:1290, y:268},
			16: { x:1505, y:268},
			17: { x:1720, y:268},
			18: { x:0,    y:536},
			19: { x:215,  y:536},
			20: { x:430,  y:536},
			21: { x:645,  y:536},
			22: { x:860,  y:536},
			23: { x:1075, y:536},
			24: { x:1290, y:536},
			25: { x:1505, y:536},
			26: { x:1720, y:536},
			27: { x:0,    y:804},
			28: { x:215,  y:804},
			29: { x:430,  y:804},
			30: { x:645,  y:804},
			31: { x:860,  y:804},
			32: { x:1075, y:804},
			33: { x:1290, y:804},
			34: { x:1505, y:804},
			35: { x:1720, y:804},
			36: { x:0,    y:1072},
			37: { x:215,  y:1072},
			38: { x:430,  y:1072},
			39: { x:645,  y:1072},
			40: { x:860,  y:1072},
			41: { x:1075, y:1072},
			42: { x:1290, y:1072},
			43: { x:1505, y:1072},
			44: { x:1720, y:1072},
			45: { x:0,    y:1340},
			46: { x:215,  y:1340},
			47: { x:430,  y:1340},
			48: { x:645,  y:1340},
			49: { x:860,  y:1340},
			50: { x:1075, y:1340},
			51: { x:1290, y:1340}
		},
		labels:{
			"stand":       {start: 0, stop:0},
			"walk_left":   {start: 1, stop:13},
			"walk_right":  {start: 13, stop:26},
			"hit":         {start: 27, stop:34},
			"start_cheer": {start: 35, stop:39},
			"cheer":       {start: 39, stop:51},
		}
	}
};