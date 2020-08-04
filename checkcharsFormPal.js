/* 
Check if characters of a given string can be rearranged to form a palindrome
*/
const input = "abcdcba";
const charMap = {};
let countOfOdd = 0;
let ans = true;
function checkIfPalindromeCanGenerate() {
    input.split('').forEach(e => {
        if (charMap.hasOwnProperty(e)) {
            charMap[e]++;
        } else {
            charMap[e] = 1;
        }
    });
    console.log(charMap);
    Object.keys(charMap).forEach(e1 => {
        if (charMap[e1] % 2 !== 0) {
            countOfOdd++;
            if (countOfOdd > 1) {
                ans = false;
            }
        }
    });
    return ans;
}
console.log(checkIfPalindromeCanGenerate());