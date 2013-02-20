// Script importer with qeue
// Author: Einar Löve
function include(files) {

	files.forEach(function(file){
		// Download javascript
		var s = document.createElement('script');
		s.setAttribute('src',"js/"+ file +".js");
		document.body.appendChild(s);

		// Add to qeue
		window.qeue = window.qeue || [];
		qeue.push(file);

		// Listener to remove from qeue
		s.onload = function(){
			qeue.filter(function(queued, index){
				if(file === queued)
					qeue.splice(index,index+1)
				if(!qeue.length)
					setup()
			})
		}
	})
}