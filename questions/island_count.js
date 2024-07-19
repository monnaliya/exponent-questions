/**
 * Island Count

Given a 2D array binaryMatrix of 0s and 1s, implement a function getNumberOfIslands that returns the number of islands of 1s in binaryMatrix.

An island is defined as a group of adjacent values that are all 1s. A cell in binaryMatrix is considered adjacent to another cell if they are next 
to each either on the same row or column. Note that two values of 1 are not part of the same island if they’re sharing only a mutual “corner” 
(i.e. they are diagonally neighbors).


input:  binaryMatrix = [ [0,    1,    0,    1,    0],
                         [0,    0,    1,    1,    1],
                         [1,    0,    0,    1,    0],
                         [0,    1,    1,    0,    0],
                         [1,    0,    1,    0,    1] ]

output: 6 # since this is the number of islands in binaryMatrix.
          # See all 6 islands color-coded below.
*/

function getNumberOfIslands(binaryMatrix) {
    const ROWLEN = binaryMatrix.length;
    const COLLEN = binaryMatrix[0].length;
    let counts = 0;

    for(let i = 0; i < ROWLEN; i++) {
        for (let j = 0; j < COLLEN; j++) {
            // current cell is binaryMatrix[i][j]
            if (binaryMatrix[i][j] === 1) {
                counts++;
                dfs(binaryMatrix, i, j);
            }
        }
    }

    function dfs(grid, row, col) {
        if (row < 0 || col < 0 || row >= ROWLEN || col >= COLLEN || grid[row][col] === 0) {
            return;
        }

        // mark cell 0 as visited
        grid[row][col] = 0;

        // traverse all 4 directions
        dfs(grid, row - 1, col); // up
        dfs(grid, row + 1, col); // down
        dfs(grid, row, col - 1); // left
        dfs(grid, row, col + 1); // right
    }

    return counts;
}

binaryMatrix = [ 
    [0,    1,    0,    1,    0],
    [0,    0,    1,    1,    1],
    [1,    0,    0,    1,    0],
    [0,    1,    1,    0,    0],
    [1,    0,    1,    0,    1] ];

console.log(getNumberOfIslands(binaryMatrix))

