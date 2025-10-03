console.log("Hello Rayyan");

// Variable declaration 3 keywords

// var
// - global scope
// - loose

// -> let
// - local scope
// - loose
// - not maditory to initialize in the beginning

// const
// - local scope
// - strict
// - can't change
// - maditory to initialize in the begining
let a = 10;

console.log(a);

const b = 20;
console.log(b);

a = 15;
console.log(a);

// b = 30; // error: cant assign to a constant variable
console.log(b);

// type operator
//syntax: typeof <var-name> inside output function console.log()

typeof a;

console.log(typeof b);

console.log("this is a number", a);
console.log(`this is a number ${a}`);
//tilt = template string

// premitive datatypes
// single value

// nonpremitive datatypes
// collection of values

//functions

//named functions
function info() {
  let name = "Rayyan";
  console.log(name);
}

info();

//anonyumus funtions

//function expression using variable
let calc = function () {
  let c = a * b;
  console.log(c);
};

calc();

//fat arrow function (usually used in react)

let mstr = () => {
  let text = "Ali is here";
  console.log(text);
};

mstr();


//parameterized function


function info_new(name) {
  let name = "Rayyan";
  console.log(name);
}
value = "Ali";
info_new(value);
