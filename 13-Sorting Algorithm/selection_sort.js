// Go through the array, find the index of the lowest element swap the lowest element 
// with the first element. Hence first element is the lowest element in the array.

// Now go through the rest of the array (excluding the first element) and find the 
// index of the lowest and swap it with the second element.

// thats how it continues to select (find out) the lowest element of the array 
// and putting it on the left until it hits the last element.

function selectionSort(array) {
    var minIndex , temp, length = array.length;
    for (var i = 0; i < length; i++) {
        minIndex = i;
        for (var j = i+1; j < length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
            temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
    }
    return array;
}
var arr = [3,5,3,7,8,9,0,45,67,2,45,3,4,6,7];
console.log(selectionSort(arr));