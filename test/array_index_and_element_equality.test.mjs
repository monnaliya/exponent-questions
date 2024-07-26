// Import the necessary modules
import { expect } from 'chai';
import { indexEqualsValueSearch1, indexEqualsValueSearch2 } from '../questions/js/array_index_and_element_equality.js';

// Define the test suite for indexEqualsValueSearch1
describe('indexEqualsValueSearch1', () => {
  it('should return the correct index when arr[i] == i', () => {
    const arr = [-8, 0, 2, 5];
    const result = indexEqualsValueSearch1(arr);
    expect(result).to.equal(2);
  });

  it('should return -1 when no index satisfies arr[i] == i', () => {
    const arr = [-1, 0, 3, 6];
    const result = indexEqualsValueSearch1(arr);
    expect(result).to.equal(-1);
  });

  it('should handle an empty array', () => {
    const arr = [];
    const result = indexEqualsValueSearch1(arr);
    expect(result).to.equal(-1);
  });

  it('should handle single-element arrays correctly', () => {
    const arr = [0];
    const result = indexEqualsValueSearch1(arr);
    expect(result).to.equal(0);

    const arr2 = [1];
    const result2 = indexEqualsValueSearch1(arr2);
    expect(result2).to.equal(-1);
  });

  // Add more test cases as needed
});

// Define the test suite for indexEqualsValueSearch2
describe('indexEqualsValueSearch2', () => {
  it('should return the correct index when arr[i] == i', () => {
    const arr = [-8, 0, 2, 5];
    const result = indexEqualsValueSearch2(arr);
    expect(result).to.equal(2);
  });

  it('should return -1 when no index satisfies arr[i] == i', () => {
    const arr = [-1, 0, 3, 6];
    const result = indexEqualsValueSearch2(arr);
    expect(result).to.equal(-1);
  });

  it('should handle an empty array', () => {
    const arr = [];
    const result = indexEqualsValueSearch2(arr);
    expect(result).to.equal(-1);
  });

  it('should handle single-element arrays correctly', () => {
    const arr = [0];
    const result = indexEqualsValueSearch2(arr);
    expect(result).to.equal(0);

    const arr2 = [1];
    const result2 = indexEqualsValueSearch2(arr2);
    expect(result2).to.equal(-1);
  });

  // Add more test cases as needed
});
