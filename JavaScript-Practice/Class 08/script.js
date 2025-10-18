// for(let i=0; i<10; i++) {
//     console.log("Chakwal");

// }



// console.log("Chakwal");
// console.log("Chakwal");


// for(let i=0; i<10; i++) {
//     setTimeout(()=>{
//         console.log(i);
//     }, 1000 * i);
// }

// let num = 3;
// for(let i=1; i<=10; i++) {
//     let output;
//     output = num*i;
//     console.log(num , " x ",i ," = ",output);
// }
    

// let subjects = ["SNA", "MAD", "COA","CSE","CN"]

// for(let i = 0; i<subjects.length;i++)
// {
//     console.log(subjects[i]);
    
// }


// let subjects = ["SNA", "MAD", "COA","CSE","CN"]

let subjects = ["SNA", "MAD", "COA","CSE","CN"]
let list= document.getElementById("list");
let content ='';
for(let i = 0; i<subjects.length;i++)
    {
        content = content + `<li>${subjects[i]}</li>` + '\n';
        console.log(content)
    }
  
    list.innerHTML = content;