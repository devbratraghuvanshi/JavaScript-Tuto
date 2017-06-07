
var obj ={num:2};


var AddOneNumber = function(a,b,c){
  return this.num +a +b+c;
}

var sum1 = AddOneNumber.call(obj,3,5,10);
console.log(sum1)

var arg = [3,5,10];
var sum2 = AddOneNumber.apply(obj,arg); 
console.log(sum2)

var bound = AddOneNumber.bind(obj);// it will return function with object bounded to it
sum3 = bound(3,5,10) // need to call bound function with expected parameter 
console.log(sum3) ;