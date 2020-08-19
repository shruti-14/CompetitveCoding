function printBinaryGap(n) {
    if (n === 0 ||
        n === 1 ||
        Math.ceil(Math.log(n) / Math.log(2)) ===
        Math.floor(Math.log(n) / Math.log(2))) {
        console.log('0');
        return;
    }
    console.log(n.toString(2));
    const binaryString = n.toString(2);
    let gapCounts = [];
    let i = 0;
    while (i + 1 < binaryString.length) {
        if (binaryString[i] === '1') {
            let j = i + 1;
            let count = 0;
            while (j !== binaryString.length && binaryString[j] === '0') {
                count++;
                j++;
            }
            if (binaryString[j] === '1') {
                i = j;
                gapCounts.push(count);
            }
            if (j === binaryString.length) {
                break;
            }

        }
    }
    console.log(Math.max(...gapCounts));

}
printBinaryGap(51712);
