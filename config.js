const config = {};
// The OAuth client ID from the Google Developers console.
config.oAuthClientID =
  "386286934730-gkkrmhbbg97gjsq3ffs53i2tjapmk6di.apps.googleusercontent.com";

// The OAuth client secret from the Google Developers console.
config.oAuthclientSecret = "oVSKOmF2WEDHacYfQ0-cMn39";

// The callback to use for OAuth requests. This is the URL where the app is
// running. For testing and running it locally, use 127.0.0.1.
config.oAuthCallbackUrl = "http://127.0.0.1:8080/auth/google/callback";

// The port where the app should listen for requests.
config.port = 8080;

// The scopes to request. The app requires the photoslibrary.readonly and
// plus.me scopes.
config.scopes = [
  "https://www.googleapis.com/auth/photoslibrary.readonly",
  "profile",
];

module.exports = config;
