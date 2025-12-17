let people = [
  { name: "A", age: 17 },
  { name: "B", age: 20 },
  { name: "C", age: 18 }
];

let adults = [];

for (let i = 0; i < people.length; i++) {
  if (people[i].age > 18) {
    adults.push(people[i]);
  }
}

console.log(adults);


for(let char of people){
    if(char.age>18){
        console.log(char);
    }
}