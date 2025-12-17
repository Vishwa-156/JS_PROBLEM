let obj = { a: 1, b: 2, c: 3 };
let keys = [];

for(let key in obj){
  keys.push(key)
}
console.log(keys);