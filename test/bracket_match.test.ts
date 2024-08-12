import { expect } from 'chai';
import { bracketMatch1, bracketMatch2 } from '../questions/ts/bracket_match';

describe('Bracket Match Tests', () => {
  it('bracketMatch1 should return 0 for balanced brackets', () => {
    const result = bracketMatch1('()');
    expect(result).to.equal(0);
  });

  it('bracketMatch1 should return 1 for unbalanced brackets', () => {
    const result = bracketMatch1('(()');
    expect(result).to.equal(1);
  });

  it('bracketMatch2 should return 0 for balanced brackets', () => {
    const result = bracketMatch2('()');
    expect(result).to.equal(0);
  });

  it('bracketMatch2 should return 1 for unbalanced brackets', () => {
    const result = bracketMatch2('(()');
    expect(result).to.equal(1);
  });
});