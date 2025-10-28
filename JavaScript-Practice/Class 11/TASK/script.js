const employee_Data = [
  {
    id: 1,
    fname: "Ali",
    lname: "Haider",
    dept: "Resources",
    exp_year: 2,
    promotion_status: "rejected",
    salary: 10000,
  },
  {
    id: 1,
    fname: "Aima",
    lname: "Naveed",
    dept: "Logistics",
    exp_year: 1,
    promotion_status: "rejected",
    salary: 10000,
  },
  {
    id: 2,
    fname: "Hamza",
    lname: "Rauf",
    dept: "HR",
    exp_year: 2,
    promotion_status: "accepted",
    salary: 35000,
  },
  {
    id: 3,
    fname: "Kashif",
    lname: "Ali",
    dept: "Marketing",
    exp_year: 3,
    promotion_status: "rejected",
    salary: 25000,
  },
  {
    id: 4,
    fname: "Asma",
    lname: "Mumtaz",
    dept: "Finance",
    exp_year: 8,
    promotion_status: "rejected",
    salary: 50000,
  },
];
console.log("Employee Data Result");

let EmpData = employee_Data.map((emp) => {
  let full_name = `${emp.fname} ${emp.lname}`;
  let exp_yr = emp.exp_year;
  let promotion_status = emp.promotion_status;
  let salary_increment =
    emp.salary <= 20000 && emp.exp_year >= 2
      ? "We will increment your Salary Next Month"
      : "Sorry, your experience is not meeting our salary increment policy";
  return {
    name: full_name,
    experience: exp_yr,
    promotion: promotion_status,
    salary_inc: salary_increment,
  };
});

 // can't run console with this line so f you want to run that, comment it down

// let output = document.getElementById("output");
let html_Array = EmpData.map((emp) => {
 return(`<tr>
    <td>${emp.name}</td>
    <td>${emp.experience}</td>
    <td>${emp.promotion}</td>
    <td>${emp.salary_inc}</td>
  </tr>`)
});
console.log(html_Array);


let final_Output = html_Array.join("")

console.log(final_Output);
let header= `<tr>
<th>Employee Name</th>
<th>Experience</th>
<th>Promotion Status</th>
<th>Salary Increment</th>
</tr>`
output.innerHTML = header + final_Output;
