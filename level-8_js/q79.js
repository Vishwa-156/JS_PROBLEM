let arr = [0, 1, 0, 1, 1];
let zeros = 0;
let ones = 0;

for (let num of arr) {
    if (num == 0)
        zeros++;
    
    else
        ones++;
}

console.log(zeros);
console.log(ones);


