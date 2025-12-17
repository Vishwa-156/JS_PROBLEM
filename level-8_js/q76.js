
function Left(arr) {
    if (arr.length == 0) 
        return arr;

    let first = arr.shift();
    arr.push(first);       
    return arr;
}


console.log(Left([1,2,3,4]))

// SECOND METHOD USING FOR LOOP


let arr = [1,2,3, 4, 5];
let res = []

for(let i=1; i<arr.length; i++){
    res.push(arr[0]);
}
res.push(arr[0]);
console.log(res)
        
