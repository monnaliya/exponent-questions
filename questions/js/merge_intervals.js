/**
Merge Intervals
Merge Intervals. An interval is a representation of a range of values along a number line. For example, [1,3] represents all numbers between 1 and 3, inclusive. Given a collection of intervals, the task is to merge all overlapping intervals.

For example, consider the intervals [1,3],[2,6],[8,10],[15,18]. The function should return merged intervals where overlapping intervals are combined. In this case, intervals [1,3] and [2,6] overlap, so they should be merged into [1,6].

Examples:

intervals = [[1,3], [2,6], [8,10], [15,18]]
output: [[1,6], [8,10], [15,18]]

intervals = [[1,4], [4,5]]
output: [[1,5]]

intervals = [[1,4], [2,3]]
output: [[1,4]]

intervals = [[1,2], [3,4], [5,6], [7,8]]
output: [[1,2], [3,4], [5,6], [7,8]]
 */

export default function mergeIntervals(intervals){
  if (intervals.length === 0) return [];
  intervals.sort((a,b) => a[0]-b[0]);
  let result = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
      let cur = result[result.length - 1];
      const next = intervals[i];
      if (cur[1] < next[0]) {
          result.push(next);
      } else {
          cur[1] = Math.max(cur[1], next[1]);
      }
  }
  return result;
}

