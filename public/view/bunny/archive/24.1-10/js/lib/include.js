// Script importer with qeue
// Author: Einar Löve
function include(jsname) {
	// Download javascript
	var s = document.createElement('script');
	s.setAttribute('src',"js/"+ jsname +".js");
	document.body.appendChild(s);

	// Add to qeue
	window.qeue = window.qeue || [];
	qeue.push(jsname);

	// Listener to remove from qeue
	s.onload = function(){
		qeue.filter(function(queued, index){
			if(jsname === queued)
				qeue.splice(index,index+1)
			if(!qeue.length)
				setup()
		})
	}
}