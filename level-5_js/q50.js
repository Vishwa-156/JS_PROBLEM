// function toggleCase(str){
//     let result = "";
//     for(let ch of str){
//         if(ch >= 'a' && ch <= 'z'){
//             result += ch.toUpperCase();
//         }
//         else if(ch >= 'A' && ch <= 'Z'){
//             result += ch.toLowerCase();
//         }
//         else{
//             result += ch; 
//         }
//     }
//     return result;
// }

// console.log(toggleCase("HeLLo")); 
// console.log(toggleCase("abcDEF")); 


//SECOND METHOD
let str = "hEllO";
let res2 = "";
for(let i=0; i<str.length; i++){
    let ascii=str.charCodeAt(i);
    if(ascii>65 && ascii<=90){
        ascii = ascii+32;
    }
    else if(ascii>=97 && ascii<=122){
        ascii = ascii-32;
    }
    res2= res2+String.fromCharCode(ascii);
}
console.log(res2)


// for(let i=0; i<str.length; i++){
//     if(str[i]===str[i].toUpperCase()){
        
//     }
// }

