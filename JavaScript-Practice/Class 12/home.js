import rect_Area from "./rectangle.js";
import sq_Area from "./square.js"; // destructing method - accessing only one functionha
// it has more functions in this file 
// it is hectic to access each separately
// therefore we access all functions

import * as alias from "./square.js";


// Get the type
console.log(rect_Area);
console.log(sq_Area);

// Calling Function

console.log(rect_Area(10,20));
console.log(sq_Area(5));
console.log(alias.name());
console.log(alias.age(20));
