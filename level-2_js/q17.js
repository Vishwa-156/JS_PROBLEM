//MULTIPLICATION TABLE OF A NUMBER
function table(n) {
    let str = "";
    for (let i = 1; i <= 10; i++) {
        str += (n * i) + " ";
    }
    console.log(str);
}

table(5); 
table(2); 
