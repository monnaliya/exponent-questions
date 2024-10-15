import { expect } from 'chai';
import mergeIntervals from '../questions/js/merge_intervals.js';

describe('Merge Intervals', () => {
  it('should merge overlapping intervals correctly', () => {
    const input = [[1,3],[2,6],[8,10],[15,18]];
    const expectedOutput = [[1,6],[8,10],[15,18]];
    const result = mergeIntervals(input);
    expect(result).to.deep.equal(expectedOutput);
  });

  it('should return the same intervals if no overlaps exist', () => {
    const input = [[1,2],[3,4],[5,6]];
    const expectedOutput = [[1,2],[3,4],[5,6]];
    const result = mergeIntervals(input);
    expect(result).to.deep.equal(expectedOutput);
  });

  it('should handle intervals that are subsets of each other', () => {
    const input = [[1,4],[2,3]];
    const expectedOutput = [[1,4]];
    const result = mergeIntervals(input);
    expect(result).to.deep.equal(expectedOutput);
  });

  it('should handle a single interval', () => {
    const input = [[1,5]];
    const expectedOutput = [[1,5]];
    const result = mergeIntervals(input);
    expect(result).to.deep.equal(expectedOutput);
  });

  it('should handle an empty input', () => {
    const input = [];
    const expectedOutput = [];
    const result = mergeIntervals(input);
    expect(result).to.deep.equal(expectedOutput);
  });
});