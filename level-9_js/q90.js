let arr = ["hi", "hello", "hey"];
let longest = "";

for (let i = 0; i < arr.length; i++) {
  if (arr[i].length > longest.length) {
    longest = arr[i];
  }
}

console.log(longest);



function length(str){
    let count = 0;
    while(str[count]){
        count++;
    }
    return count;
}

function main(arr){
    let maxLen = 0;
    let longest = "";

     for(let i = 0; i < length(arr); i++){
        let currLen = length(arr[i]);

        if(currLen > maxLen){
            maxLen = currLen;
            longest = arr[i];
        }
    }
    return longest;
}
console.log(main(["Hello", "he", "the"])); 