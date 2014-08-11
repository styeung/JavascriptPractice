function range(start, end){
    if(end < start) {
        return [];
    }

    if(start === end){
        return [end];
    } else {
        var arr = range(start+1, end);
        arr.unshift(start);
        return arr;
    }
}