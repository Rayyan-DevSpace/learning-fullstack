const styleImage = () => {
    const images = document.querySelectorAll('img');

    images[0].style.border = '3px solid gold ';
    images[2].style.border = '3px dashed gold';
    images[1].style.border = '3px dotted gold';
    images[3].style.border = '3px double gold';
    images[0].style.margin = '10px';
    images[1].style.margin = '10px';
    images[2].style.margin = '10px';
    images[3].style.margin = '10px';
    
    let bg = document.body;
    bg.style.backgroundColor = "azure";

};