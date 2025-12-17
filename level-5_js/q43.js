// function containsChar(str, ch) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === ch) return true;
//     }
//     return false;
// }

// console.log(containsChar("hello"))




function containsChar(str, ch) {
    return str.includes(ch);
}

console.log(containsChar("hello", "e")); 
console.log(containsChar("hello", "a")); 
console.log(containsChar("JavaScript", "S")); 
