// Import the necessary modules
import { expect } from 'chai';
import { shortestCellPath } from '../questions/shortest_cell_path.js';


// Define the test suite for shortestCellPath
describe('shortestCellPath', () => {
  it('should return the correct path length for a simple case', () => {
    const grid = [
      [1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1]
    ];
    const sr = 0, sc = 0, tr = 2, tc = 6;
    const result = shortestCellPath(grid, sr, sc, tr, tc);
    expect(result).to.equal(8);
  });

  it('should return -1 when no path exists', () => {
    const grid = [
      [1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1]
    ];
    const sr = 0, sc = 0, tr = 2, tc = 6;
    const result = shortestCellPath(grid, sr, sc, tr, tc);
    expect(result).to.equal(-1);
  });

  it('should return the correct path length for a custom grid', () => {
    const grid = [
      [1, 0, 1, 1],
      [1, 1, 1, 0],
      [0, 0, 1, 1],
      [1, 1, 1, 1]
    ];
    const sr = 0, sc = 0, tr = 3, tc = 3;
    const result = shortestCellPath(grid, sr, sc, tr, tc);
    expect(result).to.equal(6);
  });

  it('should handle the case where start and end are the same', () => {
    const grid = [
      [1, 0],
      [0, 1]
    ];
    const sr = 0, sc = 0, tr = 0, tc = 0;
    const result = shortestCellPath(grid, sr, sc, tr, tc);
    expect(result).to.equal(0);
  });

  // Add more test cases as needed
});