/*Counting valleys */

const n = 8;
const steps = 'UDDDUDUU';

// Complete the countingValleys function below.
function countingValleys(n, s) {
    let levels = [0];
    let valleys = 0;
    s.split('').forEach((e, index) => {
        e === 'U' ? levels.push(levels[index] + 1) : levels.push(levels[index] - 1)
    });
    valleys = levels.filter((e, index) => {
        return e === 0 && levels[index - 1] === -1
    }).length;
    return valleys;
}
console.log(countingValleys(n, steps));
