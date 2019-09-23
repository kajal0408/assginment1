/* Q3. Explain Destructuring Assignment in ES6? Write code with example.



Destructuring Assignment - The destructuring assignment syntax allows to easily 
get values out of arrays and objects while using an array or object literal 
like syntax. This syntax is very short and very easy to read. */


var qwe = [10,20,30,40,50];
var [x,...y] = qwe;
console.log(x,y);
var [y,x] = [x,y];
console.log(x,y);