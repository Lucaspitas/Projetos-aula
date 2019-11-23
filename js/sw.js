if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
  .then(function(registration) {
    console.log('Registration successful, scope is:', registration.scope);
  })
  .catch(function(error) {
    console.log('Service worker registration failed, error:', error);
  });
}
navigator.serviceWorker.register('/service-worker.js', {
  scope: '/app/'
});
navigator.serviceWorker.register('/app/service-worker.js', {
  scope: '/app'
});
location ~* (service-worker\.js)$ {
  # tells browsers the service worker scope
  add_header 'Service-Worker-Allowed' '/app';
}
// Listen for install event, set callback
self.addEventListener('install', function(event) {
    // Perform some task
});
self.addEventListener('activate', function(event) {
  // Perform some task
});
