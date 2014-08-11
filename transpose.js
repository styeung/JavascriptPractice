function transpose(arr) {
    var outputArr = [];
    var numColumns = arr[0].length;
    var arrLength = arr.length;

    for (var i = 0; i < numColumns; i++){
        var tempArr = [];
        for (var j = 0; j < arrLength; j++){
            tempArr.push(arr[j][i]);
        }
        outputArr.push(tempArr);
    }

    return outputArr;
}