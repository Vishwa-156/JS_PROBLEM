//ODD NUMBERS 1 TO N
function num(n){
let str = "";

for(let i= 2; i<=n; i++){
    if(i %2 == 1){
    str += i + " ";
    }
}
console.log(str);

}
 num(10);
