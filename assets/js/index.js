// some(arr, el => el > 1) // true - те саме, що arr.some(el => el > 1)
const arr = [1, 2, 3];

function some(array, predicate) {
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i], i, array)) {
            return true;
        }
    }
    return false;
}

console.log(some(arr, el => el > 1));

// filter(arr, el => el > 1) // [2, 3] - те саме, що arr.filter(el => el > 1)

function filter(array, predicate) {
    let filteredArray = [];

    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i], i, array)) {
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;
}

console.log(filter(arr, el => el > 1));

// reduce(arr, (sum, el) => sum + el, 0) // 6 - те саме, що arr.reduce((sum, el) => sum + el, 0)

function reduce(array, predicate, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : 0;

    for (let i = 0; i < array.length; i++) {
        accumulator = predicate(accumulator, array[i], i, array);
    }

    return accumulator;
}

console.log(reduce(arr, (sum, el) => sum + el, 0));


