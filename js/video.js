var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
	console.log('Auto play is set to ' + video.autoplay);
	console.log('Loop is set to ' + video.loop);
});

document.querySelector("#play").addEventListener("click", function() {
	video = document.querySelector("#player1");
	video.play();
	video = document.querySelector("#player1");
	volume_percent = video.volume * 100
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = volum_percent +"%";
});

document.querySelector("#pause").addEventListener("click", function() {
	video = document.querySelector("#player1");
	video.pause();
	console.log("Pause Video");
});

document.querySelector("#slower").addEventListener("click", function() {
	video = document.querySelector("#player1");
	video.playbackRate *= 0.9;
	console.log("Slow down video");
	console.log("Speed is " +video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video = document.querySelector("#player1");
	video.playbackRate /= 0.9;
	console.log("Speed up video");
	console.log("Speed is " +video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	video = document.querySelector("#player1");
	if (video.currentTime > video.duration - 10) {
		video.currentTime = 0;
	}
	else {
		video.currentTime += 10;
	}
	console.log("Skip Ahead");
	console.log("Video current time is " +video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	video = document.querySelector("#player1");
	if (video.muted == true) {
		video.muted = false;
		console.log(document.querySelector("#mute").innerHTML);
		document.querySelector("#mute").innerHTML = "Mute";
	}
	else {
		video.muted = true;
		console.log(document.querySelector("#mute").innerHTML);
		document.querySelector("#mute").innerHTML = "Unmute";
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	video.volume = document.querySelector("#slider").value / 100;
	document.querySelector("#volume").innerHTML = video.volume  * 100 +"%";
	console.log("The current value is " +video.volume);
	console.log(document.querySelector("#volume"));
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.replace("video", "oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.replace("oldSchool", "video");
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

