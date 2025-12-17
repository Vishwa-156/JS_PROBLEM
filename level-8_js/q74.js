

function intersection(arr1, arr2) {
    let result = [];

    for (let i = 0; i < arr1.length; i++) {

        if (arr2.includes(arr1[i])) {
                result.push(arr1[i]);
            }
        

    }
return result;
  
}
console.log(intersection([1, 1, 2, ], [1, 2, 2])); 

     




let arr1 = [1,1,2,3,4];
let arr2 = [1,3,4,1,2,3,4];
let res=[];
for(let i=0; i<arr1.length; i++){
    if(arr2.includes(arr1[i]) && !(res.includes(arr1[i]))){
        res.push(arr1[i])
    }
}
console.log(res);