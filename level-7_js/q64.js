function copyArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]);
    }
    return result;
}
console.log(copyArray([1, 2, 3]));         
console.log(copyArray(['x', 'y'])); 



let arr = [1,2,3];

let copyarr=new Array(...arr);
let res=[...arr];
let res2 = arr;
console.log(copyarr);
console.log(res)
console.log(res2)