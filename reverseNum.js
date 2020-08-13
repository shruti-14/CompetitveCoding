/*
5
54
543
5432
54321
*/
function printReverse(n) {
    for (let i = 1; i <= n; i++) {
        let linePattern = '';
        for (j = n; j > n - i; j--) {
            linePattern += j;
        }
        console.log(linePattern);
    }
}
printReverse(5);