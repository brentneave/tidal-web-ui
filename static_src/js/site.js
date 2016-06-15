var soundmanager2 = require('soundmanager2');

console.log("media_url:" + media_url);

var serverURL = media_url.slice(0, media_url.lastIndexOf('/')),
	url = media_url.slice(media_url.lastIndexOf('/'))

alert('hi!')

soundManager.setup({
  url: '/path/to/swfs/',
  flashVersion: 9,
  preferFlash: false, // prefer 100% HTML5 mode, where both supported
  onready: function() {
    // console.log('SM2 ready!');
  },
  ontimeout: function() {
    // console.log('SM2 init failed!');
  },
  defaultOptions: {
    // set global default volume for all sound objects
    volume: 33
  }
});