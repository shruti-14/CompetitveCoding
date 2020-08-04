/* return number of pair of matching socks */

const n = 9;
const inputArr = [10, 20, 20, 10, 10, 30, 50, 50, 20, 50, 50];

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    let count = 0;
    const map = new Map();
    ar.forEach(e => {
        if (map.has(e)) {
            map.set(e, map.get(e) + 1)
        } else {
            map.set(e, 1);
        }
    });

    for (let [key, value] of map) {
        count = count + Math.floor(value / 2);
    }
    return count;

}

console.log(sockMerchant(n, inputArr));