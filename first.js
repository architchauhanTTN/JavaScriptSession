
var amount = Number(readline());
var interest = Number(readline());
var years = Number(readline());

var simple_interest = amount * interest * years;
simple_interest = simple_interest / 100;
console.log("Your simple interest is " , simple_interest);