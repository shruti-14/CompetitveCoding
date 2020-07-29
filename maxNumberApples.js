/* 
Alice and Bob work in a beautiful orchard. There are N apple trees in the orchard. The apple trees are arranged in a row and they are numbered from 1 to N.

Alice is planning to collect all the apples from K consecutive trees and Bob is planning to collect all the apples from L consecutive trees. They want to choose two disjoint segments (one consisting of K trees for Alice and the other consisting of L trees for Bob) so as not to disturb each other. What is the maximum number of apples that they can collect?

Write a function that given an array A consisting of N integers denating the number of apples on each apple tree in the row, and integers K and L denoting, respectively, the number of trees that Alice and Bob can choose when collecting, returns the maximum number of apples that can be collected by them, or -1 if there are no such intervals.

For example, given A =[6, 1,4,6,3,2,7,4], K=3, L=2, your function should return 24, because Alice can choose trees 3 to 5 and collect 4 + 6 + 3 = 13 apples, and Bob can choose trees 7 to 8 and collect 7 + 4 = 11 apples. Thus, they will collect 13 + 11 = 24 apples in total, and that is the maximum number that can be achieved.

Given A = [10, 19, 15], K = 2, L = 2, your function should return -1, because it is not possible for Alice and Bob to choose two disjoint intervals.

Assume that:
N is an integer within the range [2..600];
K and L are integers within the range [1 .. N-1];
each element of array A is an integer within the range [1..500]
*/

const A = [6, 1,4,6,3,2,7,4];
const K = 3;
const L = 2;

function maxNumberOfApples() {
    if(K+L> A.length) {
        return -1;
    }
    findMaxApplesForA();
}
function findMaxApplesForA() {
    let max = 0;
    let i=0;
    let subArray = [];
    while(i <= A.length-K) {
        if(max < Math.max([...A.slice(i,i+K)])) {
            max = Math.max(A.slice(i,i+K))
        }
        i++;
    }
    console.log(max);

}
maxNumberOfApples();