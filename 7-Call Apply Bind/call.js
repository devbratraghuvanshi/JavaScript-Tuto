
var obj ={num:2};

var AddOneNumber = function(a){
  return this.num +a; //this.num in not in this function or abject
}
var sum1 = AddOneNumber.call(obj,3);
console.log(sum1)


var AddTwoNumber = function(a,b){
  return this.num +a +b; //this.num in not in this function or abject
}
var sum2 = AddTwoNumber.call(obj,3,5);// pass al the agr after object
console.log(sum2)

//call will call "AddOneNumber" function as if it is function of ojb object