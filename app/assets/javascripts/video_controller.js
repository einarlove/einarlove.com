document.addEventListener("DOMContentLoaded", function() {
	videoList = document.querySelectorAll("video");
	for(var i=0; i<videoList.length;i++){
		var video     = videoList[i],
				container = video.parentNode,
				timeBar   = container.querySelectorAll(".time_bar")[0],
				repeatCheck, videoIsReady;

		container.addEventListener("click", function(){videoClick()});
		video.addEventListener("ended", function(){videoEnd()});
		video.addEventListener("timeupdate", function(){updateTimer()});
		video.addEventListener("canplaythrough", function(){videoReady()});

		function videoClick() {
			if(video.paused){
				video.play();
				if(videoIsReady){
					document.body.classList.add("playing");
				}
				else{
					video.pause();
					container.classList.add("buffering");
					repeatCheck = setInterval(checkLoading, 1000);
				}
			}
			else{
				document.body.classList.remove("playing");
				video.pause();
				video.currentTime = 0;
			}
		};
		function checkLoading(){
			if(videoIsReady){
				container.classList.remove("buffering");
				document.body.classList.add("playing");
				clearInterval(repeatCheck);
				video.play();
			}
		};
		function videoReady(){
			videoIsReady = true;
		};
		function updateTimer(){
			timeBarPercent = 100 * video.currentTime / video.duration;
			timeBar.style.width = timeBarPercent + "%";
		};
		function videoEnd() {
			document.body.classList.remove("playing");
			container.classList.add("finished");
		};
	}
});

// Add classlist support for Internet Explorer
if(navigator.userAgent.indexOf("MSIE") > -1){
	script = document.createElement("script");
	script.type = "text/javascript";
	script.src = "/assets/classlist_shim.js";
	document.getElementsByTagName("head")[0].appendChild(script);
};
