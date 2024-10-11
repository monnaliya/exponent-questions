/**
Fibonacci Numbers
Write a function fib(n) that returns the nth Fibonacci number. The Fibonacci sequence is defined as F(n) = F(n-1) + F(n-2) with F(0) = 1 and F(1) = 1, which produces the following pattern:

1, 1, 2, 3, 5, 8, 13 ...
Examples
Python
fib(0)  # => 1
fib(1)  # => 1
fib(2)  # => 2
fib(3)  # => 3
...
fib(10) # => 89
fib(20) # => 10946
 */

export function fib1(n, memo = {}) {
  if (n <= 1) return 1;
  return fib1(n-1)+fib1(n-2);
}

export function fib2(n, memo = {}) {
  if (n <= 1) {
      return 1;
  }
  if (!memo[n]) {
      memo[n] = fib2(n - 1, memo) + fib2(n - 2, memo);
  }
  return memo[n];
}