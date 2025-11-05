// const fetch_Data = (receiving_func) => {
const fetch_Data = (get_display_func) => {
  //<--thread 2
  //webAPI<--thread 2 
  setTimeout(() => {
    const data = { Name: "Rayyan", age: 21 };
    // receiving_func(data);
    get_display_func(data);
  }, 3000);
};
//3000ms = 3s

const display = (data1) => {
  console.log(data1);
};

fetch_Data(display); //<--thread 1
// recieving function

console.log("I'm Coder."); //<--thread 3
console.log(2 ** 3);//<--thread 4
console.log(2 * 4);//<--thread 5

const name_Display = (name) => {
  console.log(name);
};
