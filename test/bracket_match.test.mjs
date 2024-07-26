import { expect } from 'chai';
import { bracketMatch1, bracketMatch2 } from '../questions/js/bracket_match.js';

describe('bracketMatch1', () => {
  it('should return 0 for correctly matched brackets', () => {
    expect(bracketMatch1('')).to.equal(0);
    expect(bracketMatch1('()')).to.equal(0);
    expect(bracketMatch1('()()')).to.equal(0);
    expect(bracketMatch1('(())')).to.equal(0);
  });

  it('should return the number of brackets needed to make it correctly matched', () => {
    expect(bracketMatch1('(')).to.equal(1);
    expect(bracketMatch1(')')).to.equal(1);
    expect(bracketMatch1('(()')).to.equal(1);
    expect(bracketMatch1('())')).to.equal(1);
    expect(bracketMatch1(')(')).to.equal(2);
    expect(bracketMatch1('()(')).to.equal(1);
  });
});

describe('bracketMatch2', () => {
  it('should return 0 for correctly matched brackets', () => {
    expect(bracketMatch2('')).to.equal(0);
    expect(bracketMatch2('()')).to.equal(0);
    expect(bracketMatch2('()()')).to.equal(0);
    expect(bracketMatch2('(())')).to.equal(0);
  });

  it('should return the number of brackets needed to make it correctly matched', () => {
    expect(bracketMatch2('(')).to.equal(1);
    expect(bracketMatch2(')')).to.equal(1);
    expect(bracketMatch2('(()')).to.equal(1);
    expect(bracketMatch2('())')).to.equal(1);
    expect(bracketMatch2(')(')).to.equal(2);
    expect(bracketMatch2('()(')).to.equal(1);
  });
});