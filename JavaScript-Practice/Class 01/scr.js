//Funtions

//Named Function
function recArea01() {
    let length = 10;
    let breadth = 20;

    let area = length * breadth;
    console.log("Area of Rectangle1 is: ", area);
}

recArea01();

// Anonymous Function
let recArea02 = function() {
    let length = 15;
    let breadth = 25;   

    let area = length * breadth;
    console.log("Area of Rectangle2 is: ", area);
}

recArea02();

// Fat Arrow Function
let recArea03 = () => {
    let length = 20;
    let breadth = 40;

    let area = length * breadth;
    console.log("Area of Rectangle3 is: ", area);
}

recArea03();

// Parameterized Function
let length = 1920;
let breadth = 1080;

function recArea04(value1, value2)
{
    let area = value1 * value2;
    console.log("Area of Rectangle4 is: ", area);
}

recArea04(length, breadth);






