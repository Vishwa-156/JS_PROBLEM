// //FIRST N FIBONACCI NUMBERS

// function fib(n){
//     let a = 0, b = 1;
//     let str = "";

//     for(let i = 1; i <= n; i++){
//         str += a + " ";
//         let c = a + b;
//         a=b;
//         b=c;
     
//     }

//     console.log(str);
// }

// fib(7);





// let n=10;
// let prev = 0;
// let secondPrev = 1;

// for(let i=1; i<=n; i++){
//     if(i==1){
//         res.push(0);
//         continue;
//     }
//     if(i==2){
//         res.push(1);
//         continue;
//     }
//     res.push(res[i-3]+res[i-2]);
// }
// console.log(res);


function main(n){

    for(let i=0; i<n; i++){
        console.log(fib(i))
    }
}

function fib(n){
    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }
    return fib(n-1) + fib(n-2)
}
main(10)