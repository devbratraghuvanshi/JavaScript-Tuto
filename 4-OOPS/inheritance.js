
// First of all, we can create ClassA easily. Because there are no explicit classes, 
// we can define a set of behavior (A class so…) by just creating a function like this

var ClassA = function() {
    this.name = "class A";
}

ClassA.prototype.print = function() {
    console.log(this.name);
}

var a = new ClassA();

a.print();



// to create “inheritance” between classes. 
// we just have to do one single thing: clone the prototype
// child.prototype = Object.create(parent.prototype);

var inheritsFrom = function (child, parent) {
    child.prototype = Object.create(parent.prototype);
    child.prototype = child;

};

var ClassA = function() {
    this.name = "class A";
}
ClassA.prototype.print = function() {
    console.log(this.name);
}

var ClassB = function() {
    this.name = "class B";
    this.surname = "I'm the child";
}

inheritsFrom(ClassB, ClassA);

var b = new ClassB();
b.print();

console.log(b.__proto__);

// ClassB.prototype.print = function() {
//     ClassA.prototype.print.call(this);
//     console.log(this.surname);
// }
// var b = new ClassB();
// b.print();