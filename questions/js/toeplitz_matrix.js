/**
 * Toeplitz Matrix

A Toeplitz matrix is a matrix where every left-to-right-descending diagonal has the same element. 
Given a non-empty matrix arr, write a function that returns true if and only if it is a Toeplitz matrix. 
The matrix can be any dimensions, not necessarily square.

For example,

[[1,2,3,4],
 [5,1,2,3],
 [6,5,1,2]]
is a Toeplitz matrix, so we should return true, while

[[1,2,3,4],
 [5,1,9,3],
 [6,5,1,2]]
isn’t a Toeplitz matrix, so we should return false.
 */

export function isToeplitzMatrix(arr) {
  const rowLen = arr.length;
  const colLen = arr[0].length;
  for (let i = 1; i < rowLen; i++) {
    for (let j = 1; j < colLen; j++) {
      if (arr[i-1][j-1] !== arr[i][j]) {
        return false;
      }
    }
  }

  return true;
}