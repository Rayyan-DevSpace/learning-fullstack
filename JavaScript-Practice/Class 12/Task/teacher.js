const teacher_Details = ((sub) => 
    {
  let subject = sub.toUpperCase();
  console.log("Teacher Details:");
  if (subject == "CS") {
    let name = "Sir Hamza";
    let specification = "Phd in Maths";
    let experience = "15 years";

    console.log(`Name: ${name}`);
    console.log(`Specification: ${specification}`);
    console.log(`Experience: ${experience}`);
  }
  else if (subject == "IT")
    {
    let name = "Mam Huma";
    let specification = "Masters in Computer Networking";
    let experience = "5 years";

    console.log(`Name: ${name}`);
    console.log(`Specification: ${specification}`);
    console.log(`Experience: ${experience}`);
  } else if (subject == "AI") {
    let name = "Kashif";
    let specification = "Masters in AI";
    let experience = "8 years";

    console.log(`Name: ${name}`);
    console.log(`Specification: ${specification}`);
    console.log(`Experience: ${experience}`);
  } else {
    console.log("Lecturer for this particular subject is not assigned yet.");
  }
  return null;
});

// teacher_Details("Math")

// export default teacher_Details; //import all don't work here
export {teacher_Details}; // import all works for this