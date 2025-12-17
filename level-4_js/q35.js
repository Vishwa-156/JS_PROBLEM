function toUpper(str){
    console.log(str.toUpperCase());
}

toUpper("hello");
toUpper("Js");
toUpper("123abc");

//SECOND METHOD
let str = "Hello World";
let res="";

for(let i=0; i<str.length; i++){
    let ascii= str.charCodeAt(i);
    if(ascii>=97 && ascii<=122){
        ascii = ascii-32;
    }
    let char= String.fromCharCode(ascii);
    res=res+char;
 }  
 console.log(res);
