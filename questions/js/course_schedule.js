/**
You are given numCourses and a list of prerequisites, where each element in prerequisites[i] = [a_i, b_i] means 
you must complete course b_i before taking course a_i.
Write a function canFinish that returns True if it's possible to finish all courses, and False if it's not. 
You need to complete all the courses for the result to be True.

Assume there are no duplicate prerequisites, and numCourses is a non-negative number.

Examples

Input: numCourses = 3, prerequisites = [[2, 1], [1, 0]]  
Output: True  
Explanation: You can complete course 0 first, then course 1, and finally course 2.

Input: numCourses = 4, prerequisites = [[3, 2], [2, 1], [1, 0], [0, 3]]  
Output: False  
Explanation: The prerequisites form a cycle, making it impossible to finish all courses.

Input: numCourses = 5, prerequisites = [[4, 2], [3, 1], [2, 0]]  
Output: True  
Explanation: You can complete the courses in order from course 0 to course 4.
 */

