//PRODUCT OF DIGITS

function productOfDigits(num){
    let product = 1;

    while(num > 0){
        (product = product * (num % 10));
        num = Math.floor(num / 10);
    }

    console.log(product);
}

productOfDigits(123);   