function binarySearch(arr, ele) {
    function recurBinSearch(l, r) {
        const mid = Math.floor((l+r)/2);
        if(mid === l || mid=== r) {
            return arr[mid] === ele ? mid : -1;
        }
        else if(arr[mid] === ele) return mid;
        else if(arr[mid] > ele) return recurBinSearch(l, mid)
        else return recurBinSearch(mid+1, r);
    };

    return recurBinSearch(0, arr.length)

}
console.log(binarySearch([1,2],5));