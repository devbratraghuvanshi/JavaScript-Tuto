
//What will the code below output to the console and why?
(function(){
    var a = b = 3;
  })();
  
  console.log("a defined? " + (typeof a !== 'undefined'));
  console.log("b defined? " + (typeof b !== 'undefined'));


  //What will the code below output to the console and why?
  var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();

//Consider the two functions below. Will they both return the same thing? Why or why not?
function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}

//What is NaN? What is its type? How can you reliably test if a value is equal to NaN?
//The NaN property represents a value that is “not a number”.
//For one thing, although NaN means “not a number”, its type is, believe it or not, Number:
console.log(typeof NaN === "number");  // logs "true"

//Additionally, NaN compared to anything – even itself! – is false:
console.log(NaN === NaN);  // logs "false"

//A semi-reliable way to test whether a number is equal to NaN is with the built-in function isNaN(), 
//but even using isNaN() is an imperfect solution.
//ES6 offers a new Number.isNaN() function, which is a different and more reliable than the old global isNaN() function.


//What will the code below output? Explain your answer.
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);

//A typical solution is to compare the absolute difference between two numbers with the special constant Number.EPSILON:
function areTheNumbersAlmostEqual(num1, num2) {
	return Math.abs( num1 - num2 ) < Number.EPSILON;
}
console.log(areTheNumbersAlmostEqual(0.1 + 0.2, 0.3));


//Discuss possible ways to write a function isInteger(x) that determines if x is an integer.

//This may sound trivial and, in fact, it is trivial with ECMAscript 6 which introduces a new Number.isInteger() function for precisely this purpose. 
//However, prior to ECMAScript 6, this is a bit more complicated, since no equivalent of the Number.isInteger() method is provided.

//The issue is that, in the ECMAScript specification, integers only exist conceptually; i.e., numeric values are always stored as floating point values.

//With that in mind, the simplest and cleanest pre-ECMAScript-6 solution (which is also sufficiently robust to return false even if a non-numeric value such as a string or null is passed to the function) would be the following use of the bitwise XOR operator:
function isInteger(x) { return (x ^ 0) === x; } 

//The following solution would also work, although not as elegant as the one above:
function isInteger(x) { return Math.round(x) === x; }
//Note that Math.ceil() or Math.floor() could be used equally well (instead of Math.round()) in the above implementation.

//Or alternatively:
function isInteger(x) { return (typeof x === 'number') && (x % 1 === 0); }

//One fairly common incorrect solution is the following:

function isInteger(x) { return parseInt(x, 10) === x; }

// While this parseInt-based approach will work well for many values of x, once x becomes quite large, 
// it will fail to work properly. The problem is that parseInt() coerces its first parameter to a string 
// before parsing digits. Therefore, once the number becomes sufficiently large, 
// its string representation will be presented in exponential form (e.g., 1e+21). 
// Accordingly, parseInt() will then try to parse 1e+21, but will stop parsing when it reaches the e character 
// and will therefore return a value of 1. Observe:

console.log(String(1000000000000000000000))  //'1e+21'
console.log(parseInt(1000000000000000000000, 10)) //1
console.log(parseInt(1000000000000000000000, 10) === 1000000000000000000000) //false

//Write a simple function (less than 160 characters) that returns a boolean indicating
// whether or not a string is a palindrome.

//core code //str == str.split('').reverse().join('')
function isPalindrome(str) {
    str = str.replace(/\W/g, '').toLowerCase();
    return (str == str.split('').reverse().join(''));
  }
  console.log(isPalindrome("asdasdasdasdasd"));
  console.log(isPalindrome("asddsa"));


  //Write a sum method which will work properly when invoked using either syntax below.
  //console.log(sum(2,3));   // Outputs 5
 //console.log(sum(2)(3));  // Outputs 5

 function sum(x) {
    if (arguments.length == 2) {
      return arguments[0] + arguments[1];
    } else {
      return function(y) { return x + y; };
    }
  }

  function sum2(x, y) {
    if (y !== undefined) {
      return x + y;
    } else {
      return function(y) { return x + y; };
    }
  }

  //What would the following lines of code output to the console

console.log("0 || 1 = "+(0 || 1));
console.log("1 || 2 = "+(1 || 2));
console.log("0 && 1 = "+(0 && 1));
console.log("1 && 2 = "+(1 && 2));

// The code will output the following four lines:

// 0 || 1 = 1
// 1 || 2 = 1
// 0 && 1 = 0
// 1 && 2 = 2
// In JavaScript, both || and && are logical operators that return the first fully-determined “logical value” when evaluated from left to right.
// The or (||) operator. In an expression of the form X||Y, X is first evaluated and interpreted as a boolean value. If this boolean value is true, then true (1) is returned and Y is not evaluated, since the “or” condition has already been satisfied. If this boolean value is “false”, though, we still don’t know if X||Y is true or false until we evaluate Y, and interpret it as a boolean value as well.
// Accordingly, 0 || 1 evaluates to true (1), as does 1 || 2.
// The and (&&) operator. In an expression of the form X&&Y, X is first evaluated and interpreted as a boolean value. If this boolean value is false, then false (0) is returned and Y is not evaluated, since the “and” condition has already failed. If this boolean value is “true”, though, we still don’t know if X&&Y is true or false until we evaluate Y, and interpret it as a boolean value as well.
// However, the interesting thing with the && operator is that when an expression is evaluated as “true”, then the expression itself is returned. This is fine, since it counts as “true” in logical expressions, but also can be used to return that value when you care to do so. This explains why, somewhat surprisingly, 1 && 2 returns 2 (whereas you might it expect it to return true or 1).

//What is the output out of the following code? Explain your answer.
var a={},
    b={key:'b'},
    c={key:'c'};

a[b]=123;
a[c]=456;

console.log(a[b]);

//The output of this code will be 456 (not 123).
//The reason for this is as follows: When setting an object property, JavaScript will implicitly stringify the parameter value. In this case, since b and c are both objects, they will both be converted to "[object Object]". As a result, a[b] anda[c] are both equivalent to a["[object Object]"] and can be used interchangeably. Therefore, setting or referencing a[c] is precisely the same as setting or referencing a[b].

//What will the following code output to the console:
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
//The code will output the value of 10 factorial (i.e., 10!, or 3,628,800).