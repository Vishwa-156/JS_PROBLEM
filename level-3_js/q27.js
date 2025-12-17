//ALL PRIME FROM 1 TO N

function checkPrime(X){
    for(let i=2; i<=Math.floor(X/2); i++){
        if(X%i==0){
            return false;
        }
    }
    return true;
}

function main(n){
    let res=[];
    for(let i=2; i<=n; i++){
        if(checkPrime(i)){
            res.push(i);
        }
    }
    console.log(res.join(" "));
}3

main(20)