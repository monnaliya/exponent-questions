import { expect } from 'chai';
import { findBusiestPeriod1, findBusiestPeriod2 } from '../questions/js/busiest_time_in_the_mall.js';

describe('findBusiestPeriod', function() {
  it('should return the correct busiest period', function() {
    const data = [
      [1487799425, 14, 1],
      [1487799425, 4, 0],
      [1487799425, 2, 0],
      [1487800378, 10, 1],
      [1487801478, 18, 0],
      [1487801478, 18, 1],
      [1487901013, 1, 0],
      [1487901211, 7, 1],
      [1487901211, 7, 0]
    ];
    const result = findBusiestPeriod1(data);
    expect(result).to.equal(1487800378);
  });

  it('should return the correct busiest period when using findBusiestPeriod2', function() {
    const data = [
      [1487799425, 14, 1],
      [1487799425, 4, 0],
      [1487799425, 2, 0],
      [1487800378, 10, 1],
      [1487801478, 18, 0],
      [1487801478, 18, 1],
      [1487901013, 1, 0],
      [1487901211, 7, 1],
      [1487901211, 7, 0]
    ];
    const result = findBusiestPeriod2(data);
    expect(result).to.equal(1487800378);
  });

  // Add more test cases as needed
});

describe('findBusiestPeriod edge cases', function() {
  it('should handle empty data', function() {
    const data = [];
    const result = findBusiestPeriod1(data);
    expect(result).to.equal(0);
  });

  it('should handle single entry', function() {
    const data = [
      [1487799425, 14, 1]
    ];
    const result = findBusiestPeriod2(data);
    expect(result).to.equal(1487799425);
  });
});