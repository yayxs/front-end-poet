/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let i = m - 1, // nums1 的最后一个元素指针 2
    j = n - 1, // nums2的最后一个元素的指针 2
    k = m + n - 1; // nums1 最后一个元素的指针 5

  while (i >= 0 && j >= 0) {
    // 两个数组的最后一个元素进行比较
    if (nums1[i] >= nums2[j]) {
      nums1[k] = nums1[i];
      i--;
      k--;
    } else {
      // 第一次是 nums1的3和nums2的6进行比较
      // 显然是小于
      nums1[k] = nums2[j]; // 把6放在nums1的最后一个位置 [1,2,3,0,0,6]
      j--; // 数组长度-1
      k--; // k的空余长度也-1
    }
  }
  while (j >= 0) {
    nums1[k] = nums2[j];
    k--;
    j--;
  }
};
// @lc code=end
