/*
12345
2345
345
45
5
*/
function reversePattern(n) {
    for (let i = 1; i <= n; i++) {
        let linePattern = '';
        for (let j = i; j <= n; j++) {
            linePattern = linePattern + j;
        }
        console.log(linePattern);
    }
}
reversePattern(5);