function bubbleSort(arr) {
    var sort = true;
    var arrLength = arr.length;

    while(sort) {
        sort = false;

        for(var i = 0; i < (arrLength - 1); i++) {
            if(arr[i] > arr[i+1]) {
                var holder = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = holder;
                sort = true;
            }
        }
    }

    return arr;
}