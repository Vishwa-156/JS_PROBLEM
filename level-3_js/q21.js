//COUNT DIGITS IN A NUMBER
function digit(num){
    num = Math.abs(num);          
    let count = num.toString().length;
    console.log(count);
}

digit(-78);  
