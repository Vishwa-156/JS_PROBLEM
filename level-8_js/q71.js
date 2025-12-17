//REMOVE EVEN NUMBERS

let arr = [1, 2, 3, 4, 5];
let result = [];

for (let num of arr) {
    if (num % 2 !== 0) {
        result.push(num);
    }
}

console.log(result);


//SECOND METHOD
let arr1 = [1, 2, 3, 4, 5];

let result1 = arr.filter(num => num % 2 !== 0);

console.log(result);   

//SPLICE METHOD 

let arr2 = [1, 24, 3, 34, 5,34,43,43,3];
let result2=[];
for(let i=0; i<arr.length; i++){
    if(arr[i] % 2 == 1){
        arr.splice(i,1);
        i=i-1;
        
    }
}
 
