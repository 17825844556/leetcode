/*
给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请

你返回所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。

 

 

示例 1：

输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
解释：
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
注意，输出的顺序和三元组的顺序并不重要。
示例 2：

输入：nums = [0,1,1]
输出：[]
解释：唯一可能的三元组和不为 0 。
示例 3：

输入：nums = [0,0,0]
输出：[[0,0,0]]
解释：唯一可能的三元组和为 0 。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/3sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let res = []
  nums.sort((a, b) => a - b);
  for(let i = 0; i < nums.length; i++) {
    let cur = nums[i], l = i + 1, r = nums.length - 1;
    if (cur > 0) return res
    if (cur === nums[i - 1]) continue;
    while(l < r) {
      let l_num = nums[l], r_num = nums[r], three_num = l_num + r_num + cur
      if (three_num > 0) {
        r--;
      } else if (three_num < 0) {
        l++;
      } else {
        res.push([cur, l_num, r_num])
        while(l < r && l_num === nums[l + 1]) {
          l++;
        }
        while(l < r && r_num === nums[r - 1]) {
          r--;
        }
        l++;
        r--;
      }

    }
  }
  return res

};
