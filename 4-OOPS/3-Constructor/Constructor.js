// Actually, Constructor is a concept that comes under Classes. 
// The constructor is used to assign values to the properties of 
// the Class while creating an object using the new operator.

function Person(name, age) {
    //Assigning values through constructor
    this.name = name;
    this.age = age;
    //functions
    this.sayHi = function() {
        return this.name + " Says Hi";
    }
}
//Creating person instance
var p = new Person("Aravind", 23);
console.log(p.sayHi());
//Creating Second person instance
var p = new Person("Jon", 23);
console.log(p.sayHi());