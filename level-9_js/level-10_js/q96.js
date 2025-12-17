let marks = { math: 80, science: 90, english: 70 };
let sum = 0;
let count = 0;

for (let subject in marks) {
  sum += marks[subject];
  count++;
}

console.log(sum/count);