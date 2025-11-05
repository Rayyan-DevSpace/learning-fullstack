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

//scenario : if there is no person then there should be no post on linkedin
//goal: we want to see comments

//check if the person exist
//post exist or not                        ^ dependent on first
//comments exits or not                    ^ dependent on second

//find - one search
//filter - more than one search

const fetch_User = (id, rec_user_func) => {
  setTimeout(() => {
    const fetch_User = user_Data.find((iterator) => {
      return iterator.id === id;
    });
    if (fetch_User) {
      //fetch_User == true
      console.log(fetch_User);
      rec_user_func(fetch_User, comments);
    } else {
      console.log("User not found");
      rec_user_func(null);
    }
  }, 3000);
};

const fetch_Post = (rec_post_func, rec_comment_func) => {
  setTimeout(() => {
    const fetch_Post = rec_post_func.post;
    if (fetch_Post) {
      console.log(fetch_Post);
      rec_comment_func(rec_post_func.Comment[0]);
    } else {
      console.log("No post found");
      rec_comment_func(null);
    }
  }, 5000);
};

//Also fine and prefered below one
// const fetch_Post = (rec_post_func, comments) => {
//   setTimeout(() => {
//     const fetch_Post = rec_post_func.post;
//     if (fetch_Post) {
//       console.log(fetch_Post);
//       comments(rec_post_func.Comment[0]);
//     } else {
//       console.log("No post found");
//       comments(null);
//     }
//   }, 5000);
// };

const comments = (rec_comment_func) => {
  setTimeout(() => {
    console.log(rec_comment_func);
  }, 6000);
};

// comments (rec_post_func.Comment[0])
fetch_User(2, fetch_Post);
