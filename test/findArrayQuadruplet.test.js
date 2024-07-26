import { expect } from 'chai';
import { findArrayQuadruplet } from '../questions/js/array_quadruplet.js';

describe('findArrayQuadruplet', function() {
  it('should return an empty array if no quadruplet is found', function() {
    const arr = [1, 2, 3, 4, 5];
    const s = 20;
    const result = findArrayQuadruplet(arr, s);
    expect(result).to.be.an('array').that.is.empty;
  });

  it('should return the correct quadruplet when one exists', function() {
    const arr = [1, 2, 3, 4, 5, 6];
    const s = 18;
    const result = findArrayQuadruplet(arr, s);
    expect(result).to.be.an('array').that.deep.equals([2, 4, 5, 7]);
  });

  it('should return the first valid quadruplet in ascending order', function() {
    const arr = [1, 5, 1, 0, 6, 0];
    const s = 7;
    const result = findArrayQuadruplet(arr, s);
    expect(result).to.be.an('array').that.deep.equals([0, 1, 0, 6]);
  });

  // Add more test cases as needed
});