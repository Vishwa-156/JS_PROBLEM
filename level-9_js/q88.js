let num = 153;
let temp = num;
let sum = 0;

while (temp > 0) {
  let digit = temp % 10;
   sum += digit * digit * digit;
  temp = Math.floor(temp / 10);
}

console.log(sum == num);


let arr=String(num).split("");
console.log(arr)



let res = 0;
for(let i=0; i<arr.length; i++){
  res = res + Number(arr[i])**arr.length;
}
if(num == res){
  console.log("Number is armstrong")
}
else{
  console.log("Number is not armstrong")
}


