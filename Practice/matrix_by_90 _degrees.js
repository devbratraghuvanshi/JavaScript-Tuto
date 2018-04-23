//Given an square matrix, turn it by 90 degrees in anti-clockwise direction without using any extra space.
// Input
//  1  2  3
//  4  5  6
//  7  8  9

// Output:
//  3  6  9 
//  2  5  8 
//  1  4  7 

// Input:
//  1  2  3  4 
//  5  6  7  8 
//  9 10 11 12 
// 13 14 15 16 

// Output:
//  4  8 12 16 
//  3  7 11 15 
//  2  6 10 14 
//  1  5  9 13

var mat4X4 = [
    [1, 2, 3,4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ];
  
var displayMatrix = function (mat, N, M){

    for (var i = 0; i < N; i++)
    {
        var row =""
        for (var j = 0; j < N; j++){
            row = row + "," + mat[i][j]
        }
        console.log("["+row+"]");
    }
}


var rotateMatrix = function(mat, N)
{
    // Consider all squares one by one
    for (var x = 0; x < N / 2; x++)
    {
        // Consider elements in group of 4 in 
        // current square
        for (var y = x; y < N-x-1; y++)
        {
            // store current cell in temp variable
            var temp = mat[x][y];
 
            // move values from right to top
            mat[x][y] = mat[y][N-1-x];
 
            // move values from bottom to right
            mat[y][N-1-x] = mat[N-1-x][N-1-y];
 
            // move values from left to bottom
            mat[N-1-x][N-1-y] = mat[N-1-y][x];
 
            // assign temp to left
            mat[N-1-y][x] = temp;
        }
    }
    return mat;
}

console.log("Old Matrix");
displayMatrix(mat4X4, 4,4);

console.log("New Matrix");
displayMatrix(rotateMatrix(mat4X4, 4,4),4);
