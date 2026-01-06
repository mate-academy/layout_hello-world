# super-simple-web-server
Serve static files on localhost with http & https.


## TO INSTALL

`npm install super-simple-web-server`

### or

Clone repo and run `npm install` in the root directory.


## TO RUN

`npm start [</path/to/web/root>] [</path/to/some/middleware>]`

### Default path 
Default path is your current working directory.  Override by passing an optional path to your desired web root directory.

### Default ports
These can be changed by passing through environment variables when starting the server:
`SSWS_HTTP_PORT` = http port (defaults to `3000`)
`SSWS_HTTPS_PORT` = https port (defaults to `3001`)

### Default IP
The default IP `127.0.0.1` which should convieniently map to `localhost`.

Pro tip: Setting `USE_LOCALHOST = false` in `index.js` will instead scan for existing bound IP addresses on your machine via `os.networkInterfaces()`.  The last available will be used.

### Point to some middleware
To add middleware set the third arg to a path that resolves to a file exporting a function like so...

```
module.exports = (app) => {
	app.use(someCoolThingHere);
}
```


## About the self-signed certifictes

Fictious self-signed certs are provided for your development convienience. **They will exprire on June 6 2028.** Obviously -- you don't want to use these for anything other than private testing in your own bathtub.

See `./certs/` for more info...

