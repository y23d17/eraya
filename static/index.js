// www/index.js
document.addEventListener('deviceready', function() {
  const webServer = cordova.plugins.ionicWebserver;
  webServer.start(8080, 'build/www', function() {
    console.log('Server is running');
  });
});