import { expect } from 'chai';
import { getNumberOfIslands } from '../questions/island_count.js';

describe('getNumberOfIslands', function() {
  it('should return the correct number of islands', function() {
    const binaryMatrix = [
      [0, 1, 0, 1, 0],
      [1, 1, 0, 1, 1],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 1, 0]
    ];
    const result = getNumberOfIslands(binaryMatrix);
    expect(result).to.equal(4);
  });

  it('should return 0 for a matrix with no islands', function() {
    const binaryMatrix = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];
    const result = getNumberOfIslands(binaryMatrix);
    expect(result).to.equal(0);
  });

  it('should return 1 for a matrix with one large island', function() {
    const binaryMatrix = [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1]
    ];
    const result = getNumberOfIslands(binaryMatrix);
    expect(result).to.equal(1);
  });

  it('should handle a single row matrix', function() {
    const binaryMatrix = [
      [1, 0, 1, 0, 1]
    ];
    const result = getNumberOfIslands(binaryMatrix);
    expect(result).to.equal(3);
  });

  it('should handle a single column matrix', function() {
    const binaryMatrix = [
      [1],
      [0],
      [1],
      [0],
      [1]
    ];
    const result = getNumberOfIslands(binaryMatrix);
    expect(result).to.equal(3);
  });
});