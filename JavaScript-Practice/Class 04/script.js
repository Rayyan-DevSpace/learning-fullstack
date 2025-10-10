// const showinfo = () => {
//     alert("Welcome Doston! It's Class 04 of JavaScript Front-end Development Course");
// };

// showinfo();


// const confirmInfo = () => {
//     confirm("Do you want to continue?");
// };

// confirmInfo();


// const getInput = () => {
//     let userName = prompt("Please enter your name", "Harry Potter");
//     if(userName){
//         alert(`Hello ${userName}! Welcome to JavaScript Front-end Development Course`);
//     }
// }
// getInput();

const colorChange = () => {
    let section_One = document.querySelector("#one1")

    // console.log(section_One);

    let sect_one_para = section_One.querySelector("p");
    console.log(sect_one_para);

    sect_one_para.style.color = "red";  
    sect_one_para.style.backgroundColor = "yellow";  
    sect_one_para.style.fontSize = "50px";    
}
