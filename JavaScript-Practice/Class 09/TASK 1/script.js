const employee_Data = [
  {
    id: 1,
    fname: "Ali",
    lname: "Haider",
    dept: "Resources",
    exp_year: 2,
    promotion_status: rejected,
    salary: 10000,
  },
  {
    id: 1,
    fname: "Aima",
    lname: "Naveed",
    dept: "Logistics",
    exp_year: 1,
    promotion_status: rejected,
    salary: 10000,
  },
  {
    id: 2,
    fname: "Hamza",
    lname: "Rauf",
    dept: "HR",
    exp_year: 2,
    promotion_status: accepted,
    salary: 35000,
  },
  {
    id: 3,
    fname: "Kashif",
    lname: "Ali",
    dept: "Marketing",
    exp_year: 3,
    promotion_status: rejected,
    salary: 25000,
  },
  {
    id: 4,
    fname: "Asma",
    lname: "Mumtaz",
    dept: "Finance",
    exp_year: 8,
    promotion_status: rejected,
    salary: 50000,
  },
];
console.log("MAP FUNCTION RESULT");

let EmpData = employee_Data.map((emp) => {
  let full_name = `${emp.fname} ${emp.lname}`;
  let exp_yr = emp.exp_year;
  let promotion_status = emp.promotion_status;
  let salary_increment =
    emp.salary <= 20000 && emp.exp_year >= 2
      ? "We will increment your Salary Next Month"
      : "Sorry, your experience is not meeting Salary increment requirements";
  return {
    name: full_name,
    experience: exp_yr,
    promotion: promotion_status,
    salary_inc: salary_increment,
  };
});


