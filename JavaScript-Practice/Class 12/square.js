const sq_Area = ((side)=>{
let area = side * side;
    // console.log(area);
    return area;
});

const name = (()=>{
    console.log("Hello Rayyan");
    return null;
});

//3 Valid Ways to export 

export const age = (age) => {
    console.log(age);
};


export default sq_Area;

export {name};