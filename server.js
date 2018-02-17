var fs = require('fs');
var PeerServer = require('peer').PeerServer;

var server = new PeerServer({
  port: 55127,
  ssl: {
    key: fs.readFileSync('/home/pushint/peerServer/sslCert/pushvfx_com.key','utf8'),
    cert: fs.readFileSync('/home/pushint/peerServer/sslCert/ssl_bundle.crt','utf8')
  }
});
