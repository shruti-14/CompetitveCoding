/* 
Sum of prime numbers in range [L, R] from given Array for Q queries
Given an array arr[] of the size of N followed by an array of Q queries, of the following two types:

Query Type 1: Given two integers L and R, find the sum of prime elements from index L to R where 0 <= L <= R <= N-1.
Query Type 2: Given two integers i and X, change arr[i] = X where 0 <= i <= n-1.
*/

const input = [1, 3, 5, 7, 9, 11];
const queries = [[1,1,3],[2,1,10], [1,1,3]];

queries.forEach(e=>{
    if(e[0]===1) {
        sumOfPrime(e[1],e[2]);
    } else {
        replaceArrayEle(e[1],e[2]);
    }
});

function sumOfPrime(start,end) {
    let sum = 0;
    for(let i=start;i<=end;i++) {
        if(isPrime(input[i])) {
            sum+=input[i];
        }

    }
    console.log("Sum",sum)
}
function isPrime(num) {
    let isPrime =true;
    for(let i=2;i<=num/2; i++) {
        if(num%i === 0) {
            isPrime = false;
        }
    }
    return isPrime;
}
function replaceArrayEle(index, val) {
    input[index] = val;
}