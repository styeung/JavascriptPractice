function twoSum(arr) {
    var outputArr = [];
    var arrLength = arr.length;

    for (var i = 0; i < arrLength; i++) {
        for (var j = i; j < arrLength; j++) {
            if (i === j) {
                continue;
            } else if (arr[i] + arr[j] === 0) {
                outputArr.push([i,j]);
            }
        }
    }

    return outputArr;
}