/**
 * Matrix Spiral Copy

Given a 2D array (matrix) inputMatrix of integers, create a function spiralCopy that copies inputMatrix’s values into a 1D array in a spiral order, clockwise. 
Your function then should return that array. Analyze the time and space complexities of your solution.


input:  inputMatrix  = [ [1,    2,   3,  4,    5],
                         [6,    7,   8,  9,   10],
                         [11,  12,  13,  14,  15],
                         [16,  17,  18,  19,  20] ]

output: [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]

 */

export function spiralCopy(inputMatrix) {

  const rowLen = inputMatrix.length;
  const colLen = inputMatrix[0].length;

  let top = 0;
  let bottom = rowLen - 1;
  let left = 0;
  let right = colLen - 1;
  let ans = [];

  while (left <= right && top <= bottom) {
    // left->right: from [top][left] to [top][right]
    for (let i = left; i <= right; i++) {
        ans.push(inputMatrix[top][i]);
    }
    top++;
    // top->bottom: from [top][right] to [bottom][right]
    for (let i = top; i <= bottom; i++) {
        ans.push(inputMatrix[i][right]);
    }
    right--;
    // right->left: from [bottom][right] to [bottom][left]
    if (top <= bottom) {
        for (let j = right; j >= left; j--) {
            ans.push(inputMatrix[bottom][j])
        }
        // bottom->top:
        bottom--;
    }
    // bottom->top: from [bottom][left] to [top][left]
    if (left <= right) {
        for (let j = bottom; j >=top; j--) {
            ans.push(inputMatrix[j][left])
        }
        left++;
    }
  }
  return ans;
}
