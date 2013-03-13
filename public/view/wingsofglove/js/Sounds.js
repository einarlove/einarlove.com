function Sounds() {
	"use strict";

	var o = {};

	function addSound(name, volume) {
		o[name] = new Audio("sounds/" + name + ".mp3");
		o[name].loop = true;
		o[name].volume = volume || 0;
		o[name].play();
	}

	addSound("music");
	addSound("forest");
	addSound("wind");

	o.setSoundTransition = function(transition) {
		//0 == low, 1 == high
		var volume = transition;
		if(volume >= 1) volume = 1;

		o.wind.volume = volume;
		o.forest.volume = 1 - volume;
	}

	return o;
}