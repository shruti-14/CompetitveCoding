/*
1
22
333
4444
55555
*/
function repeatPattern(n) {
    for (let i = 1; i <= n; i++) {
        let linePattern = '';
        for (j = 1; j <= i; j++) {
            linePattern = linePattern + i;
        }
        console.log(linePattern);
    }
}
repeatPattern(5);