// Import Chai's expect function and your Fibonacci implementations
import { expect } from 'chai';
import { fib1, fib2 } from '../questions/js/fibonacci_numbers.js';

describe('Fibonacci Function Tests', () => {
  
  // Test cases for fib1
  describe('fib1 function', () => {
    it('should return 1 for fib(1)', () => {
      expect(fib1(1)).to.equal(1);
    });

    it('should return 2 for fib(2)', () => {
      expect(fib1(2)).to.equal(2);
    });

    it('should return 3 for fib(3)', () => {
      expect(fib1(3)).to.equal(3);
    });

    it('should return 21 for fib(7)', () => {
      expect(fib1(7)).to.equal(21);
    });

    it('should return 89 for fib(10)', () => {
      expect(fib1(10)).to.equal(89);
    });
  });

  // Test cases for fib2
  describe('fib2 function', () => {
    it('should return 1 for fib(1)', () => {
      expect(fib2(1)).to.equal(1);
    });

    it('should return 2 for fib(2)', () => {
      expect(fib2(2)).to.equal(2);
    });

    it('should return 3 for fib(3)', () => {
      expect(fib2(3)).to.equal(3);
    });

    it('should return 21 for fib(7)', () => {
      expect(fib2(7)).to.equal(21);
    });

    it('should return 89 for fib(10)', () => {
      expect(fib2(10)).to.equal(89);
    });
  });

});
