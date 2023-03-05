/*
给你一个字符串 s，找到 s 中最长的回文子串。

如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。

 

示例 1：

输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。
示例 2：

输入：s = "cbbd"
输出："bb"
 

提示：

1 <= s.length <= 1000
s 仅由数字和英文字母组成

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/longest-palindromic-substring
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let max = ''

  const helper = (l, r) => {
    while(l >= 0 && r < s.length && s[l] === s[r]) {
      l--;
      r++;
    }
    const max_str = s.slice(l + 1, r)
    if (max_str.length > max.length) max = max_str
  }

  for(let i = 0; i < s.length; i++) {
    helper(i, i)
    helper(i, i + 1)
  }

  return max

};
