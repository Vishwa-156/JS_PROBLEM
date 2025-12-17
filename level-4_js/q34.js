// function Consonants(str){
//     let count = 0;


//     for(let i = 0; i < str.length; i++){
//         let ch = str[i];

//         if(ch >= 'a' && ch <= 'z'){   
//             if(!(ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u')){
//                 count++;
//             }
//         }
//     }
//     console.log(count);
// }

// Consonants("hello");    
// Consonants("abc");      
// Consonants("a e i");    



// let input = "Hello World";

// let vowel = "AEIOUaeiou";
// let count = 0; 
// for (let i=0; i<input.length; i++){
//     if(vowel.includes(input[i])){
//         count++;
//      }
// }
// console.log(count)


// let input= "Hello World";
// let count = 0;

// let str = input.toLowerCase();
// for(let i=0; i<str.length; i++){
//     if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u"){
//         count++;
//     }
// }
// console.log(count)






let input = "Hello World";

let str =input.toLowerCase();
let count =0;
for(let i=0; i<str.length; i++){
    let ascii = str.charCodeAt(i);
    if(((ascii>=97 && ascii<=122))){
        if((ascii==97) || (ascii==101)||(ascii==105)||(ascii==111)||(ascii==117)){
            continue
        }
        else{
            count++
        }
   }
}
console.log(count)

// let str=input.toLowerCase();
// let vowels = "bcdfghjklmnpqrstvwxyz"
