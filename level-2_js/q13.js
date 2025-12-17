//EVEN NUMBERS 1 TO N
function num(n) {
    let str = "";

    for (let i = 1; i <= n; i++) {
        if (i % 2 == 0) {  
            str += i + " ";
        }
    }

    console.log(str);   
}

num(10);
