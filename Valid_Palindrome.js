function isPalindrome(s) {
    console.log("Checking:", s);
    let filtered = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    return filtered === filtered.split("").reverse().join("");
    let left = 0;
    let right = len(filtered) - 1;
    while (left < right) {
         if (filtered[left] !== filtered[right]) {
            return false;
         }
         left += 1;
         right -= 1;
         return true;  
}
   }  
const cases = [
  ["A man, a plan, a canal: Panama", true],
  ["race a car", false],
  [" ", true],
  ["0P", false],
];

for (const [input, expected] of cases) {
  const actual = isPalindrome(input);
  console.log(actual === expected ? "PASS" : "FAIL", { input, expected, actual });
}