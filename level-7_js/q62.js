//SQUARE EACH ELEMENT

function squareArray(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * arr[i]);
    }

    return result;
}

console.log(squareArray([1, 2, 3]));  
console.log(squareArray([-2, 4]));  
    
