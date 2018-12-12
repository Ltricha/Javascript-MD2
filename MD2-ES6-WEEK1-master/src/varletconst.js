// ES6 demo with var, let and const

// New code use let and const
// Old code, be carefull to change


// Replace var with let and const
var globalString = "I am a global variable";
var es6String = "Hi, I am a es6 variable";
var es6Const = "You cannot change my value";

window.firstScope.textContent = window.globalString;
window.secondScope.textContent = window.es6String;
window.thirdScope.textContent = window.es6Const;

console.log(window.firstScope);
console.log(window.secondScope);
console.log(window.thirdScope);

console.log(window.globalString);
console.log(window.es6String);
console.log(window.es6Const);
