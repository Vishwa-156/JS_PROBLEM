
function Right(arr) {
    if (arr.length == 0) 
        return arr;

    let last = arr.pop(); 
    arr.unshift(last)
    return arr; 
}

console.log(Right([1,2,3,4]))


// let res = [arr[arr.length-1]];
// for(let i=0; i<arr.length; i++){
    
// }