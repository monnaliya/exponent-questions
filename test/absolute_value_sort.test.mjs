import { expect } from 'chai';
import { absSort } from '../questions/js/absolute_value_sort.js';

describe('absSort', () => {
    it('should sort the array by absolute values with negative numbers first when tied', () => {
        const input = [2, -7, -2, -2, 0];
        const expectedOutput = [0, -2, -2, 2, -7];
        expect(absSort(input)).to.deep.equal(expectedOutput);
    });

    it('should handle an array with only positive numbers', () => {
        const input = [4, 1, 3, 2];
        const expectedOutput = [1, 2, 3, 4];
        expect(absSort(input)).to.deep.equal(expectedOutput);
    });

    it('should handle an array with both positive and negative numbers', () => {
        const input = [-1, -3, -2, 2, 3, 1];
        const expectedOutput = [-1, 1, -2, 2, -3, 3];
        expect(absSort(input)).to.deep.equal(expectedOutput);
    });

    it('should handle an array with zeros', () => {
        const input = [0, -1, 1, 0];
        const expectedOutput = [0, 0, -1, 1];
        expect(absSort(input)).to.deep.equal(expectedOutput);
    });

    it('should handle an empty array', () => {
        const input = [];
        const expectedOutput = [];
        expect(absSort(input)).to.deep.equal(expectedOutput);
    });
});