/**
 * Array Quadruplet (meaning 4Sum)

Given an unsorted array of integers arr and a number s, write a function findArrayQuadruplet that finds four numbers (quadruplet) in arr that sum up to s. 
Your function should return an array of these numbers in an ascending order. If such a quadruplet doesn’t exist, return an empty array.

Note that there may be more than one quadruplet in arr whose sum is s. You’re asked to return the first one you encounter (considering the results are sorted).

Explain and code the most efficient solution possible, and analyze its time and space complexities.


input:  arr = [2, 7, 4, 0, 9, 5, 1, 3], s = 20

output: [0, 4, 7, 9] # The ordered quadruplet of (7, 4, 0, 9)
                     # whose sum is 20. Notice that there
                     # are two other quadruplets whose sum is 20:
                     # (7, 9, 1, 3) and (2, 4, 9, 5), but again you’re
                     # asked to return the just one quadruplet (in an
                     # ascending order)     
 */

export function findArrayQuadruplet(arr, s) {
    let n = arr.length;
    // Return an empty array if there are fewer than 4 elements
    if (n < 4) return [];
    // Sort the array to use the two-pointer technique
    arr.sort((a,b)=>a-b);

    // Traverse the array to find the first quadruplet
    for(let i = 0; i < n-3; i++) {
        for (let j = i+1; j < n-2;j++) {
            let targetSum = s - arr[i] - arr[j];
            let left = j + 1;
            let right = n-1;
            
            // Use the two-pointer technique to find the remaining two numbers
            while (left < right) {
                if (targetSum === arr[left] + arr[right]) {
                    return [arr[i], arr[j], arr[left], arr[right]];
                } else if (targetSum < arr[left] + arr[right]) {
                    left++;
                } else {
                    right++;
                }
            }
        }
    }

    // Return an empty array if no quadruplet is found
    return [];
}

