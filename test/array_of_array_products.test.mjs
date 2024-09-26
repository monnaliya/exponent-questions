// array_of_array_products.test.mjs

import { expect } from 'chai';
import { arrayOfArrayProducts, arrayOfArrayProducts2 } from '../questions/js/array_of_array_products.js';

describe('arrayOfArrayProducts', () => {
  it('should return the correct product array for a non-empty array', () => {
    const input = [8, 10, 2];
    const expectedOutput = [20, 16, 80];
    const result = arrayOfArrayProducts(input);
    expect(result).to.deep.equal(expectedOutput);
  });

  it('should handle an array with more elements', () => {
    const input = [2, 7, 3, 4];
    const expectedOutput = [84, 24, 56, 42];
    const result = arrayOfArrayProducts(input);
    expect(result).to.deep.equal(expectedOutput);
  });

  it('should return an empty array for an empty input array', () => {
    const input = [];
    const expectedOutput = [];
    const result = arrayOfArrayProducts(input);
    expect(result).to.deep.equal(expectedOutput);
  });

  it('should return an empty array when input array has only one element', () => {
    const input = [7];
    const expectedOutput = [];
    const result = arrayOfArrayProducts(input);
    expect(result).to.deep.equal(expectedOutput);
  });
});

describe('arrayOfArrayProducts2', () => {
  it('should return the correct array of products for a non-empty array', () => {
    const input = [1, 2, 3, 4];
    const result = arrayOfArrayProducts2(input);
    expect(result).to.deep.equal([24, 12, 8, 6]);
  });

  it('should return an empty array for an input array of length 1', () => {
    const input = [5];
    const result = arrayOfArrayProducts2(input);
    expect(result).to.deep.equal([]);
  });

  it('should handle arrays with zeros correctly', () => {
    const input = [1, 0, 3, 4];
    const result = arrayOfArrayProducts2(input);
    expect(result).to.deep.equal([0, 12, 0, 0]);
  });

  it('should handle negative numbers correctly', () => {
    const input = [-1, 2, -3, 4];
    const result = arrayOfArrayProducts2(input);
    expect(result).to.deep.equal([-24, 12, -8, 6]);
  });

  it('should handle an empty array', () => {
    const input = [];
    const result = arrayOfArrayProducts2(input);
    expect(result).to.deep.equal([]);
  });
});