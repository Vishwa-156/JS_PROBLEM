let prices = {
  apple: 50,
  banana: 20,
  mango: 30
};
let total = 0;

for (let item in prices) {
  total = total + prices[item];
}

console.log(total); 
