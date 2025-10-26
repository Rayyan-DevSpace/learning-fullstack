const studentsData = [
  { id: 1, fname: "Ali", lname: "Haider", age: 20, score: 35 },
  { id: 2, fname: "Hamza", lname: "Rauf", age: 19, score: 85 },
  { id: 3, fname: "Kashif", lname: "Ali", age: 21, score: 45 },
  { id: 4, fname: "Asma", lname: "Mumtaz", age: 22, score: 97 },
  { id: 5, fname: "Munazah", lname: "Kamran", age: 27, score: 67 },
  { id: 6, fname: "Asma", lname: "Ali", age: 24, score: 24 },
];

// let stdDisplay =studentsData.find()
let stdDisplay =studentsData.find((std)=> {

    //std ek ek kr k sab pa iterate kray ga
        return std.id == 2
        // return std.id >= 2 // to check if it returns only one object

})
//=== eska mtlb
console.log(stdDisplay);

// find only return only one object

// therefore we use filter
let stdFilter =studentsData.filter((std)=> {

    //std ek ek kr k sab pa iterate kray ga
        // return std.fname == "Asma"
        return std.fname == "Asma" && std.lname == "Ali"

})
// console.log(stdFilter);