function frequency(arr) {
    let obj = {};

    for(let i=0; i<arr.length; i++){
        let num = arr[i]

        if(obj[num] == undefined){
            obj[num] = 1;
        }else{
            obj[num]++;
        }

    }
    return obj;
}

console.log(frequency([1,2,2,3]));





let arr = [1,2,3,4,1,3,5,3,2,3,7];

let obj={};

for(let n of arr){
    if(obj[n]== undefined){
        obj[n]=1
    }
    else{
        obj[n]++
    }
}
console.log(obj);












