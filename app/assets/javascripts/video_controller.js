document.addEventListener("DOMContentLoaded", function() {
	video_list = document.querySelectorAll("video");
	for(var i=0; i<video_list.length;i++){
		video = video_list[i];
		container = video.parentNode
		container.addEventListener("click", function() {
			document.body.classList.toggle("playing");
			if(video.paused)
				video.play();
			else 
				video.pause();
				video.currentTime = 0;
		});
		video.addEventListener("ended", function() {
			document.body.classList.remove("playing");
			container.classList.add("finished");
		});
	}
});