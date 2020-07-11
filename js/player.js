function playVideo(location) {
	if (state.currentPlayer) {
		state.listenedToPlayEvent = false;
		state.currentPlayer.loadVideoById(location.videoId);
	} else {
		state.currentPlayer = new YT.Player('player', {
			videoId: location.videoId,
			events: {
				'onStateChange': onPlayerStateChange
			},
			playerVars: {
				autoplay: 1,
				mute: 1,
				controls: 0
			}
		});
	}
}

function mute() {
	state.currentPlayer.mute();
}

function unmute() {
	state.currentPlayer.unMute();
}

function setSpeed(speed) {
	toggleActiveButton(speed);

	state.currentPlayer.setPlaybackRate(speed);
}

// Youtube Iframe API Events
function onYouTubeIframeAPIReady() {
	const randomLocation = chooseRandomLocation();

	changeLocation(randomLocation.id);
}

function onPlayerStateChange(event) {
	if (event.data == YT.PlayerState.PLAYING && !state.listenedToPlayEvent) {
		changeLoadingState(false);
		state.currentPlayer.seekTo(state.currentLocation.startTime);
		state.listenedToPlayEvent = true;
	}
}