console.log('-------------------- JSON -------------------------------')
//JSON: java script object notation.
// ● JSON is the short form of JavaScript Object Notation.
// ● JSON stores and transports data in text format.
// ● Using JSON we can send data between computers.
// ● JSON is language independent.(Every language can use JSON)

console.log('-------------------- JSON Data Types -------------------------------')
//---------- JSON Data Types:
// ● Numbers: In JSON, Numbers must be either an integer or a floating-point.
// ● String: In JSON, Strings are written within double quotes.
// ● Boolean: In JSON, Boolean values can be either true or false.
// ● Array: In JSON, values can be arrays.
// ● Object: In JSON, values can be objects.
// ● null: In JSON, values can be null.

const jsonObject = {
    "firstName": "Kushal",  // string
    "lastName": "Jangid",   //string
    "middleName": null,     // null
    "age": 25,              // number
    "isInCity": true,       // boolean
    "subjects": ['English', 'Maths', 'Computer'],//Array
    "address": {
        "city": "Bangalore",
        "country": "India",
    },// objedt
}
console.log(jsonObject)


console.log('-------------------- JSON Parse -------------------------------')
// ----------JSON Parse:
// ● The Data received from the web server is 'always a string'.
// ● JSON.parse(): method is used to parse the data to a javascript object.

const jsonObject2 = '{ "firstName": "Kushal", "lastName": "Jangid", "middleName": null, "age": 25, "isInCity": true, "subjects": ["English", "Maths", "Computer"], "address": { "city": "Bangalore", "country": "India" } }'// data always string
console.log(jsonObject2.lastName) // undefined; not an object 
const obj = JSON.parse(jsonObject2) // JSON.parse(); string to object
console.log(obj.lastName) // Jangid; get an object 

// ● When 'JSON.parse()' is used on an array, it will return a javascript array instead of a javascript object.
const arr = '["A","B","C"]'
const arrParse = JSON.parse(arr);
console.log(arrParse) // ['A', 'B', 'C']; get js array
//----------- Exceptions:
// ● Parsing Date:
// ○ JSON does not allow date format.
// ○ So write it as a 'string' and convert it as a 'date object'.

const jsonObject3 = '{"fname": "Hemant","lname": "Jangid","dob": "1997-10-29"}'
console.log(jsonObject3)
const parseJsonObject3 = JSON.parse(jsonObject3)
console.log(parseJsonObject3)// {fname: 'Hemant', lname: 'Jangid', dob: '1997-10-29'} here date is in string type so we want in date format
// so reassign date , convert in date formet
parseJsonObject3.dob = new Date(parseJsonObject3.dob)
// now we get proper date format.
console.log(parseJsonObject3) // {fname: 'Hemant', lname: 'Jangid', dob: Wed Oct 29 1997 05:30:00 GMT+0530 (India Standard Time)}


// ● Parsing Functions:
// ○ JSONd does not allow Functions.
// ○ So write it as a string and convert it as a function.

// const jsonObject4 = '{"fname": "Hemant","lname": "Jangid","print":function(){console.log(this.fname)}, "dob": "1997-10-29"}'
const jsonObject4 = '{"fname": "Hemant","lname": "Jangid","print":"function(){console.log(this.fname)}"}'
console.log(jsonObject4)
const parseJsonObject4 = JSON.parse(jsonObject4)
// Uncaught SyntaxError: Unexpected token 'u', ...","print":function(){"... is not valid JSON at JSON.parse (<anonymous>)
//write function as string.
console.log(parseJsonObject4) // {fname: 'Hemant', lname: 'Jangid', print: 'function(){console.log(this.fname)}'}
// so now eval the function:
// parseJsonObject4.print = eval("parseJsonObject4.print") //{fname: 'Hemant', lname: 'Jangid', print: 'function(){console.log(this.fname)}'}
parseJsonObject4.print = eval("(" + parseJsonObject4.print + ")")  //{fname: 'Hemant', lname: 'Jangid', print: ƒ}
console.log(parseJsonObject4)
console.log(parseJsonObject4.print())// Hemant






console.log('-------------------- JSON Stringify -------------------------------')
// ------------JSON Stringify:
// ● The Data sent to the web server should be a string.
// ● JSON.stringify(): method is used to convert JavaScript objects into a string.
//                                      -----------------------------------------
const jsonObject5 = {
    "fname": "Hemant",
    "lname": "Jangid",
}
console.log(jsonObject5)
const strJsonObject5 = JSON.stringify(jsonObject5)
console.log(strJsonObject5) // {"fname":"Hemant","lname":"Jangid"}, it's in string

// ● JSON.stringify(): methods can also convert JavaScript Array into a string.
//                                      -----------------------------------------
const arr2 = ["A", "B", "C"]
console.log(arr2)
const strArray2 = JSON.stringify(arr2)
console.log(strArray2) //"["A", "B", "C"]"

