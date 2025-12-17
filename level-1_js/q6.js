function marks(m){
    if(m>=90){
        console.log("A");
    }
    else if(m>=80){
        console.log("B");
    }
        else if(m>=70){
        console.log("C");
    }
        else if(m>=60){
        console.log("D");
    }
        else{
        console.log("FAIL");
    }
}
marks(80);




function Grade(m) {
    switch (true) {
        case (m >= 90 && m <= 100):
            console.log("A");
            break;

        case (m >= 80 && m <= 89):
            console.log("B");
            break;

        case (m >= 70 && m <= 79):
            console.log("C");
            break;

        case (m >= 60 && m<= 69):
            console.log("D");
            break;

        case (m >= 0 && m <= 59):
            console.log("F");
            break;

        default:
            console.log("Invalid marks");
    }
}


Grade(92); 





function getGrade(marks) {
    switch (Math.floor(marks / 10)) {
        case 0:
        case 1:
            console.log("A"); 
        case 2:
            console.log("B"); 
        case 3:
            console.log("C");  
        case 4:
            console.log("D"); 
        case 5:
            console.log("E");
        default:
            console.log("F"); 
    }
}

console.log(getGrade(92)); 
 
