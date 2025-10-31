const student_Details = (sub) => {
  let course = sub.toUpperCase();
  console.log("Student Details:");

  if (course == "IT") {
    let name = "Ayesha";
    let age = 20;
    let rollno = 29;
    let course = "IT";
    let uni = "UOC";

    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Roll No: " + rollno);
    console.log("Course: " + course);
    console.log("University: " + uni);
  }
  else if (course == "CS") {
    let name = "Munazah";
    let age = 22;
    let rollno = 13;
    let course = "CS";
    let uni = "UOC";

    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Roll No: " + rollno);
    console.log("Course: " + course);
    console.log("University: " + uni);
  }
  else if (course == "AI") {
    let name = "Hira";
    let age = 21;
    let rollno = 19;
    let course = "AI";
    let uni = "UOC";

    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Roll No: " + rollno);
    console.log("Course: " + course);
    console.log("University: " + uni);
  }
  else{
    console.log("Sorry! we don't found student details.");
    
  }
  return null;
};

// export default student_Details; //import all don't work here
export {student_Details}; // import all works for this
