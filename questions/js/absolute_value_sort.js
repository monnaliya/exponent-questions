/**
 * Absolute Value Sort

Given an array of integers arr, write a function absSort(arr), that sorts the array according to the absolute values of the numbers in arr. 
If two numbers have the same absolute value, sort them according to sign, where the negative numbers come before the positive numbers.

Examples:

input:  arr = [2, -7, -2, -2, 0]
output: [0, -2, -2, 2, -7]
 */

export function absSort(arr) {
  return arr.sort((a,b) => {
    if (Math.abs(a) === Math.abs(b)) {
      return a - b;
    }
    return Math.abs(a) - Math.abs(b);
  })
}

