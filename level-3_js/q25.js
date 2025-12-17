function isPalindrome(num){
    let a = num;
    let rev = 0;

    while(a > 0){
        rev = rev * 10 + (a % 10);
        a = Math.floor(a / 10);
    }

    if(num === rev){
        console.log("palindrome");
    }else{
        console.log("not palindrome");
    }
}

isPalindrome(121);  
