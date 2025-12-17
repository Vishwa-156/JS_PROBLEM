//SECOND SMALLEST ELEMENT

let arr = [10, 5, 8, 20];

let smallest = Infinity;
let secondSmallest = Infinity;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
        secondSmallest = smallest;
        smallest = arr[i];
    } 
    else if (arr[i] < secondSmallest && arr[i]!== smallest) {
        secondSmallest = arr[i];
    }
}

console.log(secondSmallest);
