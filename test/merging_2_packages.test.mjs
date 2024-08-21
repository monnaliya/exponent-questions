// merging_2_packages.test.mjs
import { expect } from 'chai';
import { getIndicesOfItemWeights1, getIndicesOfItemWeights2 } from '../questions/js/merging_2_packages.js';

describe('getIndicesOfItemWeights', () => {
  it('should return [3, 1] when input is [4, 6, 10, 15, 16] and limit is 21', () => {
    const arr = [4, 6, 10, 15, 16];
    const limit = 21;
    expect(getIndicesOfItemWeights1(arr, limit)).to.deep.equal([3, 1]);
  });

  it('should return an empty array when no valid pair exists', () => {
    const arr = [4, 6, 10, 15, 16];
    const limit = 30;
    expect(getIndicesOfItemWeights2(arr, limit)).to.deep.equal([]);
  });

  it('should return the correct pair of indices for multiple pairs that add up to the limit', () => {
    const arr = [1, 9, 11, 15, 2, 7];
    const limit = 16;
    expect(getIndicesOfItemWeights1(arr, limit)).to.deep.equal([5, 1]);
  });

  it('should return the correct result when using the second implementation', () => {
    const arr = [4, 6, 10, 15, 16];
    const limit = 21;
    expect(getIndicesOfItemWeights2(arr, limit)).to.deep.equal([3, 1]);
  });
});
