
//help you postpone and reduce the rate of some execution.
//You can visually see the difference here
// http://demo.nimius.net/debounce_throttle/


//Throttle: the original function be called at most once per specified period.


const throttle = (func, limit) => {
  let inThrottle
  return function() {
    if (!inThrottle) {
      func();
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

function logTime() {
  throttle(()=>{
    console.log(new Date().toLocaleTimeString());
  },2000);
  
}

var callFunOnEverySec  = function() {
  logTime();
  //console.log(new Date().toLocaleTimeString());
}

  var i = 0;
  var interval =  setInterval(()=>{
    callFunOnEverySec();
   i++;
   if (i==10) {
     clearInterval(interval);
   }
 },1000);



 const arr = [10, 12, 15, 21];
 for (var i = 0; i < arr.length; i++) {
   setTimeout(function() {
     console.log('Index: ' + i + ', element: ' + arr[i]);
   }, 3000);
 }