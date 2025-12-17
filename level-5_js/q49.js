function removeDigits(str){
    let result = "";
    for(let ch of str){
        if(!(ch >= '0' && ch <= '9')){
            result += ch;
        }
    }
    return result;
}

console.log(removeDigits("abc123"));
console.log(removeDigits("ABCdef"));