// Updates new position of mouse
function getMousePos(event){
	mousePos.x = event.offsetX || ctx.center.x;
	mousePos.y = event.offsetY || ctx.center.y;
}

// Bezier curve function
function linear(x1, y1, x2, y2, t) {
	x = (1-t) * x1 + t * x2;
	y = (1-t) * y1 + t * y2;
	return {x:x, y:y};
}

function isOverlaying(a, b){
		var al = a.x;
		var ar = a.x + a.width;
		var bl = b.x;
		var br = b.x + b.width;

		var at = a.y;
		var ab = a.y + a.height;
		var bt = b.y;
		var bb = b.y + b.height;
		console.log("al: "+al+" ar: "+ar+" at: "+at+" ab: "+ab);
		console.log("bl: "+bl+" br: "+br+" bt: "+bt+" bb: "+bb);
		if(bl>ar || br<al){return false;}
		if(bt>ab || bb<at){return false;}
		if(bl>al && bl<ar){return true;}
		if(br>al && br<ar){return true;}
		if(bt>at && bt<ab){return true;}
		if(bb>at && bb<ab){return true;}
		return false;
	}

// Canvas properties and functions
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

function randomFromTo(from,to){
		return Math.floor(Math.random()*(to-from+1)+from);
}

// If broswer support Filters, else fade
function blurOrFade(element){
	if ('WebkitFilter' in document.body.style)
	{
		element.classList.add("blurSupported");
	}else{
		element.classList.add("fade");
	}
}

navigator.sayswho = (function(){
    var N= navigator.appName, ua= navigator.userAgent, tem;
    var M= ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
    if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
    M= M? [M[1], M[2]]: [N, navigator.appVersion, '-?'];

    return M;
})();

function browserIsSupported(){
	var browser = navigator.sayswho[0];
	var version = navigator.sayswho[1].split(".")[0];
	if(browser === "Opera") return false;
	if(browser === "MSIE") return false;
	if(browser === "Firefox") return false;
	if(browser === "Safari" && version < 6) return false;
	return true;
}

/* Shims
————————————————*/

/*
 * Minimal classList shim for IE 9
 * By Devon Govett
 * MIT LICENSE
 */


if (!("classList" in document.documentElement) && Object.defineProperty && typeof HTMLElement !== 'undefined') {
		Object.defineProperty(HTMLElement.prototype, 'classList', {
				get: function() {
						var self = this;
						function update(fn) {
								return function(value) {
										var classes = self.className.split(/\s+/),
												index = classes.indexOf(value);

										fn(classes, index, value);
										self.className = classes.join(" ");
								}
						}

						var ret = {
								add: update(function(classes, index, value) {
										~index || classes.push(value);
								}),

								remove: update(function(classes, index) {
										~index && classes.splice(index, 1);
								}),

								toggle: update(function(classes, index, value) {
										~index ? classes.splice(index, 1) : classes.push(value);
								}),

								contains: function(value) {
										return !!~self.className.split(/\s+/).indexOf(value);
								},

								item: function(i) {
										return self.className.split(/\s+/)[i] || null;
								}
						};

						Object.defineProperty(ret, 'length', {
								get: function() {
										return self.className.split(/\s+/).length;
								}
						});

						return ret;
				}
		});
}

// shim layer with setTimeout fallback
   window.requestAnimationFrame = (function(){
     return  window.requestAnimationFrame       ||
             window.webkitRequestAnimationFrame ||
             window.mozRequestAnimationFrame    ||
             window.oRequestAnimationFrame      ||
             window.msRequestAnimationFrame     ||
             function( callback ){
               window.setTimeout(callback, 1000 / 60);
             };
   })();


// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.com/#x15.4.4.18
if ( !Array.prototype.forEach ) {
  Array.prototype.forEach = function forEach( callback, thisArg ) {
    var T, k;
    if ( this == null ) {
      throw new TypeError( "this is null or not defined" );
    }
    var O = Object(this);
    var len = O.length >>> 0;
    if ( {}.toString.call(callback) !== "[object Function]" ) {
      throw new TypeError( callback + " is not a function" );
    }
    if ( thisArg ) {
      T = thisArg;
    }
    k = 0;
    while( k < len ) {
      var kValue;
      if ( Object.prototype.hasOwnProperty.call(O, k) ) {
        kValue = O[ k ];
        callback.call( T, kValue, k, O );
      }
      k++;
    }
  };
}