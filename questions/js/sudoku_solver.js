/**
 * Sudoku Solver

Write the function sudokuSolve that checks whether a given sudoku board (i.e. sudoku puzzle) is solvable. If so, the function will returns true. 
Otherwise (i.e. there is no valid solution to the given sudoku board), returns false.

In sudoku, the objective is to fill a 9x9 board with digits so that each column, each row, and each of the nine 3x3 sub-boards 
that compose the board contains all of the digits from 1 to 9. The board setter provides a partially completed board, 
which for a well-posed board has a unique solution. As explained above, for this problem, it suffices to calculate whether a given sudoku board has a solution. 
No need to return the actual numbers that make up a solution.

A sudoku board is represented as a two-dimensional 9x9 array of the characters ‘1’,‘2’,…,‘9’ and the '.' character, which represents a blank space. 
The function should fill the blank spaces with characters such that the following rules apply:
  1) In every row of the array, all characters ‘1’,‘2’,…,‘9’ appear exactly once.
  2) In every column of the array, all characters ‘1’,‘2’,…,‘9’ appear exactly once.
  3) In every 3x3 sub-board that is illustrated below, all characters ‘1’,‘2’,…,‘9’ appear exactly once.

A solved sudoku is a board with no blank spaces, i.e. all blank spaces are filled with characters that abide to the constraints above. 
If the function succeeds in solving the sudoku board, it’ll return true (false, otherwise).

 */

function getCandidates(board, row, col) {
  let candidates = [];

  for (let chr of '123456789') {
    let collision = false;
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === chr ||
          board[i][col] === chr ||
          board[Math.floor((row - row % 3) + i / 3)][Math.floor((col - col % 3) + i % 3)] === chr) {
          collision = true;
          break;
      }
    }

    if (!collision) {
      candidates.push(chr);
    }
  }
  return candidates;
}

export default function sudokuSolve(board) {
  let row = -1, col = -1, candidates = null;

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r][c] === '.') {
        let new_candidates = getCandidates(board, r, c);
        if (candidates === null || new_candidates.length < candidates.length) {
          candidates = new_candidates;
          row = r;
          col = c;
        }
      }
    }
  }

  if (candidates === null) {
    return true;
  }

  for (let val of candidates) {
    board[row][col] = val;
    if (sudokuSolve(board)) {
      return true;
    }
    board[row][col] = '.';
  }

  return false;
}