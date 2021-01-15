function miniMaxSum(arr) {
    sumArray = [];
    arrayTotalSum = arr.reduce((a,b)=> a+b,0);
    for(i=0; i<arr.length; i++) {
        sumArray.push(arrayTotalSum-arr[i]);
    }
    console.log(sumArray.sort()[0]+ ' '+ console.log(sumArray.sort()[1]));
}
miniMaxSum([1,2,3,4,5]);