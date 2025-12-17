let arr = ["hi", "hello", "a"];
let lengths = [];

for (let i = 0; i < arr.length; i++) {
  lengths.push(arr[i].length);
}

console.log(lengths);




function length(str){
    let count = 0;
    while(str[count]){
        count++;
    }
    return count;
}
function main(arr){
    let n=length(arr);
    let res= [];
    for(let i=0; i<n; i++){
        res.push(length(arr[i]));
    }
    console.log(res)
}
main(["Hello", "he", "the"]);


