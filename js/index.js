// THIS FILE HANDLES ALL INPUT AND DOM MANIPULATIONS

function changeLoadingState(show) {
	const loadingElement = document.querySelector('.loading');

	loadingElement.style.display = show ? 'flex' : 'none';
}

function changeLocationText(locationName) {
	const locationElement = document.querySelector('.location');

	locationElement.innerHTML = locationName;
}

function toggleActiveClassOnLocation(locationId) {
	const locationElement = document.querySelector(`[data-id="${locationId}"]`);
	const activeLocationElement = document.querySelector(`.cities-list li.active`);

	if (activeLocationElement)
		activeLocationElement.classList.remove('active');

	locationElement.classList.add('active');
}

function updateCitiesList() {
	const data = LOCATIONS.map(({name, id}) => `<li data-id="${id}" onclick="changeLocation(${id})">${name}</li>`).join('\n');
	const citiesList = document.querySelector('.cities-list ul');

	citiesList.innerHTML = data;
}

function toggleActiveButton(speed) {
	const activeButton = document.querySelector('button.active');
	const currentButton = document.querySelector(`[data-speed="${speed}"]`);

	activeButton.classList.remove('active');
	currentButton.classList.add('active');
}

function toggleNoise(element) {
	const isOn = element.innerHTML == 'ON';

	element.innerHTML = isOn ? 'OFF' : 'ON';
	element.style.background = isOn ? 'none' : '#eee';
	element.style.color = isOn ? '#eee' : 'black';

	return isOn ? mute() : unmute();
}

function toggleMenu() {
	const menuElement = document.querySelector('.menu');
	const isHidden = menuElement.style.display == 'none';
	const icon = document.querySelector('.show-hide i');
	
	icon.classList.remove(isHidden ? 'fa-eye' : 'fa-eye-slash');
	icon.classList.add(isHidden ? 'fa-eye-slash' : 'fa-eye');

	menuElement.style.display = isHidden ? 'flex' : 'none';
}

function changeVideoSource(videoId) {
	const link = document.querySelector('.video-source a');

	link.href = `https://youtube.com/watch?v=${videoId}`;
}

updateCitiesList();
setVolume(50);