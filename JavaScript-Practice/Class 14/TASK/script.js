// Search for a specific user by ID …..
// If the user exists.... retrieve their transaction history
// If transaction history exists...calculate the sum of all previous transactions....

const usersWithTransactions = [
  {
    id: 1,
    name: "Raima",
    transactions: [100, 200, 50],
  },
  {
    id: 2,
    name: "Ali",
    transactions: [500, 100],
  },
  {
    id: 3,
    name: "Hina",
    transactions: [],
  },
  {
    id: 4,
    name: "Mujtaba Alam",
    transactions: [2000, 1500, 800],
  },
];

const fetch_User = (id, rec_User_Func) => {
  setTimeout(() => {
    const fetch_User = usersWithTransactions.find((iterator) => {
      return iterator.id === id;
    });
    if (fetch_User) {
      console.log("User Details: ", fetch_User);
      rec_User_Func(fetch_User, transaction_Sum);
    } else {
      console.log("No User Found!");
      rec_User_Func(null);
    }
  }, 3000);
};

const transaction_History = (rec_Trans_Func, transaction_Sum) => {
  setTimeout(() => {
    const trans_History = rec_Trans_Func.transactions;
    if (trans_History) {
      console.log("Transaction Done: ", trans_History);
      transaction_Sum(rec_Trans_Func.transactions);
    } else {
      console.log("No transaction Found!");
      transaction_Sum(null);
    }
  }, 2000);
};

const transaction_Sum = (rec_Sum_Func) => {
  setTimeout(() => {
    let sum_trans = 0;
    rec_Sum_Func.forEach((element) => {
      sum_trans = sum_trans + element;
    });
    console.log("Total Transaction:", sum_trans);
  }, 3500);
};

fetch_User(2, transaction_History);
