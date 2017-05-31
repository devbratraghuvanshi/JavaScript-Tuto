// Inheritance is a process of getting the properties and function of one class to other class.

// Person class
function Person(name, age) {
    //Assigning values through constructor
    this.name = name;
    this.age = age;
    //functions
    this.sayHi = function() {
        return this.name + " Says Hi";
    }
}

// Student Class
function Student() {}
//1)Prototype based Inhertance
Student.prototype = new Person("Devbrat", 28);
//2)Inhertance throught Object.create
Student.prototype = Object.create(Person);
var sobj = new Student();
console.log(sobj.sayHi());

//==================================================

// Person class
function Person(name, age) {
    //Assigning values through constructor
    this.name = name;
    this.age = age;
    //functions
    this.sayHi = function() {
        return this.name + " Says Hi";
    }
}

// Student Class
function Student() {}
//1)Prototype based Inhertance
Student.prototype = new Person("Devbrat", 28);
//2)Inhertance throught Object.create
// Student.prototype = Object.create(Person);
var stobj = new Student();
console.log(stobj.sayHi());


https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype

// ==================

function Person() {
  this.canTalk = true;
};

Person.prototype.greet = function() {
  if (this.canTalk) {
    console.log('Hi, I am ' + this.name);
  }
};

function Employee(name, title) {
  Person.call(this);
  this.name = name;
  this.title = title;
};

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.greet = function() {
  if (this.canTalk) {
    console.log('Hi, I am ' + this.name + ', the ' + this.title);
  }
};