// Q-65 Check if Array Contains a Value

function Value(arr, val){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === val){
            return true;        
        }
    }
   return false;
}
console.log(Value([1, 2, 3], 2)); 
console.log(Value([1,2,3],5))


//SECOND METHOD 

let arr= [1,2,34,,5,6,9];
let value = 5;
console.log(arr.includes(value));