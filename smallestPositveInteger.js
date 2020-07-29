/* 
Write a function that, given an array A of N integers, 
returns the smallest positive integer (greater than 0)
 that does not occur in A. 
 For example, given A = [1, 3, 6, 4, 1, 2], 
 the function should return 5.
*/
const input = [1, 3, 6, 4, 1, 2];

function findSmallestMissingInt() {
    let ans;
    input.sort().every(e =>{
        if(input.indexOf(e+1) < 0)
            {
                ans = e+1;
                return false;
            }
        return true;
    });
    console.log(ans);
}
findSmallestMissingInt();