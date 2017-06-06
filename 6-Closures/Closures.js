

// JavaScript variables can belong to the local or global scope.
// Global variables can be made local (private) with closures.


// a is a global variable.
//Global variables live as long as your application (your window / your web page) lives.
var a = 4;
function myFunction() {
    return a * a;
}


// a is a local variable.
//Local variables have short lives. They are created when the function is invoked, 
//and deleted when the function is finished.
function myFunction() {
    var a = 4;
    return a * a;
}

//A Counter Dilemma
//Suppose you want to use a variable for counting something, 
//and you want this counter to be available to all functions.
//You could use a global variable, and a function to increase the counter:


var counter = 0;

function add() {
    counter += 1;
    console.log(counter);
}
add();
add();
add();
// the counter is now equal to 3
//The counter should only be changed by the add() function.
// The problem is, that any script on the page can change the counter, without calling add().
counter = 0;
add();

//  so If I declare the counter inside the function, nobody will be able to change it without calling add():

function add() {
    var counter = 0;
    counter += 1;
     console.log(counter);
}

add();
add();
add();

// the counter should now be 3, but it does not work !
//now the problem is Every time I call the add() function, the counter is set to 1.

// JavaScript Nested Functions

function add() {
    var counter = 0;
    function plus() {counter += 1; console.log(counter);}
    plus();    
    return counter; 
}
// This could have solved the counter dilemma, if we could reach the plus() function from the outside.
// We also need to find a way to execute counter = 0 only once.

// JavaScript Closures
// =======================================
var add = (function () {
    var counter = 0;
    return function () { counter += 1; console.log(counter)}
})();

add();
add();
add();
// the counter is now 3
// https://jsfiddle.net/c241pvb0/

// =====================================

var param = 5;
var AddTo = function(param) { // with param passed its not closer with param not passed its closer
    var local = 5;
    return param + local;
}
console.log(AddTo(5));
console.dir(AddTo);
// https://jsfiddle.net/vhcLj080/



var getFunToAdd5 =function() {
     var five = 5;
     var add = function(passed){  return five +passed; };
     return add
}
var add5 = getFunToAdd5();

console.log(add5(10));
console.log(add5(20));
console.log(add5(30));

// https://jsfiddle.net/0ntbncd1/1/

var getFunToAdd =function(passed) {
     var five = passed;
     var add = function(passed){  return five +passed; };
     return add
}
var add5 = getFunToAdd(5);
var add10 = getFunToAdd(10);

console.log(add5(10));
console.log(add5(20));
console.log(add5(30));

console.log(add10(10));
console.log(add10(20));
console.log(add10(30));

// https://jsfiddle.net/dqz495x9/






//in short closers are nothing but functions with preserved data

var a = 10;
function Add() {
    var a =5;
    console.log(a+a);
}