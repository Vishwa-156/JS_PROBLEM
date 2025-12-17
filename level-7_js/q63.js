//REVERSE AN ARRAY

function reverseArray(arr) {
    let result = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}

console.log(reverseArray([1, 2, 3]));     
console.log(reverseArray(["a", "b", "c"]));
         



//Second method

function reverseArray(arr) {
    return arr.reverse();
}
console.log(reverseArray([1, 2, 3]));       
console.log(reverseArray(["a", "b", "c"]));


//POINTERS METHOD
let arr = [1,2,3,4]
let i=0;
let j=arr.length-1;
while(i<=j){
    let b=arr[i];
    arr[i]=arr[j]
    arr[j]=b;
    //[arr[i],arr[j]]=[arr[j],arr[i]];
    i++;
    j--;
}
console.log(arr);

