/*
给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。
单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
例如，在下面的 3×4 的矩阵中包含单词 "ABCCED"（单词中的字母已标出）。
示例 1：
输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
输出：true
示例 2：
输入：board = [["a","b"],["c","d"]], word = "abcd"
输出：false
提示：
m == board.length
n = board[i].length
1 <= m, n <= 6
1 <= word.length <= 15
board 和 word 仅由大小写英文字母组成
*/
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = function(board = [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], word = 'ABCCED') {
  const row = board.length
  const col = board[0].length

  const dfs = (r, c, board, word, index) => {
    if (r < 0 || r >= row || c < 0 || c >= col || board[r][c] !== word[index]) {
      return false
    }
    if (index === word.length - 1) return true
    const tmp = board[r][c]
    board[r][c] = ''
    const res = dfs(r - 1, c, board, word, index + 1)
                || dfs(r + 1, c, board, word, index + 1)
                || dfs(r, c - 1, board, word, index + 1)
                || dfs(r, c + 1, board, word, index + 1)

    board[r][c] = tmp
    return res


  }

  for(let r = 0; r < row; r++) {
    for(let c = 0; c < col; c++) {
      if (dfs(r, c, board, word, 0)) return true
    }
  }
  return false

};

