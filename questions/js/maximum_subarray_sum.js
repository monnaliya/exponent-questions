/**
Maximum Subarray Sum
Given an array of integers nums, write a function maxSubarraySum to find the maximum sum of a contiguous subarray within the array and return that maximum sum. 
The subarray must be contiguous, meaning that the elements must appear consecutively in the original array.

Examples
Input: nums = [2, 3, -2, 4]  
Output: 7  
Explanation: Maximum sum is 2 + 3 + (-2) + 4 = 7.

Input: nums = [1, -1, -5, -4]  
Output: -1  
Explanation: The maximum sum is -1, which is the single element with the highest value.
 */

export function maxSubarraySum1(nums) {
    let len = nums.length;

    let maxSum = nums[0];

    for (let i = 0; i < len; i++) {
        for (let j = i; j < len; j++) {
            let currentSum = 0;
            for (let k = i; k <= j; k++) {
                currentSum += nums[k];
            }
            maxSum = Math.max(maxSum, currentSum);
        }
    }

    return maxSum;
}

export function maxSubarraySum2(nums) {
    let maxSoFar = nums[0];
    let maxEndingHere = nums[0];

    for (let i = 1; i < nums.length; i++) {
        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar;
}