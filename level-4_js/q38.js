function isPalindrome(str){
    let rev = "";

    for(let i = str.length-1; i >= 0; i--){
        rev += str[i];
    }

    console.log(str === rev);
}

isPalindrome("madam");
isPalindrome("racecar");
isPalindrome("hello");
