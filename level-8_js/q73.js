function concatArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}


console.log(concatArrays([1, 2], [3, 4]));     




//CONCAT METHOD
let arr1 = [1, 2];
let arr2 = [3, 4];

let result = arr1.concat(arr2);
console.log(result); 


//FOR LOOP


for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i]);
}

for (let i = 0; i < arr2.length; i++) {
    result.push(arr2[i]);
}
console.log(result); 
