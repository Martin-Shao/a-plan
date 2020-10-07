function subsets(nums) {
  const ans = [];
  const n = nums.length;
  for (let mask = 0; mask < (1 << n); ++mask) {
    const t = [];
    for (let i = 0; i < n; ++i) {
      if (mask & (1 << i)) {
        // if (mask & (1 << i)) {
        t.push(nums[i]);
      }
    }
    ans.push(t);
  }
  return ans;
};

const nums = [1, 2, 3]

console.info(subsets(nums))