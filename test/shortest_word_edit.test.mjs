import { expect } from 'chai';
import { shortestWordEditPath, shortestWordEditPath2 } from '../questions/js/shortest_word_edit.js'; // Adjust the path based on your file structure

describe('shortestWordEditPath', function() {
  it('should return the correct number of steps for a valid transformation', function() {
    const source = 'bit';
    const target = 'dog';
    const words = ['but', 'put', 'big', 'pot', 'pog', 'dog', 'lot'];
    const result = shortestWordEditPath(source, target, words);
    expect(result).to.equal(5); // Expected steps: bit -> but -> put -> pot -> pog -> dog
  });

  it('should return -1 when no valid transformation is possible', function() {
    const source = 'bit';
    const target = 'cat';
    const words = ['but', 'put', 'big', 'pot', 'pog', 'dog', 'lot'];
    const result = shortestWordEditPath(source, target, words);
    expect(result).to.equal(-1);
  });

  it('should return -1 when the target word is not in the dictionary', function() {
    const source = 'bit';
    const target = 'zoo';
    const words = ['but', 'put', 'big', 'pot', 'pog', 'dog', 'lot'];
    const result = shortestWordEditPath(source, target, words);
    expect(result).to.equal(-1);
  });

  it('should return 0 when the source and target are the same', function() {
    const source = 'bit';
    const target = 'bit';
    const words = ['but', 'put', 'big', 'pot', 'pog', 'dog', 'lot'];
    const result = shortestWordEditPath(source, target, words);
    expect(result).to.equal(-1);
  });

  it('should handle transformations with multiple paths correctly', function() {
    const source = 'hit';
    const target = 'cog';
    const words = ['hot', 'dot', 'dog', 'lot', 'log', 'cog'];
    const result = shortestWordEditPath(source, target, words);
    expect(result).to.equal(4); // Expected steps: hit -> hot -> dot -> dog -> cog
  });
  it('should return 0 when source and target are the same word', function() {
    const source = 'dog';
    const target = 'dog';
    const words = ['dot', 'dog', 'cog'];
    const result = shortestWordEditPath2(source, target, words);
    expect(result).to.equal(0);
  });
  it('should return -1 when there is no valid transformation', function() {
    const source = 'bat';
    const target = 'dog';
    const words = ['but', 'cut', 'put', 'cat'];
    const result = shortestWordEditPath2(source, target, words);
    expect(result).to.equal(-1);
  });
  it('should return 1 when one transformation is enough', function() {
    const source = 'dot';
    const target = 'dog';
    const words = ['dog', 'dot', 'cog'];
    const result = shortestWordEditPath2(source, target, words);
    expect(result).to.equal(1);
  });
  it('should return correct number of steps for a long transformation chain', function() {
    const source = 'hit';
    const target = 'cog';
    const words = ['hot', 'dot', 'dog', 'lot', 'log', 'cog'];
    const result = shortestWordEditPath2(source, target, words);
    expect(result).to.equal(4); // Expected: hit -> hot -> dot -> dog -> cog
  });
  it('should return -1 when the target word is not in the dictionary', function() {
    const source = 'bit';
    const target = 'zoo';
    const words = ['but', 'put', 'big', 'pot', 'pog', 'dog', 'lot'];
    const result = shortestWordEditPath2(source, target, words);
    expect(result).to.equal(-1);
  });
  it('should return -1 when source and target are of different lengths', function() {
    const source = 'bit';
    const target = 'bits';
    const words = ['but', 'put', 'big', 'pot', 'pog', 'dog', 'lot'];
    const result = shortestWordEditPath2(source, target, words);
    expect(result).to.equal(-1);
  });
  it('should return -1 when word list is empty', function() {
    const source = 'bit';
    const target = 'dog';
    const words = [];
    const result = shortestWordEditPath2(source, target, words);
    expect(result).to.equal(-1);
  });
});