function mergeSort(arr) {
    if(arr.length === 0 || arr.length === 1) {
        return arr;
    }
    else {
        var middle = Math.floor(arr.length / 2);
        var left = mergeSort(arr.slice(0, middle));
        var right = mergeSort(arr.slice(middle));
        return mergeSortHelper(left, right);
    }
}

function mergeSortHelper(leftArr, rightArr) {
    var outputArr = [];

    while (leftArr.length !== 0 || rightArr.length !== 0) {
        if(leftArr.length === 0) {
            while (rightArr.length !== 0) {
                outputArr.push(rightArr.shift());
            }
        }
        else if (rightArr.length === 0) {
            while (leftArr.length !== 0) {
                outputArr.push(leftArr.shift());
            }
        }
        else if (leftArr[0] < rightArr[0]) {
            outputArr.push(leftArr.shift());
        }
        else {
            outputArr.push(rightArr.shift());
        }
    }

    return outputArr;
}