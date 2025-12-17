//PRODUCT 1 TO N
function sum(n) {
    let total = 1;   
    for (let i = 1; i <= n; i++) {
        total = total * i;
    }

    console.log(total);
}

sum(4); 