// The word Polymorphism in OOPs means having more than one form. In JavaScript an Object, Property, 
// Method can have more than one form

function Person() {
    this.sayHI = function() {}
};
//This will create Student Class
function Student() {};
Student.prototype = new Person();
Student.prototype.sayHI = function(l) {
        return "Hi! I am a Student";
    }
    //This will create Teacher Object
function Teacher() {};
Teacher.prototype = new Person();
Teacher.prototype.sayHI = function() {
    return "Hi! I am a Teacher";
}
var sObj = new Student();
var tObj = new Teacher();
//This will check if the student
//object is instance of Person or not
//if not it won't execute our alert code.
if (sObj instanceof Person) {
    console.log("Hurry! JavaScript supports OOps");
}

console.log(sObj.sayHI());
console.log(tObj.sayHI());