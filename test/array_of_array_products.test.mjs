// array_of_array_products.test.mjs

import { expect } from 'chai';
import { arrayOfArrayProducts } from '../questions/js/array_of_array_products.js';

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