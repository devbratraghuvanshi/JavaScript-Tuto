

var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('logDateTime', throttle(logDateTime, 100));
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


var N = 100;  //var arr = Array.apply(null, {length: N}).map((e,i)=>i+1);//var arr  = Array.from(Array(N).keys());
var arr  = Array(N).fill().map((e,i)=>i+1)
//console.log(arr)
for (var index = 0; index < arr.length; index++) {

    if ((index)*3 > arr.length) {
        break;
    }
    console.log(index);

}

function print(num) {

    if (num%15 == 0) {
        console.log(num + "/15");
    }else if (num%5 == 0) {
        console.log(num + "/5");
    }else if (num%3 == 0) {
        console.log(num + "/3");
    }
}