




// 3) Constructor
//======================================

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
var p = new Person("aravind", 23);
alert(p.sayHi());
//Creating Second person instance
var p = new Person("jon", 23);
alert(p.sayHi());

//4) Inheritance
//======================================

function Student() {}
//1)Prototype based Inhertance
Student.prototype = new Person();
//2)Inhertance throught Object.create
Student.prototype = Object.create(Person);
var stobj = new Student();
alert(stobj.sayHi());