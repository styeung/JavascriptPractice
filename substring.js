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


function substrings(str) {
    var outputArr = [];
    var stringLength = str.length;

    for(var i = 0; i < (stringLength); i++) {
        for(var j = i; j <= stringLength; j++) {
            if(i === j) {
                continue;
            }
            outputArr.push(str.substring(i, j));
        }
    }

    return uniq(outputArr);
}