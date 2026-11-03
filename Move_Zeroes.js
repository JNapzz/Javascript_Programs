function moveZeros (nums) {
    let insert_pos = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[insert_pos] = nums[i];
            insert_pos += 1;
        }
    }
    for (let i = insert_pos; i < nums.length; i++) {
        nums[i] = 0;
    }  
          
    return nums;
}

const cases = [
  [[0, 1, 0, 3, 12], [1, 3, 12, 0, 0]],
  [[1, 2, 3], [1, 2, 3]],      // no zeros
  [[0, 0, 0], [0, 0, 0]],      // all zeros
  [[0, 5], [5, 0]],
  [[-1, 0, 2, 0, -3], [-1, 2, -3, 0, 0]],
  [[], []],                     // empty array
];

for (const [nums, expected] of cases) {
  const actual = moveZeros(nums);
  const passed = JSON.stringify(actual) === JSON.stringify(expected);

  console.log(passed ? "PASS" : "FAIL", {
    nums, expected, actual
  });
}