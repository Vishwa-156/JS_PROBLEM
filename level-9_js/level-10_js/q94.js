let students = [
  { name: "A", marks: 50 },
  { name: "B", marks: 80 },
  { name: "C", marks: 70 }
];

let topStudent = students[0];

for (let student of students) {
    if (student.marks > topStudent.marks) {
    topStudent = student;
  }
}

console.log(topStudent.name); 


let arr = [
  { name: "A", marks: 50 },
  { name: "B", marks: 80 },
  { name: "C", marks: 70 }
];

let maxmarks = 0;
let student="";
for(let c of arr)
if(c.marks>maxmarks){
student = c.name;
maxmarks = c.marks
}

console.log(student)

