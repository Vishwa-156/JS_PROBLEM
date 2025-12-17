function countLower(str){
    let count = 0;
    for(let ch of str){
        if(ch >= 'a' && ch <= 'z'){
            count++;
        }
    }
    return count;
}

console.log(countLower("HeLLo"));       
console.log(countLower("JAVASCRIPT"));  
console.log(countLower("Js 101"));      

let str = " HJBFERGihefi"
let count = 0;
for(let i=0; i<str.length; i++){
    let ascii=str.charCodeAt(i);
    if(ascii>=97 && ascii<=122){
        count++
    }
}
console.log(count)