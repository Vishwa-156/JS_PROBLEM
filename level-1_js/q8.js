function divisible(n1){
    if(n1 % 3 ==0 && n1 % 5==0){
        console.log("Divisible by 3 and 5");
    }
    else{
        console.log("Not divisible by both");
    }
}
divisible(30);




function divby3(num){
    console.log(num%3==0 && num%5==0? "number is divisible by 3 and 5" : "number is not divisble by 3 and 5")
}

divby3(15);