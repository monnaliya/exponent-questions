/**
 * Shifted Array Search

A sorted array of distinct integers shiftArr is shifted to the left by an unknown offset and you don’t have a pre-shifted copy of it. 
For instance, the sequence 1, 2, 3, 4, 5 becomes 3, 4, 5, 1, 2, after shifting it twice to the left.

Given shiftArr and an integer num, implement a function shiftedArrSearch that finds and returns the index of num in shiftArr. 
If num isn’t in shiftArr, return -1. Assume that the offset can be any value between 0 and arr.length - 1.

Explain your solution and analyze its time and space complexities.


input:  shiftArr = [9, 12, 17, 2, 4, 5], num = 2 # shiftArr is the
                                                 # outcome of shifting
                                                 # [2, 4, 5, 9, 12, 17]
                                                 # three times to the left

output: 3 # since it’s the index of 2 in arr
 */

export function shiftedArrSearch(shiftArr, num) {
    let left = 0;
    let right = shiftArr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (shiftArr[mid] === num) {
            return mid;
        }

        // if the left half is sorted
        if (shiftArr[left] <= shiftArr[mid]) {
            if (num >= shiftArr[left] && num < shiftArr[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            // if the right half is sorted
            if (num > shiftArr[mid] && num <= shiftArr[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
}   