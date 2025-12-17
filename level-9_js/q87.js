let n = 20;
let check = false;

for (let i = 1; i * i <= n; i++) {
  if (i * i == n) {
     check = true;
    break;
  }
}

console.log(check);

let number = 16

let root =  Math.floor(Math.sqrt(number));
if(root*root==number){
    console.log("perfect sq")
}else{
    console.log("not a perfect sq")
}