
//The JavaScript Math object allows you to perform mathematical tasks on numbers.
var pi = Math.PI;    
console.log(pi);

//Math.round()
//Math.round(x) returns the value of x rounded to its nearest integer:
console.log(Math.round(4.7));    // returns 5
console.log(Math.round(4.4));    // returns 4

//Math.pow()
//Math.pow(x, y) returns the value of x to the power of y:
console.log(Math.pow(8, 2));      // returns 64

//Math.sqrt()
//Math.sqrt(x) returns the square root of x:
console.log(Math.sqrt(64));      // returns 8

//Math.abs()
//Math.abs(x) returns the absolute (positive) value of x:
console.log(Math.abs(-4.7));     // returns 4.7

//Math.ceil()
//Math.ceil(x) returns the value of x rounded up to its nearest integer:
console.log(Math.ceil(4.4));     // returns 5

// Math.floor()
// Math.floor(x) returns the value of x rounded down to its nearest integer:
console.log(Math.floor(4.7));    // returns 4

// Math.sin()
// Math.sin(x) returns the sine (a value between -1 and 1) of the angle x (given in radians).
// If you want to use degrees instead of radians, you have to convert degrees to radians:
// Angle in radians = Angle in degrees x PI / 180.
var sin =  Math.sin(90 * Math.PI / 180);    
console.log(sin) // returns 1 (the sine of 90 degrees)

// Math.cos()
// Math.cos(x) returns the cosine (a value between -1 and 1) of the angle x (given in radians).
// If you want to use degrees instead of radians, you have to convert degrees to radians:
// Angle in radians = Angle in degrees x PI / 180.

var cos = Math.cos(0 * Math.PI / 180);    
console.log(cos) // returns 1 (the cos of 0 degrees)

// Math.min() and Math.max()
// Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:
var min = Math.min(0, 150, 30, 20, -8, -200); 
console.log(min) // returns -200

var max = Math.max(0, 150, 30, 20, -8, -200); 
console.log(max) // returns 150

// Math.random()
// Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):
var ran = Math.random();     
console.log(ran) // returns a random number

// Math Properties (Constants)
// JavaScript provides 8 mathematical constants that can be accessed with the Math object:
Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E

console.log(Math.LOG10E)

// Math Constructor
// Unlike other global objects, the Math object has no constructor. Methods and properties are static.
// All methods and properties (constants) can be used without creating a Math object first.