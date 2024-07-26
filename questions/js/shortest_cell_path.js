/**
 * Shortest Cell Path In a given grid of 0s and 1s, we have some starting row and column sr, sc and a target row and column tr, tc. Return the length of the shortest path from sr, sc to tr, tc that walks along 1 values only.

Each location in the path, including the start and the end, must be a 1. Each subsequent location in the path must be 4-directionally adjacent to the previous location.

It is guaranteed that grid[sr][sc] = grid[tr][tc] = 1, and the starting and target positions are different.

If the task is impossible, return -1.

Examples:

input: grid = [[1, 1, 1, 1], [0, 0, 0, 1], [1, 1, 1, 1]] sr = 0, sc = 0, tr = 2, tc = 0 output: 8 (The lines below represent this grid:) 1111 0001 1111

grid = [[1, 1, 1, 1], [0, 0, 0, 1], [1, 0, 1, 1]] sr = 0, sc = 0, tr = 2, tc = 0 output: -1 (The lines below represent this grid:) 1111 0001 1011
 */

// use bfs to solve
export function shortestCellPath(grid,sr,sc,tr,tc) {
    if (grid[sr][sc] === 0 || grid[tr][tc] === 0) return -1;

    let visisted = new Set([`${sr},${sc}`]);
    let queue = [[sr,sc,0]];
    while (queue.length) {
        // get the first queue element
        let [i,j,level] = queue.shift();
        if (i===tr && j===tc) {
            return level;
        }
        // check 4 direction neighbors
        let fourArr = [[i-1,j],[i+1,j],[i,j-1],[i,j+1]];
        for (const [row,col] of fourArr) {
            if (row>=0 && row<grid.length && col>=0 && col<grid[0].length && grid[row][col] === 1 && !visisted.has(`${row},${col}`)) {
                queue.push([row,col,level+1]);
                visisted.add(`${row},${col}`);
            }
        }
    }
    return -1;
}