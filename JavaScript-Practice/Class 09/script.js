let student = ["Ali", "Hamza", "Kashif", "Asma"];

// passing one function into other function is called call back

console.log("FOR LOOP RESULT");

for (var i = 0; i < student.length; i++) {
  console.log(student[i]);
}
console.log("FOR EACH FUNCTION RESULT");

student.forEach((name) => {
  console.log(name);
});

// how function invoke in foreach method
// anonyumus function
// fat arrow function

console.log("FOR EACH FUNCTION RETURN VALUE");

//what foreach returns
let std = student.forEach((name) => {
  console.log(name);
});
console.log(std); // undefined

// Map() function of react
// ternary operator

const studentsData = [
  { id: 1, fname: "Ali", lname: "Haider", age: 20, score: 35 },
  { id: 2, fname: "Hamza", lname: "Rauf", age: 19, score: 85 },
  { id: 3, fname: "Kashif", lname: "Ali", age: 21, score: 45 },
  { id: 4, fname: "Asma", lname: "Mumtaz", age: 22, score: 97 },
];

console.log("MAP FUNCTION RESULT");

let fullName = studentsData.map((std)=>{
    // return `${std.fname} ${std.lname}`;
    // return `${std} ${std}`;
    
    let full_name = `${std.fname} ${std.lname}`;
    let score = std.score;
    let status = std.score >= 40 ? "Pass" : "Fail";
    return {name: full_name ,marks:score, result: status};
});

// map returns array
// for each don't return array instead return value

console.log(fullName);  
// map function is used to update array data and return it in a new array
