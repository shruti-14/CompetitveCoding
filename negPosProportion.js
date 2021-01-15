function plusMinus(arr) {
    const countMap = new Map();
    let numberType;
    const arrlen = arr.length;
    arr.forEach(e => {
        numberType = Math.sign(e);
        countMap.has(numberType) ? countMap.set(numberType, countMap.get(numberType) + 1) : countMap.set(numberType, 1);
    });
    console.log(((countMap.get(1) ? countMap.get(1) : 0) / arrlen).toFixed(6));
    console.log((((countMap.get(-1) ? countMap.get(-1) : 0)) / arrlen).toFixed(6));
    console.log((((countMap.get(0) ? countMap.get(0) : 0)) / arrlen).toFixed(6));

}
plusMinus([-4, 3, -9, 0, 4, 1]);