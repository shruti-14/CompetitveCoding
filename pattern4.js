/*
1
23
456
78910
1112131415
*/

function printConsecutivePattern(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        linePattern = '';
        for (let j = 1; j <= i; j++) {
            count += 1;
            linePattern += count;
        }
        console.log(linePattern);
    }
}
printConsecutivePattern(5);