// ●----------- Storing Data:
// ○ In JSON,JavaScript objects can be stored as text.
// o localStorage.setItem(): to store data, and store as string.
// localStorage.setItem("key", jsonObject5)
localStorage.setItem("setData", jsonObject5)


// ●----------- Retrieving Data:
// o localStorage.getItem(): to get data
let data = localStorage.getItem(jsonObject5) // null
let data1 = localStorage.getItem("setData") // '[object Object]' actually din't store whole object.
console.log(data1)
//solution: when set data stringify it and when get data parse it.
//set and stringify
localStorage.setItem("setData", JSON.stringify(jsonObject5))
//get and parse
let data2 = localStorage.getItem("setData") // '{"fname":"Hemant","lname":"Jangid"}'
let data3 = JSON.parse(localStorage.getItem("setData")) // {"fname":"Hemant","lname":"Jangid"}
console.log(data3)


//-------- Exceptions:
// ● Stringify Date:
// ○ JSON does not allow date objects.
// ○ Date objects can be converted into strings using 'JSON.stringify()' method.
const jsonObject6 = {
    "fname": "Hemant",
    "lname": "Jangid",
    "dob": "1997-10-29",
    "today": new Date()
}
console.log(jsonObject6)
const strJsonObject6 = JSON.stringify(jsonObject6)
console.log(strJsonObject6)

// ● Stringify Functions:
// ○ JSON does not allow Functions as object values.
// ○ Function from a javaScript object will be removed while using 'JSON.stringify()' method.
// ○ Convert functions into 'string' before 'JSON.stringify()' method to include functions.

let jsonObject7 = {
    "fname": "Hemant",

    "age": function () { return 30 }
}
console.log(jsonObject7) // {fname: 'Hemant', age: ƒ}
const strJsonObject7 = JSON.stringify(jsonObject7)
console.log(strJsonObject7) // '{"fname": "Hemant"}'  
//solution: here function removed so before stringify, function must be convert into string[ toString()]
jsonObject7.age = jsonObject7.age.toString();
console.log(jsonObject7) // {fname: 'Hemant', age: 'function () { return 30 }'}
const strJsonObject7_2 = JSON.stringify(jsonObject7)
console.log(strJsonObject7_2) // '{"fname":"Hemant","age":"function () { return 30 }"}'  


console.log('-------------------- JSON Objects -------------------------------')
//------------------- JSON Objects:
// ● There is a JSON object literal inside every JSON string.
// ● In JSON, Object literals are surrounded by curly braces {}.
// ● These object literals contain key/value pairs.
// ● A colon separates the keys and values.
// ● Keys must be a 'string'.
// ● Values should always be valid JSON Datatype.[ ex; date, function not a valid data types we have aleady seen that above.]
// ● A comma separates each key-value pair.

// -----------Creation of JavaScript Objects:
// ● Javascript objects can be created in two ways
//    ○1. From a JSON object literal OR
//    ○2. By parsing a JSON String. [ Parse; string to object]

// -------------Accessing Object Values:
// ● Object values can be accessed in two ways 
// ○1. The Dot Notation (.); --when you know the key.
// ○2. The Array-Like Notation ([ ]); --when you don't know the key or key is comming as a variable

// -------------Looping an Object:
// ● for-in loop is used to loop through object properties.
const jsonObject8 = {
    "fname": "Hemant",
    "lname": "Jangid",
    "dob": "1997-10-29",
    "today": new Date()
}

for (const key in jsonObject8) {
    // console.log(key + ' : ' + jsonObject8.key) // didn't work, bcoz all the key are in variable(key)(use [] notetion) so all values are undefined
    console.log(key + ' : ' + jsonObject8[key])
}
// output:---
//fname : Hemant
//lname : Jangid
// dob : 1997-10-29
// today : Wed Oct 09 2024 15:59:18 GMT+0530 (India Standard Time)


console.log('-------------------- JSON Arrays -------------------------------')
//============== JSON Arrays:
// ● Arrays in JSON are similar to JavaScript Array and  can have values of the following types.
// ○ string
// ○ number
// ○ object
// ○ array
// ○ boolean
// ○ null

// ----------Creating a JSON Array:
// ●1. Arrays can be created using a literal.
let subjects = ["English", "Maths", "Computers"]
// ●2. Arrays can be created by parsing a JSON string.
let marks = '[45,63,43]'
let marksArray = JSON.parse(marks)
console.log(marksArray) // [45, 63, 43]

// -----------Accessing Array Values:
// ● Array values can be accessed by index.
console.log(marksArray[1]) // 63
// -----------Arrays in Objects:
// ● Objects can contain arrays, these array values can be accessed using an index.
console.log(jsonObject.subjects[1]) // Maths

// ----------Looping through an array:
// ● The values of the entire array can be accessed by using 'for' or 'for in' loop.

