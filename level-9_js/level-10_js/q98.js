let obj = { a: 1, b: 2, c: 3 };
let values = [];

for (let key in obj) {
  values.push(obj[key]);
}

console.log(values);

