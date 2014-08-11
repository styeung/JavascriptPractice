function sumRecursive(arr) {
    var arrLength = arr.length;

    if (arrLength === 1) {
        return arr[0];
    }
    else {
        var arr_answer = arr[arrLength - 1] + sum(arr.slice(0, arrLength - 1));
        return arr_answer;
    }
}

function sumIterative(arr) {
    var arrLength = arr.length;
    var output = 0;

    for(var i = 0; i < arrLength; i++) {
        output += arr[i];
    }

    return output;
}