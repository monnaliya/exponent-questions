/**
 * Merging 2 Packages

Given a package with a weight limit limit and an array arr of item weights, 
implement a function getIndicesOfItemWeights that finds two items whose sum of weights equals the weight limit limit. 
Your function should return a pair [i, j] of the indices of the item weights, ordered such that i > j. 
If such a pair doesn’t exist, return an empty array.


input:  arr = [4, 6, 10, 15, 16],  lim = 21

output: [3, 1] # since these are the indices of the
               # weights 6 and 15 whose sum equals to 21
 */


export function getIndicesOfItemWeights1(arr, limit) {
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = i - 1 ; j >= 0; j--) {
            if (arr[i] + arr[j] === limit) {
                return [i, j];
            }
        }
    }
    return [];
}

export function getIndicesOfItemWeights2(arr, limit) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        const complement = limit - arr[i];
        if (map.has(complement)) {
            return [i, map.get(complement)];
        }
        map.set(arr[i], i);
    }
    return [];
}

