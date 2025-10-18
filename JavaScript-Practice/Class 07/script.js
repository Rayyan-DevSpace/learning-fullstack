// const fontSize = () => {
//     let para = document.getElementById("content");
//     para.style.fontSize = "50px";

// }
const fontSize = () => {
    let para = document.getElementById("content");
    para.style.fontSize = "50px";
    para.innerHTML = "<b>Hello World</b>";

}

const changeColor = () => {
    let clr = document.getElementById("content");
    clr.style.color = "red";
}

const bgColor = () => {
    let bColor = document.getElementById("content");
    bColor.style.backgroundColor = "red";
}

const bodyColor = () => {
    let body = document.getElementById("body");
    console.log(body);
    body.style.backgroundColor = "red";
}

