function subsets(arr) {
    if (arr.length === 0) {
        var empty = [];
        return [empty];
    }
    else {
        var outputArr = subsets(arr.slice(0, arr.length - 1));
        var outputClone = []

        for (var i = 0; i < outputArr.length; i++) {
            outputClone.push(outputArr[i].slice(0));
        }

        var lastItem;
        var currentAddition;

        for (var i = 0; i < outputClone.length; i++) {
            lastItem = arr[arr.length - 1];
            outputClone[i].push(lastItem);
            outputArr.push(outputClone[i]);

        }
        return outputArr;
    }
}