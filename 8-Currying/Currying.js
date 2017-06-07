//we will use closure for bulding currying
//
var add = function(a){
  return function(b){
    return a+b;
  }
}

var Add5ToNumber = add(5);
// all code above is closure 

console.log(Add5ToNumber(1))

"user strict"

var avg = function(...n) {
  let tot = 0;
  for (var i = 0; i < n.length; i++) {
    tot += n[i];
  }
  return tot / n.length;
}

var spiceUp = function(fn, ...n) {

  return function(...m) {
    return fn.apply(this, n.concat(m));
  }

}
var doavg = spiceUp(avg, 1, 2, 3);
console.log(doavg(2, 3, 4));

//======================jsfiddle link
//https://jsfiddle.net/gfLueavx/12/

var sayWhat = function(a){
  return function(b){

    return function(c){
      console.log("saying "+ a+ " to "+b+ " using "+c)
    }
  }
}

console.log(sayWhat("hello")("to friends")("javascripts"));
//https://jsfiddle.net/yvLodqrh/