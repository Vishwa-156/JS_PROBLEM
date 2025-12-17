let arr = [[1, 2, 3], [4, 5, 6]];
let result = [];

for (let i = 0; i < arr.length; i++) {
  let sum = 0;
 for (let j = 0; j < arr[i].length; j++) {
    sum += arr[i][j];
  }
  result.push(sum);
}

console.log(result);