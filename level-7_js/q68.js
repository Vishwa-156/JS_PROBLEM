   
function isSorted(arr){
    for(let i=1; i<arr.length; i++){
        if(arr[i] < arr[i-1]){
            return false;
        }
    }
    return true;
}

console.log(isSorted([1,2,3,4]));    


// let arr = [1,2,3,7,5];

// let sorted = true;
// for(let i=0; i<arr.length; i++)
//     else if(arr[i]<arr[i-1]){
//         console.log("arr is not sorted");
//         return;
//     }
// }
// console.log("arr is sorted")
