/*5. Write a program for converting two arrays into a single array using
arrow-function, map and iterators (without ‘for’) of Javascript ES6*/


var a1= ['my','name','is'];
var a2= ['kajal','.'];
a2.map( wrds => {a1.push(wrds);})

console.log(a1);

// here we are pushing the values of a2 to the a1 by using map and arrow function.