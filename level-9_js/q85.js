for (let i = 1; i <= 10; i++) {
  console.log("Table of " + i);

  for (let j = 1; j <= 10; j++) {
    console.log(i * j);
  }
}

let n = 4
  for (let i = 1; i <= 10; i++) {
    let row = "";
    for (let j = 1; j <= 10; j++) {
      row += i * j + " ";
    }
    console.log(row);
  }

