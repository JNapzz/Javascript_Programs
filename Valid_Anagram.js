function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const charCount = {};
    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (const char of t) {
        if (!charCount[char]) {
            return false;
        }
        charCount[char] -= 1;
    }
    return true;
}

const cases = [
  ["anagram", "nagaram", true],
  ["rat", "car", false],
  ["a", "a", true],
  ["a", "b", false],
  ["ab", "a", false],       // different lengths
  ["listen", "silent", true],
  ["aabb", "abab", true],   // repeated letters, same counts
];

for (const [s, t, expected] of cases) {
  const actual = isAnagram(s, t);
  console.log(actual === expected ? "PASS" : "FAIL", {
    s, t, expected, actual
  });
}
