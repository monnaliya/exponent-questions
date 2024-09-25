// Importing the necessary modules
import { expect } from 'chai';
import { isToeplitzMatrix } from '../questions/js/toeplitz_matrix.js';

describe('isToeplitzMatrix', () => {

    it('should return true for a valid Toeplitz matrix', () => {
        const matrix = [
            [1, 2, 3, 4],
            [5, 1, 2, 3],
            [6, 5, 1, 2]
        ];
        const result = isToeplitzMatrix(matrix);
        expect(result).to.be.true;
    });

    it('should return false for an invalid Toeplitz matrix', () => {
        const matrix = [
            [1, 2, 3, 4],
            [5, 1, 9, 3],
            [6, 5, 1, 2]
        ];
        const result = isToeplitzMatrix(matrix);
        expect(result).to.be.false;
    });

    it('should return true for a single-row matrix', () => {
        const matrix = [
            [1, 2, 3]
        ];
        const result = isToeplitzMatrix(matrix);
        expect(result).to.be.true;
    });

    it('should return true for a single-column matrix', () => {
        const matrix = [
            [1],
            [2],
            [3]
        ];
        const result = isToeplitzMatrix(matrix);
        expect(result).to.be.true;
    });

    it('should return true for a 1x1 matrix', () => {
        const matrix = [
            [1]
        ];
        const result = isToeplitzMatrix(matrix);
        expect(result).to.be.true;
    });
});