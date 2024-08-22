// shifted_array_search.test.mjs
import { expect } from 'chai';
import { shiftedArrSearch } from '../questions/js/shifted_array_search.js';

describe('shiftedArrSearch', () => {
  it('should return the correct index when the target is in the array', () => {
    const arr = [9, 12, 17, 2, 4, 5];
    const target = 2;
    expect(shiftedArrSearch(arr, target)).to.equal(3);
  });

  it('should return the correct index when the array is not shifted', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const target = 4;
    expect(shiftedArrSearch(arr, target)).to.equal(3);
  });

  it('should return -1 when the target is not in the array', () => {
    const arr = [9, 12, 17, 2, 4, 5];
    const target = 10;
    expect(shiftedArrSearch(arr, target)).to.equal(-1);
  });

  it('should return the correct index for a single element array', () => {
    const arr = [5];
    const target = 5;
    expect(shiftedArrSearch(arr, target)).to.equal(0);
  });

  it('should return -1 for an empty array', () => {
    const arr = [];
    const target = 5;
    expect(shiftedArrSearch(arr, target)).to.equal(-1);
  });
});
