function age (a){
    if(a>0 && a<=12){
        console.log("CHILD");
    }
    else if(a>=13 && a<=19){
        console.log("TEENAGER");
    }
    else{
        console.log("ADULT");
    }
}
age(10);