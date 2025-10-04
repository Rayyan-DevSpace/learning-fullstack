// const purchase = (code, money) => {
//     if(code == "A1"){
//         console.log(`You are buying a Chocolate at the price of Rs ${money}/-`)
//     }
//     else if(code == "A2"){
//         console.log(`You are buying a Crisps at the price of Rs ${money}/-`)
//     }
//     else if(code == "A3"){
//         console.log(`You are buying a Soda at the price of Rs ${money}/-`)
//     }
//     else{
//         console.log("Invalid Code!")
//     };
// }

// purchase("A1", 50);

const purchaseCalc = (code, money) => {
  let chocolatePrice = 50;
  let crispsPrice = 30;
  let sodaPrice = 20;

  if (code == "A1") {
    if (money > chocolatePrice) {
      let change = money - chocolatePrice;
      console.log(`Please collect your Chocolate and Rs ${change}/- change`);
    } else if (money < chocolatePrice) {
      console.log("Insufficient Balance!");
      let Balance = chocolatePrice - money;
      console.log(`Please add Rs ${Balance}/- more to buy Chocolate`);
    } else {
      console.log(`You are buying a Chocolate at the price of Rs ${money}/-`);
      console.log("Thanks for Purchase.");
    }
  } else if (code == "A2") {
    if (money > crispsPrice) {
      let change = money - crispsPrice;
      console.log(`Please collect your Crisps and Rs ${change}/- change`);
    } else if (money < crispsPrice) {
      console.log("Insufficient Balance!");
      let Balance = crispsPrice - money;
      console.log(`Please add Rs ${Balance}/- more to buy Crisps`);
    } else {
      console.log(`You are buying a Crisps at the price of Rs ${money}/-`);
      console.log("Thanks for Purchase.");
    }
  } else if (code == "A3") {
    if (money > sodaPrice) {
      let change = money - sodaPrice;
      console.log(`Please collect your Soda and Rs ${change}/- change`);
    } else if (money < sodaPrice) {
      console.log("Insufficient Balance!");
      let Balance = sodaPrice - money;
      console.log(`Please add Rs ${Balance}/- more to buy Soda`);
    } else {
      console.log(`You are buying a Soda at the price of Rs ${money}/-`);
      console.log("Thanks for Purchase.");
    }
  } else {
    console.log("Invalid Code!");
  }
};

purchaseCalc("A1", 20
    
);
