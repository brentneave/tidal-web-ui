var soundmanager2 = require(soundmanager2);

module.exports = function() {
console.log("media_url:" + media_url);

var serverURL = media_url.slice(0, media_url.lastIndexOf('/')),
	url = media_url.slice(media_url.lastIndexOf('/'))

soundmanager2.createSound({
  id: 'mySound',
  serverURL: serverURL,
  url: url
}).play();

}