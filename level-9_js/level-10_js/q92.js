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
let maxCount=0;
let maxValue=0;

for(let n in obj){
    if(obj[n]>maxValue){
        maxCount=n;
        maxValue=obj[n];
    }
}
console.log(maxCount);
