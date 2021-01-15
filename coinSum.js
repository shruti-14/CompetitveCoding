
function makeChange(total) {

    const inner = function (total, coinsArr) {
        let result = 0;
        if (total < 0) return 0;
        else if (total === 0) return 1;
        for (let i = 0; i < coinsArr.length; i++) {
            result += inner(total - coinsArr[i], coinsAvailable(coinsArr[i]));
        }
        return result;
    }
    function coinsAvailable(num) {
        const availableCoins = [200, 100, 50, 20, 10, 5, 2, 1];
        return availableCoins.filter(e => e <= num);
    }
    return inner(total, coinsAvailable(total));
}



console.log(makeChange(2));