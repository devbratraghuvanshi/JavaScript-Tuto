// //ALGO
// KADANE(ARR)
// MAX_CuRRENT = MAX_GLOBAL = A[0];
//     FOR I FROM 1 TO ARR.LENTGTH -1 
//         MAX_CURRENT = MAX_OF( A[I], MAX_CURRENT + A[I] )
//        IF MAX_CURRENT > MAX_CURMAX_GLOBAL THEN MAX_GLOBAL = MAX_CURRENT // I.E. MAX_GLOBAL = MAX_OF( MAX_CURRENT, MAX_GLOBAL )
//     END FOR
// RETURN MAX_GLOBAL;


function GetMaxSubArraySum(Arr) {
    
    var max_c = max_g = a[0];
    for (let i = 1; i <= Arr.length-1 ; i++) {
        
        max_c = Math.max(Arr[i],max_c+Arr[i]);
        max_g = max_c > max_g ? max_c : max_g;// Math.max(max_c, max_g);
    }
    return max_g;
}

var a = [2,-4,6,-3,7,-8,9,5,-4,-3];
console.log(GetMaxSubArraySum(a));


//Given an array consisting of n integers, find the contiguous subarray of given length k 
//that has the maximum average value. And you need to output the maximum average value.
//Example 1: Input: [1,12,-5,-6,50,3], k = 4 
//Output: 12.75 Explanation: Maximum average is (12-5-6+50)/4 = 51/4 = 12.75

function FindMaxAverage(Arr,k) {
    
   var max_c = 0;
    for (let i = 0; i < k; i++) {
        max_c += Arr[i];
    }
    var max_g = max_c;
    for (let j = k; j < Arr.length; j++) {
        max_c += Arr[j] - Arr[j-k];
        max_g = Math.max(max_c, max_g);// max_c > max_g ? max_c : max_g;
    }
    return max_g/k;
}
var a = [2,-4,6,-3,7,-8,9,5,-4,-3];
console.log(FindMaxAverage(a,6));