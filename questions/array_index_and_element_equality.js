/**
 * Array Index & Element Equality

Given a sorted array arr of distinct integers, write a function indexEqualsValueSearch that returns the lowest index i for which arr[i] == i. 
Return -1 if there is no such index. Analyze the time and space complexities of your solution and explain its correctness.


input: arr = [-8,0,2,5]
output: 2 # since arr[2] == 2

input: arr = [-1,0,3,6]
output: -1 # since no index in arr satisfies arr[i] == i.

 */

// brute force, tc: o(N), sc: o(1)
function indexEqualsValueSearch1(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === i) {
            return i;
        }
    }
    return -1;
}

// binary search, tc:o(logN), sc:O(1)
function indexEqualsValueSearch2(arr) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;
    while (left < right) {
        let mid = Math.floor((left + right)/2);
        if (arr[mid] < mid) {
            left = mid + 1;
        } else if (arr[mid] === mid) {
            result = mid;
            right = mid - 1;
        } else {
            right = mid - 1;
        }
    }
    return result;
}

let arr1 = [-8,0,2,5];
let arr2 = [-1,0,3,6];
console.log(indexEqualsValueSearch1(arr1), indexEqualsValueSearch1(arr2));
console.log(indexEqualsValueSearch2(arr1), indexEqualsValueSearch2(arr2));
