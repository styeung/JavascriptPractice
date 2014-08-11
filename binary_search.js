function bsearch(arr, target) {
    var middle = Math.floor(arr.length / 2)

    if(arr[middle] === target) {
        return middle;
    }
    else if (arr[middle] > target) {
        return bsearch(arr.slice(0, middle), target);
    }
    else {
        return bsearch(arr.slice(middle + 1), target) + middle + 1;
    }
}