/*
11111
2222
333
44
5
*/
function printPattern(n) {
    for (i = 1; i <= n; i++) {
        let linePattern = '';
        for (j = n; j >= i; j--) {
            linePattern += i;
        }
        console.log(linePattern);
    }
}
printPattern(5);