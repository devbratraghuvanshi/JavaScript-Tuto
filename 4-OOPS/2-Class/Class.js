
// There are no classes in JavaScript as it is Prototype based language. 
// But we can simulate the class concept using JavaScript functions.

function Person(name,age) {

    //Properties
    this.name = name;
    this.age = age;
    //functions
    this.sayHi = function() {
        return this.name + " Says Hi";
    }
}
//Creating person instance
var p = new Person("Dev",29);
console.log(p.sayHi());