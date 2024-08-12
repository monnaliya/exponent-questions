/**
 * Array of Array Products

Given an array of integers arr, you’re asked to calculate for each index i the product of all integers except the integer at that index (i.e. except arr[i]). 
Implement a function arrayOfArrayProducts that takes an array of integers and returns an array of the products.


input:  arr = [8, 10, 2]
output: [20, 16, 80] # by calculating: [10*2, 8*2, 8*10]

input:  arr = [2, 7, 3, 4]
output: [84, 24, 56, 42] # by calculating: [7*3*4, 2*3*4, 2*7*4, 2*7*3]

 */

export function arrayOfArrayProducts(arr) {
    const len = arr.length;

    if (len <=1 ) return [];

    let result = new Array(len).fill(1);
    let leftProducts = new Array(len).fill(1);
    let rightProducts = new Array(len).fill(1);

    for (let i = 0; i < len; i++) {
        leftProducts[i] = i > 0 ? arr[i] * leftProducts[i - 1] : arr[i];
    }

    for (let i = len - 1; i >= 0; i--) {
        rightProducts[i] = i < len - 1 ? arr[i] * rightProducts[i + 1] : arr[i];
    }

    for (let i = 0; i < len; i++) {
        if (i === 0) {
            result[i] = rightProducts[i+1];
        } else if (i === len - 1) {
            result[i] = leftProducts[i-1];
        } else {
            result[i] = leftProducts[i-1] * rightProducts[i+1];
        }
    }

    return result;
}
