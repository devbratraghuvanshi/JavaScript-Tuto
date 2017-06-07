
var peopleFactory = function(name,age,state){
  var temp ={};
  temp.age = age;
  temp.name =name;
  temp.state =state;

  temp.PrintPerson = function(){
    console.log(this.name+ " "+ this.age+ " "+ this.state);
  }
  return temp;

}

var per1 = peopleFactory("dev",28,"developer");
var per2 = peopleFactory("dev2",30,"developer2");
per2.PrintPerson();
ForEach( prop in p1)
{
  console.log(prop)
}
