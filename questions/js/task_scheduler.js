/**
You are given a list of tasks where each task is represented by a character. Each task must be performed in a sequence, and you need to ensure that the same task is not executed again until after a cooldown period of n intervals. The goal is to determine the minimum number of intervals required to complete all tasks, including any idle time required to respect the cooldown period.

Write a function leastInterval that returns the minimum number of intervals required to execute all tasks while respecting the cooldown period n.

Examples
tasks = ['A', 'A', 'A', 'B', 'B', 'B']
n = 2
output: 8
To execute all tasks while respecting the cooldown period of 2, the schedule could be ['A', 'B', 'idle', 'A', 'B', 'idle', 'A', 'B']. This schedule allows each task to be performed and includes idle intervals where necessary to respect the cooldown period. Thus, the minimum number of intervals required is 8.

tasks = ['A', 'A', 'A', 'B', 'B', 'B']
n = 0
output: 6
With a cooldown period of 0, there is no idle time needed. Thus, the minimum number of intervals is equal to the number of tasks, which is 6.
 */

