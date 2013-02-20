function getCanvas(canvasId){
	var canvas = document.querySelector(canvasId);
	var ctx = canvas.getContext("2d");
	ctx.clearCanvas = function(){
		this.canvas.width = this.canvas.width;
	}
	ctx.center = {
		x : ctx.canvas.width / 2,
		y : ctx.canvas.height / 2
	}
	canvas.ctx = ctx;
	return canvas;
}


function isOverlaying(a, b){

	var al = a.position.x;
	var ar = a.position.x + a.width;
	var bl = b.position.x;
	var br = b.position.x + b.width;

	var at = a.position.y;
	var ab = a.position.y + a.height;
	var bt = b.position.y;
	var bb = b.position.y + b.height;
	if(bl>ar || br<al){return false;}
	if(bt>ab || bb<at){return false;}
	if(bl>al && bl<ar){return true;}
	if(br>al && br<ar){return true;}
	if(bt>at && bt<ab){return true;}
	if(bb>at && bb<ab){return true;}
	return false;
}

keycode = {

	getKeyCode: function (e) {
		var keycode = e.keyCode || e.which;
		return keycode;
	},

	getKeyCodeValue : function(keyCode, shiftKey) {
		shiftKey = shiftKey || false;
		var value = null;
		if(shiftKey === true) {
			value = this.modifiedByShift[keyCode];
		}else {
			value = this.keyCodeMap[keyCode];
		}
		return value;
	},

	getValueByEvent : function(e) {
		return this.getKeyCodeValue(this.getKeyCode(e), e.shiftKey);
	},

	keyCodeMap : {
		8:"backspace", 9:"tab", 13:"return", 16:"shift", 17:"ctrl", 18:"alt", 19:"pausebreak", 20:"capslock", 27:"escape", 32:" ", 33:"pageup",
		34:"pagedown", 35:"end", 36:"home", 37:"left", 38:"up", 39:"right", 40:"down", 43:"+", 44:"printscreen", 45:"insert", 46:"delete",
		48:"0", 49:"1", 50:"2", 51:"3", 52:"4", 53:"5", 54:"6", 55:"7", 56:"8", 57:"9", 59:";",
		61:"=", 65:"a", 66:"b", 67:"c", 68:"d", 69:"e", 70:"f", 71:"g", 72:"h", 73:"i", 74:"j", 75:"k", 76:"l",
		77:"m", 78:"n", 79:"o", 80:"p", 81:"q", 82:"r", 83:"s", 84:"t", 85:"u", 86:"v", 87:"w", 88:"x", 89:"y", 90:"z",
		96:"0", 97:"1", 98:"2", 99:"3", 100:"4", 101:"5", 102:"6", 103:"7", 104:"8", 105:"9",
		106: "*", 107:"+", 109:"-", 110:".", 111: "/",
		112:"f1", 113:"f2", 114:"f3", 115:"f4", 116:"f5", 117:"f6", 118:"f7", 119:"f8", 120:"f9", 121:"f10", 122:"f11", 123:"f12",
		144:"numlock", 145:"scrolllock", 186:";", 187:"=", 188:",", 189:"-", 190:".", 191:"/", 192:"`", 219:"[", 220:"\\", 221:"]", 222:"'"
	},

	modifiedByShift : {
		192:"~", 48:")", 49:"!", 50:"@", 51:"#", 52:"$", 53:"%", 54:"^", 55:"&", 56:"*", 57:"(", 109:"_", 61:"+",
		219:"{", 221:"}", 220:"|", 59:":", 222:"\"", 188:"<", 189:">", 191:"?",
		96:"insert", 97:"end", 98:"down", 99:"pagedown", 100:"left", 102:"right", 103:"home", 104:"up", 105:"pageup"
	}

};

// Bezier curve function
function linear(x1, y1, x2, y2, t) {
	x = (1-t) * x1 + t * x2;
	y = (1-t) * y1 + t * y2;
	if(Math.abs(x-x2)<0.0001) x = x2; // Stop calculation when not needed
	if(Math.abs(y-y2)<0.0001) y = y2;
	return {x:x, y:y};
}

function random(from,to){
	return Math.floor(Math.random()*(to-from+1)+from);
}