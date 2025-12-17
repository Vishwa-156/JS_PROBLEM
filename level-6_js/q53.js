let arr = [3,7,9,3,2,4];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log(max);


let res = Math.max(...arr);
console.log(res);


// let max = Math.max(...arr);
// console.log(max);


