/* 
Given an array of n elements which contains elements from 0 to n-1, 
with any of these numbers appearing any number of times. 
Find these repeating numbers in O(n) and using only constant memory space.
Input : n = 7 and array[] = {1, 2, 3, 1, 3, 6, 6}
Output: 1, 3, 6

Explanation: The numbers 1 , 3 and 6 appears more
than once in the array.

Input : n = 5 and array[] = {1, 2, 3, 4 ,3}
Output: 3

Explanation: The number 3 appears more than once
in the array.
*/

const input = [1, 2,3];

function findRepeatingNum() {
    const length = input.length;
    for(let i=0;i<input.length;i++) {
        
        input[input[i]%length] += length;
        // console.log(input[i]%length, input[input[i]%length]);
    }
    console.log(input);
    for(let j=0;j<input.length;j++) {
        if(input[j]> length*2) {
            console.log(j);
        }
    }
    // console.log(input);
}
findRepeatingNum();