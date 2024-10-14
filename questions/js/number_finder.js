/**
You have a web server that keeps crashing each day. You suspect it begins failing after a certain number of requests are served. Luckily, you have the daily request logs for the server. You see that it returns a status code of 200, but at some point it begins returning 500s instead:

200, 200, 200, ... 200, 500, 500, 500
In order to find the breaking point, let's write a function find_first(array, num) that returns the index at which the number num first appears in the input array. In this case, we want to efficiently find the first 500 in our server log.

Input: an array of numbers, a number to find

Output: the index of the array at which num first appears, or -1 if it does not

Examples
Python

input = [200, 200, 200, 200, 500, 500, 500]

find_first(input, 200) # => 0
find_first(input, 500) # => 4
find_first(input, 100) # => -1
 */