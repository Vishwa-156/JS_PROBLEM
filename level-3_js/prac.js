function gcd(a, b){
    let n = 1;
    let limit = (a < b) ? a : b;

    for(let i = 1; i <= limit; i++){
        if(a % i == 0 && b % i == 0){
            n = i;
        }
    }

    return n;
}

console.log(gcd(20,15));
