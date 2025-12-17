// LCM OF TWO NUMBERS

function lcm(a, b){
    let n = 0;

    for(let i = 1; i <= a*b; i++){
        if(i % a == 0 && i % b == 0){
            n = i;
            break;
        }
    }

    console.log(n);
}


lcm(5,7);  
lcm(3,9);  



let f=20;
let s=44;

let largest = Math.min(f,s);

for(let i=largest; i<=f*s; i++){
    if(i%f==0 && i%s==0){
        console.log(i);
        return;
    }
}