// valid_parentheses.test.mjs
import { expect } from 'chai';
import { isValid } from '../questions/js/valid_ parentheses.js';

describe('isValid', () => {
  it('should return true for valid parentheses', () => {
    expect(isValid('()')).to.be.true;
    expect(isValid('()[]{}')).to.be.true;
    expect(isValid('{[]}')).to.be.true;
    expect(isValid('([{}])')).to.be.true;
  });

  it('should return false for invalid parentheses', () => {
    expect(isValid('(]')).to.be.false;
    expect(isValid('([)]')).to.be.false;
    expect(isValid('{')).to.be.false;
    expect(isValid(')')).to.be.false;
    expect(isValid('({[})')).to.be.false;
  });
});
