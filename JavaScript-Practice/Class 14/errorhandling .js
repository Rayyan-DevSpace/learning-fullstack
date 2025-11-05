const good_Json_Obj = '{"name": "Alisha", "age": 21}';

const bad_Json_Obj = '{ "name": "Kashif", "age": 22 ';

const data_Check = (transform_Obj) => {
    try {
        const new_data = JSON.parse(transform_Obj);
        console.log(new_data)       ;
    } catch (error) {
    //error = any variable name
    console.log(error.name);
    console.log(error.message);
}
};

data_Check(bad_Json_Obj);

console.log("Continue Execution.");
