let arr = [1, 2, 3];
let res="";
for (let i = 0; i < arr.length; i++) {
    res= res+arr[i]
    console.log(arr[i]);
}

//SPREAD METHOD
let arr2 = [1, 2, 3];
console.log(...arr2); 

//JOIN METHOD
let arr3 = [1, 2, 3];
console.log(arr3.join("-"));     


