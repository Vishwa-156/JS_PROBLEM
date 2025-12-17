//COUNT NUMBERS DIVISIBLE BY 3 (1TO N)

function divby3(n){
    let str = "";
    for(let i = 1; i<= n; i++){
        if(i % 3==0){
            str += i + " ";
    }
}   
    console.log(str);
}
divby3(10)