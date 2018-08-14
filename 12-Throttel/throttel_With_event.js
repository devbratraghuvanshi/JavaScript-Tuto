
var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('logDateTime', throttle(logDateTime,5000));
function logDateTime() {
    console.log(new Date().toLocaleTimeString());
}
//Fire the 'scream' event:
var i = 0;
var interval = setInterval(() => {
    eventEmitter.emit('logDateTime');
    i++;
    if (i == 100) {
        clearInterval(interval);
    }
}, 1000);

function throttle(func, limit) {
    let inThrottle
    return function () {
        if (!inThrottle) {
            func();
            inThrottle = true
            setTimeout(() => inThrottle = false, limit)
        }
    }
}

function logDateTime() {
    console.log(new Date().toLocaleTimeString());
}
