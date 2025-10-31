import * as thr from "./teacher.js"
// import teacher_Details from "./teacher.js";
import * as std from "./student.js"
// import student_Details from "./student.js";



console.log("-----------------------------------");
console.log("Supervisor & Corresponding Students");
console.log("-----------------------------------");


let subject = "CS";
console.log(thr.teacher_Details(subject));
// console.log(teacher_Details(subject));

console.log("-----------------------------------");
console.log(std.student_Details(subject));
// console.log(student_Details(subject));

console.log("-----------------------------------");