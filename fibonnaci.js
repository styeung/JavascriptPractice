function fibonacciRec(n) {
    if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0,1];
    } else {
        var x = fibonacciRec(n-1);
        var xLength = x.length;
        x.push(x[xLength-2] + x[xLength-1])
        return x;
    }
}

function fibonacciItr(n) {
    var outputArr = [];
    var outputLength;

    for(var i = 0; i < n; i++) {
        if (i === 0){
            outputArr.push(0);
        } else if (i === 1){
            outputArr.push(1);
        } else {
            outputLength = outputArr.length;
            outputArr.push(outputArr[outputLength-2] + outputArr[outputLength-1]);
        }
    }

    return outputArr;
}