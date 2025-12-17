function removeVowels(str){
    let result = "";
    let vowels = "aeiouAEIOU";

    for(let ch of str){
        if(!vowels.includes(ch)){
            result += ch;
        }
    }
    return result;
}

console.log(removeVowels("hello"));      
console.log(removeVowels("JavaScript")); 
console.log(removeVowels("AEIOU"));    


//SECOND METHOD
function removeVowels(str){
    let result = "";

    for(let ch of str){

        if(ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u' ||
            ch === 'A' || ch === 'E' || ch === 'I' || ch === 'O' || ch === 'U'
        ){
            
        }
        else{
            result += ch;   
        }
    }

    return result;
}

console.log(removeVowels("hello"));     

console.log(removeVowels("AEIOU"));      