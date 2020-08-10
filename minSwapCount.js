function minimumSwaps(arr) {
    let swaps = 0;
    for (let i = 0; i < arr.length; i++) {
        let currentEle = arr[i];
        if (arr[i] !== i + 1) {
            let indexToSwap;
            for (let j = i; j < arr.length; j++) {
                if (arr[j] === i + 1) {
                    indexToSwap = j;
                }
            }
            arr[indexToSwap] = currentEle;
            arr[i] = i + 1;
            swaps++;
        }
    }
    console.log(swaps);
}

minimumSwaps([2, 3, 4, 1, 5]);