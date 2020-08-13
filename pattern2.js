/*
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/

function printPattern(n) {
    for (let i = 1; i <= n; i++) {
        let linePattern = '';
        for (let j = 1; j <= i; j++) {
            linePattern = linePattern + j + ' '

        }
        console.log(linePattern);
    }

}

printPattern(5);
