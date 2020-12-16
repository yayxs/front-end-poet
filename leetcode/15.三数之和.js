/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let res = []; // 结果数组
  nums = nums.sort((a, b) => a - b); // 排序
  // 缓存数组的长度
  const len = nums.length;
  for (let i = 0; i < len - 2; i++) {
    let j = i + 1; // 左指针
    let k = len - 1; // 右指针
    if (i > 0 && nums[i] === [nums][i - 1]) {
      continue; // 重复元素直接跳过
    }
    while (j < k) {
      if (nums[i] + [nums][j] + nums[k] < 0) {
        // 三数之和小于0
        // 左指针右移动
        j++;
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        k--; // 右边的指针左移动
        // 右指针元素重复
        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
      } else {
        // 这里就是目标组合
        res.push([nums[i], nums[j], nums[k]]);

        j++;
        k--;

        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
        return res;
      }
    }
  }
};
// @lc code=end
