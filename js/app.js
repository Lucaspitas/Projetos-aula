if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/js/sw.js')
    .then((reg) => console.log('service work registered', reg))
    .catch((err) => console.log('service work not registered', err));
}