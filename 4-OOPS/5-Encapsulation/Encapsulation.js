// Before going on to Encapsulation and Abstraction 
// first we need to know what Data Hiding is and how can we achieve it in JavaScript. 
// Date hiding is protecting the data from accessing it outside the scope. 
// For example, In Person class, we have Date of Birth (dob) properties 
// which should be protected. 

// Wrapping up of public and private data into a single data unit is called Encapsulation.


function Person() {
    //this is private variable
    var dob = "8 June 2012";
    //public properties and functions
    return {
        age: "23",
        name: "aravind",
        getDob: function() {
            return dob;
        }
    }
}
var pobj = Person();
//this will get undefined
//because it is private to Person
console.log(pobj.dob);
//Will get dob value we using public
//funtion to get private data
console.log(pobj.getDob());



