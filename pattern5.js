/*
1
22
33
44
55
44
33
22
1
*/
function printPattern(n) {
    console.log(1);
    for (let i = 2; i <= n; i++) {
        console.log('' + i + i);
    }
    for (let j = n - 1; j >= 2; j--) {
        console.log('' + j + j);
    }
    console.log(1);
}
printPattern(5);

