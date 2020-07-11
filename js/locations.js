LOCATIONS = [ // http://stream1.bestfmbudapest.hu/bestfm_nyiregyhaza.mp3
	{
		"id": 3,
		"name": "Beverly Hills, California",
		"videoId": "ybnQcnWssWg",
		"radio": {
			"url": "http://s18.myradiostream.com:9676/;stream.nsv",
			"name": "NonStopOldies"
		},
		"startTime": 13
	},
	{
		"id": 10,
		"name": "Budapest, Hungary",
		"videoId": "dHbLCfbdUVo",
		"radio": {
			"url": "http://stream1.bestfmbudapest.hu/bestfm_nyiregyhaza.mp3",
			"name": "103.9 Best FM"
		},
		"startTime": 29
	},
	{
		"id": 7,
		"name": "Dubai, United Arab Emirates",
		"videoId": "JXe-1dIlCw4",
		"radio": {
			"url": "https://au1.fastcast4u.com/proxy/dzcwbfih_relay?mp=/1",
			"name": "1062 BIG FM"
		},
		"startTime": 19
	},
	{
		"id": 9,
		"name": "Disney Magic Kingdom, Florida",
		"videoId": "M-3cS51G6oQ",
		"radio": {
			"url": "https://playerservices.streamtheworld.com/api/livestream-redirect/977_HITSAAC_SC",
			"name": ".977 Today's Hits"
		},
		"startTime": 43
	},
	{
		"id": 4,
		"name": "Florence, Italy",
		"videoId": "AqFLqzHAgzA",
		"radio": {
			"url": "https://ice08.fluidstream.net/ibiza.aac",
			"name": "Radio Ibiza"
		},
		"startTime": 91
	},
	{
		"id": 6,
		"name": "Ibiza, Spain",
		"videoId": "axqSGXU5qIw",
		"radio": {
			"url": "https://cadena100-cope-rrcast.flumotion.com/cope/cadena100-low.mp3",
			"name": "Cadena 100"
		},
		"startTime": 18
	},
	{
		"id": 5,
		"name": "Lisbon, Portugal",
		"videoId": "m0K29dzyLCc",
		"radio": {
			"url": "https://20863.live.streamtheworld.com/RFM_SC",
			"name": "RFM"
		},
		"startTime": 31
	},
	{
		"id": 1,
		"name": "London, England",
		"videoId": "MGMqLGvtNpY",
		"radio": {
			"url": "http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio1_mf_p",
			"name": "BBC 1"
		},
		"startTime": 31
	},
	{
		"id": 11,
		"name": "Montreal, Canada",
		"videoId": "poiKJGuLDNo",
		"radio": {
			"url": "https://rogers-hls.leanstream.co/rogers/tor590.stream/icy",
			"name": "The FAN 590"
		},
		"startTime": 48
	},
	{
		"id": 8,
		"name": "Nuremberg, Germany",
		"videoId": "P17hbhKcz7o",
		"radio": {
			"url": "https://addrad.io/4WRMMN",
			"name": "Eins Live"
		},
		"startTime": 27
	},
	{
		"id": 2,
		"name": "Rome, Italy",
		"videoId": "EsFheWkimsU",
		"radio": {
			"url": "https://icstream.rds.radio/rds",
			"name": "RDS"
		},
		"startTime": 55
	}
]

function chooseRandomLocation() {
	const availableLocations = LOCATIONS.filter(({id}) => state.currentLocation ? state.currentLocation.id !== id : true);
	
	return availableLocations[Math.floor(Math.random() * availableLocations.length)];
}

function changeLocation(locationId) {
	if (state.currentLocation && locationId == state.currentLocation.id)
		return;

	changeLoadingState(true);

	const location = LOCATIONS.find(location => location.id == locationId);

	state.currentLocation = location;

	changeLocationText(location.name);
	changeVideoSource(location.videoId);
	changeRadio(location.radio);
	toggleActiveClassOnLocation(location.id);
	playVideo(location);
}
