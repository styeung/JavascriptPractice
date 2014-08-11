Array.prototype.myEach = function(func) {
    var arrLength = this.length;

    for (var i = 0; i < arrLength; i++) {
        func(this[i]);
    }
}

Array.prototype.myMap = function(func) {
    var outputArr = [];

    function nestedFunc(num){
        outputArr.push(func(num));
    }

    this.myEach(nestedFunc);

    return outputArr;
}

Array.prototype.myInject = function(func) {
    var accumulator = this[0];
    var clone = this.slice(1)

    function nestedFunc(num) {
        accumulator = func(accumulator, num)
    }

    clone.myEach(nestedFunc);

    return accumulator;
}