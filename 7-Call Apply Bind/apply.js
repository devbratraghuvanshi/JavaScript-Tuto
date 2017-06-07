
var obj ={num:2};


var AddOneNumber = function(a,b,c){
  return this.num +a +b+c; //this.num in not in this function or abject
}

var sum1 = AddOneNumber.call(obj,3,5,10);
console.log(sum1)

var arg = [3,5,10];
var sum2 = AddOneNumber.apply(obj,arg); // we are passing arg as array this is the difference b/w call and apply
console.log(sum2) 
