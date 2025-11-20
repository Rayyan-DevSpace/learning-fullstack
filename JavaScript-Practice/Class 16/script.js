const user_Data = [
  {
    id: 1,
    name: "aleena",
    post: "Happy to share I have completed frontend course",
    Comments: ["great work", "congratulations"],
  },
  {
    id: 2,
    name: "ainy",
    post: "ever founded that how c++ work at the background of is",
    Comment: ["insightful", "worth thinking"],
  },
  {
    id: 3,
    name: "afshan",
    post: "Today is our session 29 about error handling",
    Comment: "nice to hear",
  },
];

// first func fecth complete data
// second takes fetch specific id data
const fetchData = () => {
  return new Promise((Resolve, Reject) => {
    // always first parameter is set to resolve. and second for Rejection
    setTimeout(() => {
      const data = user_Data;
      if (data) {
        Resolve(data);
      } else {
        Reject("User Array not found!");
      }
    }, 3000);
  });
};

fetchData().then().catch();

// if resolve then send in then()
// if rejected then send in catch()

const fetchThroughID = (recData) => {
  return new Promise((Resolve, Reject) => {
    // always first parameter is set to resolve. and second for Rejection
    setTimeout(() => {
      const person = recData.find((user) => {
        return user.id === 6; //intentionally set to 6 to show error handling
      });
      if (person) {
        Resolve(person);
      } else {
        Reject("User not found with this ID!");
      }
    }, 2000);
  });
};

// console.log("Fetching user data...");

// fetchData()
//   .then(fetchThroughID) // fetchThroughID (data)
//   .then((per) => {
//     console.log(per);
//   })
//   .catch((err) => {
//     console.log("Error: " + err);
//   });

console.log("Fetching user data...");

async function displayData() {
  try {
    let usersData = await fetchData(); //Users_Data = returns data from fetchData
    console.log(usersData); //fetch all data

    let personData = await fetchThroughID(usersData); //personData = returns data from fetchThroughID
    console.log(personData); // fetch specific id data

    console.log("This is our Final Output: ");
    console.log("Name: " + personData.name); // fetch specific data name
  } catch (error) {
    console.log(error);
  }
}

displayData();
console.log("End of Script");
