function Digits(str){
    let count = 0;

    for(let ch of str){
        if(ch >= '0' && ch <= '9'){
            count++;
        }
    }

    return count;
}

console.log(Digits("abc123"));   
console.log(Digits("2025 year")); 
console.log(Digits("no digits")); 


let str = "helllo 324376";
let count = 0;
for(let i=0; i<str.length; i++){
    if(str[i]>="0 "&& str[i]<="9"){
        count++
    }

}
console.log(count);