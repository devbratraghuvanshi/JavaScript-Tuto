

var N = 100; //var arr = Array.apply(null, {length: N}).map((e,i)=>i+1); //var arr  = Array.from(Array(N).keys());
var arr = Array(N).fill().map((e, i) => i + 1);//console.log(arr)
for (var index = 0; index < arr.length; index++) {

    if ((index) * 3 > arr.length) {
        break;
    }
    // console.log(index);

    if (3 * index < arr.length) {
        var no2 = arr[3 * index - 1];
        if (no1 % 15 == 0) {
            console.log(":no:" + no1 + ":15");
        } else if (no2 % 3 == 0) {
            console.log(":no:" + no2 + ":3");
        }
    }

    if (5 * index < arr.length) {
        var no1 = arr[5 * index - 1];
        if (no1 % 5 == 0) {
            console.log(":no:" + no1 + ":5");
        }
    }
}

