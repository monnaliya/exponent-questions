import { expect } from "chai";
import { spiralCopy } from '../questions/js/matrix_spiral_copy.js';


describe('spiralCopy', () => {
  it('should return the spiral order of a 3x3 matrix', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    const result = spiralCopy(matrix);
    expect(result).to.deep.equal([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });
});
