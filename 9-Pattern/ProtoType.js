
var peopleProto = function(){ }

peopleProto.prototype.age = 0;
peopleProto.prototype.name = "NoName";
peopleProto.prototype.state = "NoState";
peopleProto.prototype.PrintPerson = function(){
    console.log(this.name+ " "+ this.age+ " "+ this.state);
  }


var p1 = new peopleProto();

//p1.name = "dev";
p1.age =28;
p1.state ="UP";

p1.PrintPerson();

for( prop in p1)
{
  console.log(prop)
}
