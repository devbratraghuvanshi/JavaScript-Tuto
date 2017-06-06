
// if you have a var declared anywhere within function scope it's going to be hoisted on top 
//but only the declaration not the initialisation

(function () {
    console.log(myVal);
    var myVal = "my local Value";
    console.log(myVal);
})();

// this is same as

(function () {
    var myVal;
    console.log(myVal);
})();

//declare the var at top of the scope this is the best practice 
// function are hoisted too 


(function () {
    newFunc();

    function newFunc(params) {
        console.log("this is new func");
    }
})();

//but not function expression
(function () {
    newFunc();
     var newFunc =function() {  console.log("this is new func"); }
})();