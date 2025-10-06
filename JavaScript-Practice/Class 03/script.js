let list = ["apple", "orange", "Lahore", 10.5, 7, true, false];

console.log(list[0]);
console.log(list[1]);
console.log(list[2]);
console.log(list[3]);
console.log(list[4]);
console.log(list[5]);
console.log(list[6]);

console.log(list)

list[2] = "banana" //Overwite on index or Update

console.log(list)

list.pop()
console.log(list)

list.push(20)
console.log(list)

list.shift()
console.log(list)

list.unshift("Mango")
console.log(list)

console.log(`The length of the list is ${list.length}`);
console.log(`The first element of the list is ${list[0]}`);
console.log(`The last element of the list is ${list[list.length - 1]}`);