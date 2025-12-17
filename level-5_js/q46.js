function countUpper(str){
    let count = 0;
    for(let ch of str){
        if(ch >= 'A' && ch <= 'Z'){
            count++;
        }
    }
    return count;
}

console.log(countUpper("HeLLo"));     
console.log(countUpper("javascript"));
console.log(countUpper("JS 101"));  


let str = " HJBFERG"
let count = 0;
for(let i=0; i<str.length; i++){
    let ascii=str.charCodeAt(i);
    if(ascii>=65 && ascii<=90){
        count++
    }
}
console.log(count)