function uniq(arr) {
    var arrayHolder = [];
    var arrLength = arr.length;

    for(var i = 0; i < arrLength; i++) {
        if (arrayHolder.indexOf(arr[i]) === -1) {
            arrayHolder.push(arr[i]);
        }
    }

    return arrayHolder;
}