<p align="center"><img src="https://raw.githubusercontent.com/itspedruu/walk-and-listen/master/assets/banner.png"/></p>

<h1 align="center">Walk & Listen</h1>

This is an website app inspired by [Drive and Listen](https://driveandlisten.herokuapp.com). This is completely open-source and the only third-party service it uses is the [iFrame API by Google](https://developers.google.com/youtube/iframe_api_reference) to control the videos on the background. Please enjoy the app [here](https://pedropinto.tech/walk-and-listen).

# Setup

1. Clone this project
2. Open the `index.html`
3. Great. You have your own Walk and Listen running locally.

If you need to add more locations locally go to the file `js/locations.js` and increment there with all the respective properties: `id`, `name`, `videoId` and `radio`.

# Magic behind this

To begin with, a huge thank you to (...) for providing high quality walking tours on cities from all around the globe. This is where the videos where scrapped from and implemented on the website.

### How did I get the radio urls?

Simply by looking at the source code of a great website, [radiowebsites.org](https://radiowebsites.org/), which provides a lot of radios from around the world and at their page source code they call this api where they get the source url of the radios.

### How did I cancel the play/pause button of youtube?

I just add a simple line of css code to the iframe player

```css
.player {
	pointer-events: none;
}
```

### How did I remove the youtube information such as youtube channel title and etc

Just adding a height of 120% and removing the overflow of the page will remove the top and bottom youtube extra controllers.

* You can see more of the magic by looking at the source code.