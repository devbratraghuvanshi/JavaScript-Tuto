//Print characters and their frequencies in order of occurrence

function solution(Name) {

    var kvp = {};
    var characters = Name.split("");

    characters.forEach(char => {
        if(kvp.hasOwnProperty(char)){
            kvp[char] +=1;
        }else{
            kvp[char] = 1;
        }
        
    });

    for(const key in kvp) {
        console.log(key +" "+ kvp[key]);
    }
}

var Name = "Devbrat Raghuvanshi";

solution(Name);