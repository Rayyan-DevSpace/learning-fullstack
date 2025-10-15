const styleImage = () => {
    const images = document.querySelectorAll('img');

    images[0].style.border = '7px solid gold ';
    images[2].style.border = '7px dashed gold';
    images[1].style.border = '7px dotted gold';
    images[3].style.border = '7px double gold';
    images[0].style.margin = '10px';
    images[1].style.margin = '10px';
    images[2].style.margin = '10px';
    images[3].style.margin = '10px';
    
    let bg = document.body;
    bg.style.backgroundColor = "azure";

};