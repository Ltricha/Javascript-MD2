// "use strict";

// Variables in JavaScript are function scoped
// Three ways to make a global variable
// 1. Variabele declared with var belongs to the window
// 2. Assigned to the global object
// 3. Variables without defining = implied global


// Use the Debugger to see the scopes of the variables
var IDoBelongToTheWindow = "Hi";

function notAGlobalVar() {
    var  IDoBelongToTheWindow = "I am in the function scope";
    window.assignedToGlobal = "I am on the global scope";
    wrong = "Oh oh, I broke out of the function scope";
}
notAGlobalVar();

window.firstScope.textContent = window.IDoBelongToTheWindow;
window.secondScope.textContent = window.assignedToGlobal;
window.thirdScope.textContent = window.wrong;


// Uncomment the strict rule to see what happens.

