function rotLeft(a, d) {
    let answerArray = [];
    answerArray = answerArray.concat([...a.slice(d), ...a.slice(0, d)]);
    console.log(answerArray);

}
rotLeft([1, 2, 3, 4, 5], 4);
