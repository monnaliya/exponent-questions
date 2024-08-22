// maximum_subarray_sum.test.mjs
import { expect } from 'chai';
import { maxSubarraySum1, maxSubarraySum2 } from '../questions/js/maximum_subarray_sum.js';

describe('maxSubarraySum', () => {
  it('should return the correct maximum sum for a given array', () => {
    const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    expect(maxSubarraySum1(nums)).to.equal(6);
  });

  it('should return the sum of a single element array', () => {
    const nums = [1];
    expect(maxSubarraySum1(nums)).to.equal(1);
  });

  it('should return the correct maximum sum when all elements are negative', () => {
    const nums = [-1, -2, -3, -4];
    expect(maxSubarraySum1(nums)).to.equal(-1);
  });

  it('should return the correct maximum sum when all elements are positive', () => {
    const nums = [1, 2, 3, 4];
    expect(maxSubarraySum1(nums)).to.equal(10);
  });

  it('should return the correct maximum sum when using the second implementation', () => {
    const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    expect(maxSubarraySum2(nums)).to.equal(6);
  });
});