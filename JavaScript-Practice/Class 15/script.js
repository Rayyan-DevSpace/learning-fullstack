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
// second taks fetch specific id data
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
        return user.id === 3;
      });
      if (person) {
        Resolve(person);
      } else {
        Reject("User not found with this ID!");
      }
    }, 2000);
  });
};

// fetchData().then((recData)=>{
//     console.log("User data fetched successfully");
//     console.log(recData);
// }).catch((err)=>{
//     console.log("Error: "+ err);

// });

console.log("Fetching user data...");

fetchData()
  .then(fetchThroughID) // fetchThroughID (data)
  .then((per) => {
    console.log(per);
  })
  .catch((err) => {
    console.log("Error: " + err);
  });
