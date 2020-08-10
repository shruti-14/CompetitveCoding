function flippingBits(N) {
    let binaryRepr = '';
    let flippedStr = '';
    while (N > 0) {
        binaryRepr = N % 2 + binaryRepr;
        N = parseInt(N / 2);
    }
    console.log(binaryRepr);
    binaryRepr = binaryRepr.padStart(32, '0');
    for (let i = 0; i < binaryRepr.length; i++) {
        flippedStr = flippedStr + parseInt(+!parseInt(binaryRepr[i]));
    }
    return parseInt(flippedStr, 2);
}

flippingBits(4);