function isPlaying() {
	return !document.querySelector('audio').paused;
}

function play() {
	return document.querySelector('audio').play();
}

function pause() {
	return document.querySelector('audio').pause();
}

function setVolume(volume) {
	return document.querySelector('audio').volume = volume / 100;
}

function changeRadio(radio) {
	const audio = document.querySelector('audio');
	const radioHeaderElement = document.querySelector('.radio-header');
	const playPauseButton = document.querySelector('.radio-play-pause i');

	audio.src = radio.url;
	radioHeaderElement.innerHTML = `<p>${radio.name} <i class="fa fa-spinner fa-spin"></i></p>`;

	if (playPauseButton.classList.contains('fa-play')) {
		playPauseButton.classList.remove('fa-play');
		playPauseButton.classList.add('fa-pause');
	}
}

function removeRadioLoading() {
	const spinnerElement = document.querySelector('.radio-header i')

	return spinnerElement ? spinnerElement.remove() : null;
}

function togglePlayPauseButton() {
	const playPauseButton = document.querySelector('.radio-play-pause i');

	playPauseButton.classList.remove(isPlaying() ? 'fa-pause' : 'fa-play');
	playPauseButton.classList.add(isPlaying() ? 'fa-play' : 'fa-pause');
}

function togglePlayPause() {
	togglePlayPauseButton();

	if (isPlaying()) {
		pause();
	} else {
		play();
	}
}