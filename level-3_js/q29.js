// GCD OF TWO NUMBERS 

function gcd(a, b){
    let ans = 1;

    for(let i = 1; i <= a*b; i++){
        if(a % i == 0 && b % i == 0){
            ans = i;
        }
    }

    console.log(ans);
}

gcd(12, 18);  
gcd(5, 7);    
gcd(3, 9);    

let f = 33;
let s = 11;

let smallest = Math.min(f,s);

for(let i= smallest; i>=1; i--){
    if((f%i==0)&&(s%i==0)){
        console.log(i);
        return;
    }
}