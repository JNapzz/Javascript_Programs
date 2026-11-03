function twoSum (nums, target) {
    console.log("Checking:", nums, target);
    const seen = new Map(); //Map holds data and indicies of each element put through it

    for (let i = 0; i < nums.length; i++) { //iterate through the nums list
        const needed = target - nums[i];

        if (seen.has(needed)) { //If the map holds an element, keeps track of it and compares to the next element 
            return [seen.get(needed), i]; 
        }
        seen.set(nums[i], i);
    }
}

const cases = [
  [[2, 7, 11, 15], 9, [0, 1]],
  [[3, 2, 4], 6, [1, 2]],
  [[3, 3], 6, [0, 1]],
  [[-1, 0, 1, 2], 0, [0, 2]],
];

for (const [nums, target, expected] of cases) {
  const actual = twoSum(nums, target);
  const passed = JSON.stringify(actual) === JSON.stringify(expected);

  console.log(passed ? "PASS" : "FAIL", {
    nums, target, expected, actual
  });
}