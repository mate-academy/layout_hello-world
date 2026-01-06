const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const util = require('util');
const os = require('os');

const USE_LOCALHOST = true;
const HTTP_PORT = process.env.SSWS_HTTP_PORT || 3000;
const HTTPS_PORT = process.env.SSWS_HTTPS_PORT || 3001;
const KEY_PATH = 'certs/key.pem';
const CERT_PATH = 'certs/cert.pem';

const LOCALHOST_IP = '127.0.0.1';
const ROOT_DIR = path.resolve(process.argv[2] || './');

const app = express();
const ip_addresses = getAddresses();

if (!ip_addresses || ip_addresses.length < 1) {
  console.log("Could not resolve local IP address.");
  return 0;
}

var NODE_HOST = USE_LOCALHOST ? LOCALHOST_IP : ip_addresses[ip_addresses.length-1];

//Runs every time a request is recieved
function logger(req, res, next) {
  console.log('Request from: ', req.path); //Log the request to the console
  next(); //Run the next handler (IMPORTANT, otherwise your page won't be served)
}

/**
 * To add middleware set the third arg to a path that resolves to a file exporting a function like so...
 * module.exports = (app) => { app.use(someCoolThingHere);}
 */
const MIDDLEWARE_PATH = path.resolve(process.argv[3] || false);
if (MIDDLEWARE_PATH) {
  try {
      var initMiddleware = require(MIDDLEWARE_PATH);
      initMiddleware(app);
  } catch (err) {
      console.log('Error initalizing middleware. ', err);
  }
} else {
      console.log('No middleware found.');
}

app.use(logger);
app.use(express.static(ROOT_DIR));

console.log('\n---------------');
console.log('Starting static hosts with root: ' + ROOT_DIR);
console.log('Press Ctrl + C to exit.');
console.log('---------------');

app.listen(HTTP_PORT, (err) => {
  if (err) {
    console.log('Http method retrurned an error when trying to start.', err);
  } else {
    console.log('Listening on: http://' + NODE_HOST + ':' + HTTP_PORT + '');
  }
});

const server = https.createServer({
  key: fs.readFileSync(path.resolve(__dirname, KEY_PATH)),
  cert: fs.readFileSync(path.resolve(__dirname, CERT_PATH))
}, app);
server.listen(HTTPS_PORT, NODE_HOST, (err) => {
  if (err) {
    console.log('Https method retrurned an error when trying to start.', err);
  } else {
    console.log('Listening on: https://' + NODE_HOST + ':' + HTTPS_PORT + '');
  }
});

//=======
function getAddresses() {
  var
    network = os.networkInterfaces(),
    interfaces = [],
    addresses = [];

  for (prop in network) {
    interfaces.push(network[prop]);
  }

  interfaces.forEach(function(net) {
    net.forEach(function(address) {
      if (address.family == 'IPv4' && !address.internal) addresses.push(address.address);
    });
  });

  return addresses;
}
