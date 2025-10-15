const showpopup = ()=> {
    let form =  document.getElementById("form")
    console.log(form);
    form.style.marginTop = "0px"
}

const paras = document.getElementsByClassName("one");
// paras[0].style.border = "1px solid black";
// paras[0].style.color = "red";
// paras[0].style.fontSize = "20px";
// paras[0].style.fontWeight = "bold";
// paras[0].style.fontFamily = "Arial";
// // paras.style.padding = "10px";
// paras[1].style.border = "1px solid black";
// paras[1].style.color = "blue";
// paras[1].style.fontSize = "20px";
// paras[1].style.fontWeight = "bold";
// paras[1].style.fontFamily = "Arial";


let para = document.querySelector(".one") //in queryselector we need to give identifier but in get element we don't need to
para.style.color = "brown";
let paraa = document.querySelectorAll(".one") //in queryselector we need to give identifier but in get element we don't need to
// para.style.color = "brown";
// paraa[0].style.color = "green";
paraa[1].style.color = "green";
paraa[2].style.color = "green";
