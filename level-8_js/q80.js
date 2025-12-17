let arr = [1, 2, 3, 4, 5];
let evens = [];
let odds = [];

for (let num of arr) {
    if (num % 2 == 0) {
        evens.push(num);
    } else {
        odds.push(num);
    }
}

console.log("evens =", evens);
console.log("odds =", odds);


