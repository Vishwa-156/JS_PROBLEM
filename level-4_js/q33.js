//COUNT VOWELS
function Vowels(str){
    let count = 0;
     str = str.toLowerCase();


    for(let i = 0; i < str.length; i++){
        let ch = str[i];
        if(ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u'){
            count++;
        }
    }
    console.log(count);
}

Vowels("hello"); 
Vowels("skry") ;  
Vowels("CONSONANTS")   

let str= "JAVASCRIPT";
  let  str2 = str.toLowerCase();

   let obj ={
    a:1,
    e:1,
    i:1,
    o:1,
    u:1

   }
   let count =0
   for(let char of str2){
    if(obj[char]==1){
        count++
    }
}
console.log(count)