function findOccurence(A) {
    const countMap = {};
    let ans;
    A.forEach(ele => {
        if (countMap.hasOwnProperty(ele)) {
            countMap[ele] += 1;
        } else {
            countMap[ele] = 1;
        }
    });


    Object.keys(countMap).every(e => {
        if (countMap[e] % 2 !== 0) {
            ans = e;
            return false;
        }
        return true;
    });
    return ans;
}
findOccurence([5, 5, 8, 9, 9, 8, 7, 1, 1]);