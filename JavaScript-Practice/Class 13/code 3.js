const fetch_Data = (get_func) => {

  setTimeout(() => {

    const data = { Name: "Rayyan", age: 21 };

    get_func(data);

  }, 3000);

};

const display = (data1) => {

  console.log(data1);

};

fetch_Data(display);

console.log("I'm Coder.");
console.log(2 ** 3);
console.log(2 * 4);~
