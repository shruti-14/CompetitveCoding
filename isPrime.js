function primality(n) {
    let i = 2;
    let isPrime = true;
    if (n === 1) {
        console.log('Not prime');
        return;
    }
    else if (n === 2) {
        console.log('Prime');
        return;
    }
    while (i <= n / 2) {
        if (n % i === 0) {
            isPrime = false;
            console.log('Not prime');
            return;
        }
        i++;
    }
    if (isPrime) {
        console.log('Prime');
        return;
    }
}

primality(7);
primality(12);