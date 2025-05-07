//! data types in javascript

//?1.string
//?2.number
//?3.boolean
//?4.undefined
//?5.null
//?6.object
//?7.array
//?8.function


var str = "Raj" //?string
let num = 10 //?number
let numWithFloat = 10.1//? float is also number data type in js
let ismarried = false //? boolean
var emptyvalue = null //? null js also js data type for empty value

var arr = ["shiva", true, 10, null, ["HTML", "Mongodb"]] //? arrays

//? objects:
// var obj = {
//     //! properties
//     //! key : pair
//     username: "Shiva",
//     company: "TYSS",
//     skills: ["html", "css", "js"],
//     exp: 4,
//  }

//!object

// let obj = {
//     username: "shiva",
//     company: "tyss",
//     skills: {
//         frontend: ["html", "CSS", "JS"],
//         backend: ["Nodejs", "Express JS"],
//         databases:["Mongodb","firebase","Oracle"]
//     }
// }

// console.log(obj.skills.databases[0]);


//! JSON: javascript object notation

//? file extension: .json ex:   db.json,  data.json
//?media type : application/json (restful web services)

//? In 2000 json was introduced by Douglas  CrockFord

//? 1. It is open standard format
//? 2. It is language independent data format
//? 3. It is lightweight  and text based format.
//? 4.In the json data represented in the form of key and value pair and curly
//?    braces holds the object and comma is used to separate the key value pairs

//! what is json?

//todo:
//1. JSON stands for javascript object notation
//2. JSON is  an open standard data interchange format
//3. JSON is lightweight and self describing
//4.JSON is originated from javascript
//5. JSON is easy to read and write
//6. JSON is language independent
//7. JSON supports data structures like arrays and objects

//! data types of json:
//? 1.string
//? 2.number
//? 3.boolean
//? 4.objects
//? 5.arrays
//? 6.null

//todo note: functions and undefined not supports in json.

//!  Rules:
//? 1.Property keys must be doublequoted.
//? 2. If you want to add the multiple properties then you should use the comma.


// var date = new Date()
// console.log(date.toJSON()); //! convert date object into json object


//! json example

// {
//     "username":"shiva",
//     "salary":35000,
//     "skills":["Mongodb","java"],
//     "isnullvalue":null,
//     "isDate":"2025-05-07",
//     "deatails":{
//         "firstName":"Shivanand",
//         "lastName":"Birjdar"
//     }
// }

//! valid number format in json

// {
//     "number_1": 10,
//     "number_2": -10,
//     "number_3":10.4,
//     "number_4":1.0E+2        
// }