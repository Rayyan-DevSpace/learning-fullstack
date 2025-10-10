// const getEmail = () => {
//     let email = prompt("Please enter your email:"); 
//     if (email) {
//         alert(`You entered: ${email}`);
//     } else {
//         alert("No email entered.");
//     }
// };

// getEmail();


const contentStyle = () => {
    let content = document.querySelector('section');
    console.log(content);
    content.style.backgroundColor = '#f0f8ff';
    content.style.color = '#333';   
    content.style.fontFamily = 'Arial, sans-serif';
    content.style.borderRadius = '10px';
    content.style.width = '40%'

    let heading = content.querySelector('h2');
    heading.style.color = '#007acc';

    let paragraph1 = content.querySelector('#one');
    paragraph1.style.fontSize = '20px';
    paragraph1.style.lineHeight = '1.5';
    
    let paragraph2 = content.querySelector('#two');
    paragraph2.style.fontSize = '20px';
    paragraph2.style.lineHeight = '1.5';

    let underline = paragraph2.querySelector('u');
    underline.style.color = "#ff4500";
    underline.style.fontWeight = 'bold';

};
