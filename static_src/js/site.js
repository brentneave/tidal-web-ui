var flac = require('flac.js'),
    av = require('av');


console.log('media_url: ' + media_url);


var player = new av.Player.fromURL(media_url);
player.play();