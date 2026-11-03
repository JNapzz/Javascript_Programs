function first_uniq_char (s) {
    console.log("Checking:", s);
    let counts = {};

    for(const char of s) {
        counts[char] = (counts[char] || 0) + 1; 
    }
   
    for (let i = 0; i < s.length; i++){
        const char = s[i];

        if (counts[char] === 1) {
            return i;
        }
    }
    return -1;
}

const cases = [
  ["a", 0],            // only character is unique
  ["leetcode", 0],     // first character is unique
  ["loveleetcode", 2], // "v" is the first unique character
  ["aabb", -1],        // no unique character
  ["swiss", 1],        // "w" is the first unique character
  ["", -1],            // empty string
];

for (const [input, expected] of cases) {
  const actual = first_uniq_char(input);
  console.log(actual === expected ? "PASS" : "FAIL", {
    input, expected, actual
  });
}