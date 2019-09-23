/*  Q4. What are string and template literals in Es6? Write code with example.



-----Template literals is a way to deal with strings and specially dynamic strings.It can solve the problem of multi 
          line templates so no need to use \n or \t with backticks variables and expressions you want to concatenate to 
          your string instead of using '+' to concatenate , you will use '${variable or expression}'to define a variable or expression within curly braces */
         
         
 const fName = "raju";
 const lName = "raj";
 console.log(`first name: "${fName}"
last name :" ${lName}"`);
 console.log(" first name:" + fName + "last name:"+ lName);