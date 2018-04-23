
// Wap to find subsets that contains equal sum in an array:
// for eg{1,2,3,4,2}->{1,2,3}&&{4,2}
// {1,1,3,3,2,8}->{1,3,3,2}&&{1,8}
// {1,3,4,7}->no subset 

 function GetEqualSumIndex(arr) {
     if (!arr || !(arr instanceof Array) || arr.length <=0 ) {
        throw "Parameter is not valid"
     }
     var length = arr.length;
     var leftSum = 0;
     for (var i = 0; i < length; i++)
     {   // add current element to left Sum
         leftSum += Arr[i] ;
         // find sum of rest array elements (rightSum)
         var rightSum = 0 ;
         for (var j = i+1 ; j < length ; j++ )
             rightSum += Arr[j] ;
  
         // split point index
         if (leftSum == rightSum)
             return i+1 ;
     }
     return 0;
 }

var Arr= [1,2,3,4,2] 
console.log(Arr)

var equalSumIndex = GetEqualSumIndex(Arr);
 if (equalSumIndex > 0) {
    console.log(Arr.splice(equalSumIndex));
    console.log(Arr)
 }else {
    console.log("can't be divided in to 2 equal sub set");
 }
