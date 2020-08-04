/* 
Check if a string can be rearranged to form special palindrome
Given a string str, the task is to check if it can be rearranged to get a special palindromic string. If we can make it print YES else print NO.
A string is called special Palindrome that contains an uppercase and a lower case character of the same character in the palindrome position. Example- ABCcba is a special palindrome but ABCCBA is not a special palindrome.

Examples:

Input: str = "ABCcba"
Output: YES

Input: str = "ABCCBA"
Output: NO
*/
const charCountMap = {};
const input = "ABCdcba";
const charMap = {};

function checkIfSpecialPalCanGenerate() {
    input.split('').forEach(e => {
        //  console.log(e.charCodeAt());
         const asciiVal = e.charCodeAt();
         if(charCountMap.hasOwnProperty(asciiVal)) {
             charCountMap[asciiVal]++
         } else {
            charCountMap[asciiVal] = 1;
         }
    });
    console.log(charCountMap);
    return checkIfPalindromeCanGenerate() && checkForSpecialPal();
    
}
function checkForSpecialPal() {
    let valid = true;
    Object.keys(charCountMap).forEach(e=>{
        let index=0;
        parseInt(e) <=90 ? index = parseInt(e)+32 : index = parseInt(e)-32;
        if(charCountMap[e]!== charCountMap[index]) {
            console.log(e,index);
            valid = false;
        }
    });
    return valid;
}
function checkIfPalindromeCanGenerate() {
    let countOfOdd = 0;
    let ans = true;
    input.toLowerCase().split('').forEach(e => {
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
console.log(checkIfSpecialPalCanGenerate());
