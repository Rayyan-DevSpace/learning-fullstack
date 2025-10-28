const studentsData = [
  { id: 1, fname: "Ali", lname: "Haider", age: 20, score: 35 },
  { id: 2, fname: "Hamza", lname: "Rauf", age: 19, score: 85 },
  { id: 3, fname: "Kashif", lname: "Ali", age: 21, score: 45 },
  { id: 4, fname: "Asma", lname: "Mumtaz", age: 22, score: 97 },
];

console.log("MAP FUNCTION RESULT");

let fullName = studentsData.map((std) => {
  let full_name = `${std.fname} ${std.lname}`;
  let score = std.score;
  let status = std.score >= 40 ? "Pass" : "Fail";
  return { name: full_name, marks: score, result: status };
});


let container = document.getElementById("cont"); // can't run console with this line so f you want to run that, comment it down


let final = fullName.map((std) =>{
    return (`
    <h2>${std.name}</h2>
    <p>${std.marks}</p>
    <p>${std.result}</p>
    <h5>-------------------------------------</h5>
    `)
});
// <tr> 
    // <td>${std.name}</td>
    // <td>${std.marks}</td>
    // <td>${std.result}</td>
    // </tr>
console.log(final); //return array

let display = final.join('');

console.log(display); // return array elements

container.innerHTML = display;

// container.innerHTML = final.join(''); single line 


//sab se pehla data lo
// fr function banao jis ma array transform krni= data.map()
//html ma div bana k id js ma document .get id kr k connect kro

// fr transformed array ko map function se select kr k html formating ma return kro = html structure k lia map lagaya 
// fr inner html se es function ko display kro 