const good_Json_Obj = '{"name": "Alisha", "age": 21}';

const bad_Json_Obj = '{ "name": "Kashif", "age": 22 ';

//json object half loaded

const data = (transform_Obj) => {
    const new_data = JSON.parse(transform_Obj);
    console.log(new_data);
};

data(good_Json_Obj);
// data(bad_Json_Obj);//error



