let arr = [3, 7, 2, 9];
let min = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}

console.log(min);


//USING MATH.MIN
let arr2 = [-3, -7, -2, 9];
let min2 = Math.min(...arr2);
console.log(min2); 
