//SECOND LARGEST ELEMENT

function secondLargest(arr) {
    let largest = arr[0];
    let second = -Infinity;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            second = largest;
            largest = arr[i];}
        else if (arr[i] > second && arr[i]< largest) {
            second = arr[i];
        }
    }
    return second;
}
console.log(secondLargest([10, 5, 8, 20]));

