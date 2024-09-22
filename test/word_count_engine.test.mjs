import { expect } from 'chai';
import { wordCountEngine } from '../questions/js/word_count_engine.js';

// Test suite
describe('Word Count Engine Tests', () => {

  it('should return correct word count for a simple document', () => {
    const document = "Practice makes perfect. you'll only get Perfect by practice. just practice!";
    const expectedOutput = [
      ["practice", "3"],
      ["perfect", "2"],
      ["makes", "1"],
      ["youll", "1"],
      ["only", "1"],
      ["get", "1"],
      ["by", "1"],
      ["just", "1"]
    ];
    
    const result = wordCountEngine(document);
    expect(result).to.deep.equal(expectedOutput);
  });

  it('should return an empty array for an empty document', () => {
    const document = "";
    const expectedOutput = [];
    const result = wordCountEngine(document);
    expect(result).to.deep.equal(expectedOutput);
  });

  it('should handle punctuation correctly', () => {
    const document = "Hi! Hi! Are you there? I'm here.";
    const expectedOutput = [
      ["hi", "2"],
      ["are", "1"],
      ["you", "1"],
      ["there", "1"],
      ["im", "1"],
      ["here", "1"]
    ];
    const result = wordCountEngine(document);
    expect(result).to.deep.equal(expectedOutput);
  });

  it('should be case-insensitive', () => {
    const document = "Hello hello HELLO";
    const expectedOutput = [["hello", "3"]];
    const result = wordCountEngine(document);
    expect(result).to.deep.equal(expectedOutput);
  });

  it('should return the correct order if words have the same count', () => {
    const document = "apple banana apple banana orange";
    const expectedOutput = [
      ["apple", "2"],
      ["banana", "2"],
      ["orange", "1"]
    ];
    const result = wordCountEngine(document);
    expect(result).to.deep.equal(expectedOutput);
  });

});