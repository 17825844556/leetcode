/*
给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。

你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。

示例 1：

输入：num1 = "11", num2 = "123"
输出："134"
示例 2：

输入：num1 = "456", num2 = "77"
输出："533"
示例 3：

输入：num1 = "0", num2 = "0"
输出："0"

提示：

1 <= num1.length, num2.length <= 104
num1 和num2 都只包含数字 0-9
num1 和num2 都不包含任何前导零

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/add-strings
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} num1
 * @param {string} num2
 * @param {string} base
 * @return {string}
 */
var addStrings = function(num1, num2, base = 10) {
  let res = ''
  let n1_length = num1.length - 1
  let n2_length = num2.length - 1
  let scale = 0

  while(n1_length >= 0 || n2_length >= 0) {
    const num = (+num1[n1_length] || 0) + (+num2[n2_length] || 0) + scale;
    scale = num >= base ? 1 : 0;
    res = num % base + res;
    n1_length--;
    n2_length--;
  }
  return scale > 0 ? '1' + res : res

};
