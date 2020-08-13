/*
1
12
123
1234
12345
1234
123
12
1
*/
function printPattern(n) {
    for(let i= 1;i<=n;i++) {
        let linePattern = '';
        for(let j=1;j<=i;j++){
            linePattern += j;
        }
        console.log(linePattern);
    }
    for(let i=n-1;i>=1;i--) {
        let secondPattern = '';
        for(let j=1;j<=i;j++) { 
            secondPattern += j;
        }
        console.log(secondPattern);
    }
}
printPattern(5);