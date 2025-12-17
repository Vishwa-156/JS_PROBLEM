//REMOVE DUPLICATS

function Duplicates(arr) {
    let obj = {};
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {   
            obj[arr[i]]++
            
        }
        else{
            obj[arr[i]]=1;
        }
    }
    console.log(obj)

    for(let char in obj){
        res.push(Number(char))
    }
console.log(res)

}








let arr2 = [1, 2, 2, 3, 3, 3];
let res = [];

for (let i = 0; i < arr.length; i++) {
    if (!res.includes(arr[i])) {
        res.push(arr[i]);
    }
}

console.log(res); 




















let arr = [1, 2, 2, 3, 3, 3];
let unique = [];

for (let num of arr) {
    if (!unique.includes(num)) {
        unique.push(num);
    }
}

console.log(unique);
