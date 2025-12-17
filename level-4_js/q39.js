function countA(str) {
    let count = 0;
    for (let char of str) {
        if (char === 'a' || char === 'A') {
            count++;
        }
    }
    return count;
}

console.log(countA("banana"));  // 3
console.log(countA("Apple"));   // 1
console.log(countA("xyz"));     // 0
