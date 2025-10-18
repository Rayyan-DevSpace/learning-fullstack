let countries = ["Pakistan", "USA", "Germany", "UK", "Canada", "Norway"];
let currencies = ["PKR", "USD", "EUR", "GBP", "CAD", "NOK"];
let list = document.getElementById("list");
let content = "";
for (let i = 0; i < countries.length; i++) {
  content = content + `<li>${countries[i]} = ${currencies[i]} </li>` + "\n";
  console.log(content);
}

list.innerHTML = content;
