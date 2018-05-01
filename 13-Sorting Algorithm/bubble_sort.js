// step-1: you compare the first item with the second. 
            If the first item is bigger than the second item. 
            you swap them so that the bigger one stays in the second position.
// step-2:And then compare second with third item. 
//          if second item is bigger than the third, we swap them.
//           otherwise, they stayed in their position. Hence, 
//           the biggest among first three is in the third position.
// step-3:we keep doing it. until we hit the last element of the array.
//           In that way we bubble up the biggest item of the array to
//            the right most position of the array.
// step-4: Look at the inner loop in the code below.
// step-5: We repeat this process, starting from the last item of the array. 
//          look at the outer loop in the code below. We do this way, 
//          so that after finishing the first inner loop, the biggest one will be in 
//          the last item of the array.
// step-6: and then we move backward inside the outer loop.
// same thing is going on....

var arr = [3,5,3,7,8,9,0,45,67,2,45,3,4,6,7];

function bubbleSort(array) {
    
    var length = array.length;
    for (let j = length-1; j >= 0; j--) {
        for (let i = 0; i < j ; i++) {
            ele1 = array[i] ;
            ele2 = array[i+1]
            if (ele1 > ele2) {
                array[i]=ele2;
                array[i+1]=ele1;
            }
        } 
    }
}

bubbleSort(arr);
console.log(arr);