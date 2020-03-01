const ERROR_MESASAGE = {
    ARGUMENT_MUST_BE_NUMBER_ARRAY: 'Arguments MUST BE same size Number Array.',
    SCALAR_MUST_BE_NUMBER_OR_NUMBER_ARRAY: 'Scalar MUST BE Number or Number Array.',
};

function isNumberArray(array, size) {
    let ret = false;
    if(Array.isArray(array)) {
        if(array.every( x => typeof x == 'number')) {
            ret = true;
            if(typeof size == 'number') {
                ret = (array.length == size);
            }
        }
    }
    return ret;
}
function isNonNegativeNumberArray(array, size) {
    return  isNumberArray(array, size)
        && array.every(x => x >= 0);
}
function isRateNumberArray(array, size) {
    return isNumberArray(array, size) 
        && array.every(x => 0 <= x && x <= 1);
}
function numberArrayEqual(a1, a2) {
    if(isNumberArray(a1) && isNumberArray(a2, a1.length)) {
        return a1.every((a1_item, idx) => a1_item == a2[idx]);
    } else {
        throw new Error(ERROR_MESASAGE.ARGUMENT_MUST_BE_NUMBER_ARRAY);
    }

}
function numberArrayAdd(a1, a2) {
    if(isNumberArray(a1) && isNumberArray(a2, a1.length)) {
        return a1.map((a1_item, idx) => a1_item + a2[idx]);
    } else {
        throw new Error(ERROR_MESASAGE.ARGUMENT_MUST_BE_NUMBER_ARRAY);
    }
}

function numberArrayScalarProduct(scalar, a) {
    if(!isNumberArray(a)) throw new Error(ERROR_MESASAGE.ARGUMENT_MUST_BE_NUMBER_ARRAY);

    if(typeof scalar == 'number') {
        return a.map((x)=> scalar * x);
    } else if(isNumberArray(scalar, a.length)) {
        return a.map((x, idx) => scalar[idx] * x);
    } else {
        throw new Error(ERROR_MESASAGE.SCALAR_MUST_BE_NUMBER_OR_NUMBER_ARRAY);
    }
}
module.exports = {
    ERROR_MESASAGE, isNumberArray, isNonNegativeNumberArray,
    isRateNumberArray,
    numberArrayEqual, 
    numberArrayAdd, numberArrayScalarProduct
};
