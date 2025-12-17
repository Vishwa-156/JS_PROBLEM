//FIRST N MULTIPLES OF 7
function multiplesOf7(n){
    let str = "";

    for(let i = 1; i <= n; i++){
        str += (7 * i) + " ";
    }

    console.log(str);
}

multiplesOf7(3);  
