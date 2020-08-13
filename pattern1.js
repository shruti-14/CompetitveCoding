/* 
01
01 02
01 02 03
01 02 03 04
01 02 03 04 05
*/
function printPattern(n) {
    for (let i = 1; i <= n; i++) {
        let linePattern = '';
        for (let j = 1; j <= i; j++) {
            linePattern = linePattern + '0' + j + ' '

        }
        console.log(linePattern);
    }

}

printPattern(5);
