/*Q6. Write a regex in Javascript ES6 to check if the email address provided is valid
or not? */
var email = "kajala@fmail.com";
var reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/;

var t1 = reg.test(email);
console.log(t1);
if (!t1)
{
    console.log("please fill correct email address")
}
