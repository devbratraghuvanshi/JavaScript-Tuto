
function people(name,age,state){ 
  this.age = age;
  this.name =name;
  this.state =state;

  this.PrintPerson = function(){
    console.log(this.name+ " "+ this.age+ " "+ this.state);
  }
}

var per1 = new people("dev",28,"developer");
var per2 = new people("dev2",30,"developer2");
per1.PrintPerson();
per2.PrintPerson();

for( prop in per1)
{
  console.log(prop)
}
