/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const set = new Set()
    let i=0,
        j=0,
        maxLen = 0
    // 字符串的长度是0 直接返回0
    if(s.length===0){
        return 0
    }
    // 有长度那就循环
    for(i;i<s.length;i++){
        // 首先判断set 集合有没有这个字符，没有添加进去
        if(!set.has(s[i])){

            set.add(s[i])
            maxLen = Math.max(maxLen,set.size)
            
        }else{
            while(set.has(s[j])){
                set.delete(s[j])
                j++
            }
            set.add(s[i])
        }
    }
    return maxLen
};
// @lc code=end

