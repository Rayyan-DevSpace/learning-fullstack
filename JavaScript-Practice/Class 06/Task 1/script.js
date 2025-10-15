const styleParagraphs1 = () => {
  const paragraphs = document.querySelectorAll('.one');
  console.log(paragraphs);
    paragraphs[0].style.border = '2px solid red';
    paragraphs[0].style.borderRadius = '10px';
    paragraphs[0].style.marginBottom = '10px';
    paragraphs[0].style.padding= '20px';
    paragraphs[0].style.textAlign = 'left';
    paragraphs[0].style.fontFamily = 'Arial';
    paragraphs[0].style.backgroundColor = "rgba(255, 200, 200, 1)";
    paragraphs[0].style.width = "50%";
    
    
    paragraphs[1].style.border = '2px dashed green';
    paragraphs[1].style.borderRadius = '10px';
    paragraphs[1].style.marginBottom = "10px";
    paragraphs[1].style.padding = "20px";
    paragraphs[1].style.textAlign = "center";
    paragraphs[1].style.fontFamily = 'cursive';
    paragraphs[1].style.backgroundColor = "rgba(200, 255, 200, 1)";
    paragraphs[1].style.width = "50%";
    
    paragraphs[2].style.border = '2px dotted blue';
    paragraphs[2].style.borderRadius = '10px';
    paragraphs[2].style.marginBottom = "10px";
    paragraphs[2].style.padding = "20px";
    paragraphs[2].style.textAlign = "right";
    paragraphs[2].style.fontFamily = 'Georgia';
    paragraphs[2].style.backgroundColor = 'rgb(200, 200, 255)';
    paragraphs[2].style.width = "50%";
    
}

let mypara = document.getElementById('id1');
// console.log(mypara);
mypara.style.color= 'rgba(135, 0, 0, 1)';

mypara = document.getElementById('id2');
// console.log(mypara);
mypara.style.color = 'rgba(0, 134, 0, 1)';

mypara = document.getElementById('id3');
// console.log(mypara);
mypara.style.color = 'rgba(0, 0, 135, 1)';



const styleParagraphs2 = () => {
    const paragraphs2 = document.querySelectorAll(".one");
console.log(paragraphs2);
paragraphs2[0].style.border = "3px double #ff007f";
paragraphs2[0].style.borderRadius = "20px";
paragraphs2[0].style.marginBottom = "18px";
paragraphs2[0].style.padding = "28px";
paragraphs2[0].style.textAlign = "center";
paragraphs2[0].style.fontFamily = "Montserrat, Arial, sans-serif";
paragraphs2[0].style.width = "70%";
paragraphs2[0].style.backgroundColor = "white"


paragraphs2[1].style.border = "3px double #00b894";
paragraphs2[1].style.borderRadius = "20px";
paragraphs2[1].style.marginBottom = "18px";
paragraphs2[1].style.padding = "28px";
paragraphs2[1].style.textAlign = "center";
paragraphs2[1].style.fontFamily = "Montserrat, Arial, sans-serif";
paragraphs2[1].style.width = "70%";
paragraphs2[1].style.backgroundColor = "white"

paragraphs2[2].style.border = "3px double #0984e3";
paragraphs2[2].style.borderRadius = "20px";
paragraphs2[2].style.marginBottom = "18px";
paragraphs2[2].style.padding = "28px";
paragraphs2[2].style.textAlign = "center";
paragraphs2[2].style.fontFamily = "Montserrat, Arial, sans-serif";
paragraphs2[2].style.width = "70%";
paragraphs2[2].style.backgroundColor = "white"
};
