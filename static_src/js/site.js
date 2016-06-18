var soundmanager2 = require('soundmanager2');

console.log("media_url:" + media_url);

var serverURL = media_url.slice(0, media_url.lastIndexOf('/') + 1),
	url = media_url.slice(media_url.lastIndexOf('/') + 1, media_url.indexOf('?'));

console.log('serverURL = ' + serverURL);
console.log('url = ' + url);

soundManager.setup({
  url: '/static/swf/',
  flashVersion: 9,
  preferFlash: true, // prefer 100% HTML5 mode, where both supported
  onready: function() {
    

    var s = soundManager.createSound({
      id: 'rtmpTest',
      serverURL: serverURL,
      url: url,
      onconnect: function(bConnect) {
        // this.connected can also be used
        soundManager._writeDebug(this.id+' connected: '+(bConnect?'true':'false'));
      }
    }).play(); // will result in connection being made

  },
  ontimeout: function() {
    // console.log('SM2 init failed!');
  },
  defaultOptions: {
    // set global default volume for all sound objects
    volume: 33
  }
});

