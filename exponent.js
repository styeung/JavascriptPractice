function exponentOne(b, n) {
    if(n === 0) {
        return 1;
    }
    else {
        return b * exponentOne(b, n - 1);
    }
}

function exponentTwo(b, n) {
    if(n === 0) {
        return 1;
    }
    else if (n === 1) {
        return b;
    }
    else {
        if((n % 2) === 0) {
            var holder = exponentTwo(b, n/2);
            return holder * holder;
        }
        else {
            var holder = exponentTwo(b, (n-1) / 2);
            return b * holder * holder;
        }
    }
}