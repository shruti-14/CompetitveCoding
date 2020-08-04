function repeatedString(s, n) {
    // let infinteString='';
    // const size = Math.floor(n/s.length);
    // let i= 1;
    // while(i<=size) {
    //     infinteString+=s;
    //     i++;
    // }
    // let finalInfiniteString = infinteString;
    // for(let j=0;j < n%s.length; j++) {
    //     finalInfiniteString = finalInfiniteString + infinteString[j];
    // }
    // return countOfa(finalInfiniteString);
    const initialCount = s.split('').filter(e=>e==='a').length;
    const setNumber = parseInt(n/s.length);
    const remainingCount = n%s.length;
    const answer = initialCount * setNumber + s.slice(0,remainingCount).split('').filter(e=>e==='a').length;
    return answer;
}

function countOfa(s) {
    let count = 0;
    s.split('').forEach(e=>{
        if(e==='a') {
            count++;
        }
    });
    return count;
}
console.log(repeatedString('a',1000000000000));

