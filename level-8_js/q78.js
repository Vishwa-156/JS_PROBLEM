let arr = [-5, -1, 3, 7, -2];

let max = Math.max(...arr);
let min = Math.min(...arr);

console.log(max>0? max : null);
console.log(min<0? min : null);



let largest = null;
let smallest= null;

for (let num of arr) {
    if (num > 0) {
        if (largest == null || num > largest) {
            largest = num;
        }
    }
    if (num < 0) {
        if (smallest == null || num < smallest) {
            smallest = num;
        }
    }
}

console.log(largest);
console.log(smallest);


