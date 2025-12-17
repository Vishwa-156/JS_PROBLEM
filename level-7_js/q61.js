//DOUBLE EACH ELEMENT

function doubleArray(arr) {
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i] * 2);
    }

    return res;
}

console.log(doubleArray([1, 2, 3]));   
