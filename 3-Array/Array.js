//JavaScript Arrays
//JavaScript arrays are used to store multiple values in a single variable.
//Creating an Array 
//var array_name = [item1, item2, ...];   

var cars = ["Saab", "Volvo", "BMW"];

//Using the JavaScript Keyword new
var cars = new Array("Saab", "Volvo", "BMW");


//Access the Elements of an Array
// You refer to an array element by referring to the index number.
// This statement accesses the value of the first element in cars:
var cars = new Array("Saab", "Volvo", "BMW");
var name = cars[0];
console.log(name)

//Access the Full Array
var cars = ["Saab", "Volvo", "BMW"];
console.log(cars)

//==================
// Arrays are Objects
// Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.
// But, JavaScript arrays are best described as arrays.
// Arrays use numbers to access its "elements". In this example, cars[0] returns Saab:

// Array Elements Can Be Objects
//JavaScript variables can be objects. Arrays are special kinds of objects.
// Because of this, you can have variables of different types in the same Array.
var cars = new Array("Saab", "Volvo", "BMW");
var myArray =[];
myArray[0] = Date.now;
myArray[1] =  function myFunction(){};
myArray[2] = cars;
console.log(myArray)

console.log(myArray[0]())