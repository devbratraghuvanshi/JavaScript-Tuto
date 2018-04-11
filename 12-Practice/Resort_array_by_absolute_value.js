//You are given a sorted array containing both negative and positive values. 
//Resort the array taking absolute value of negative numbers

var array = [ -8, -5, -3, -1, 3, 6, -9 ];
console.log(array.sort((a,b) => Math.abs(a) - Math.abs(b)));