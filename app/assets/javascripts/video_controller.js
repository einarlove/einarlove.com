document.addEventListener("DOMContentLoaded", function() {
	video_list = document.querySelectorAll("video");
	for(var i=0; i<video_list.length;i++){
		var video = video_list[i],
				container = video.parentNode,
				timeBar = container.querySelectorAll(".time_bar")[0];
		container.addEventListener("click", function() {
			if(navigator.userAgent.indexOf("MSIE") > 1){
				document.body.className = document.body.className=="playing" ? null : "playing";
				console.log(document.body.className);
			}
			else
				document.body.classList.toggle("playing");
			if(video.paused)
				video.play();
			else{
				video.pause();
				video.currentTime = 0;
			}
			if(video.buffered.length == 0 && document.body.className=="playing"){
				setTimeout('document.body.classList.add("buffering")', 1000);
			}
		});
		video.addEventListener("ended", function() {
			document.body.classList.remove("playing");
			container.classList.add("finished");
		});
		video.addEventListener("timeupdate", function(){
			timeBarPercent = 100 * video.currentTime / video.duration;
			timeBar.style.width = timeBarPercent + "%";
			document.body.classList.remove("buffering");
		});
	}
});