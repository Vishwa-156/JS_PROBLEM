//COUNT ELEMENTS GREATER THAN AVERAGE

let arr = [1, 2, 3, 4, 5];
// let arr = [10, 10 , 10]
let sum = 0;

for (let num of arr) {
    sum += num;
}

let avg = sum / arr.length;
let count = 0;

for (let num of arr) {
    if (num > avg) {
        count++;
    }
}

console.log(count);
