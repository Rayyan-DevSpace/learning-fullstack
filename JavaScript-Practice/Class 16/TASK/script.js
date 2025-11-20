// Task to implement before next class …..
// use promises to implement this task
// Create your own array of objects
// fetch that whole array
// than fetch the people with name "Darakhshan"
// convert their name in to lower case
// display there name

const user_Data = [
  {
    id: 1,
    name: "Rayyan",
    post: "Happy to share I have completed frontend course",
    Comments: ["great work", "congratulations"],
  },
  {
    id: 2,
    name: "Darakhshan",
    post: "Ever founded that how c++ work at the background of is",
    Comment: ["insightful", "worth thinking"],
  },
  {
    id: 3,
    name: "Zunaisha",
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
        return user.name === "Darakhshan";
      });
      if (person) {
        Resolve(person);
      } else {
        Reject("User not found with this ID!");
      }
    }, 2000);
  });
};

console.log("Fetching user data...");

async function fetchUser() {

    let userData = await fetchData();
    console.log(userData);
    let personName = await fetchThroughID(userData);
    console.log(personName.name.toLowerCase());
}

fetchUser();