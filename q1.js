/* Q1. write a javascript program to compare two objects to deteremine
 if the frist one contains equivalent property values to the second one.*/



 var object =  {
    name: "kajal",
    age: 19
}
var src = {
    name: "kajal",
    age: 20
}
const matches = (object, src) =>
Object.keys(src).every(key => object.hasOwnProperty(key) && object[key] === src[key]);
console.log(matches(object,src));