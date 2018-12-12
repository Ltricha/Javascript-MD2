// Block scope is the scope between {}
// Using the variable outside the scope will result in an error


// Check it in the console

function blockScopeVar() {
    var functionScoped = "I am function scoped variable";
    let functionScopedToo = "I am function scoped variable too";
    let blockScoped = "I am block scoped variable";

    window.firstScope.textContent = functionScoped;
    window.secondScope.textContent = functionScopedToo;
    window.thirdScope.textContent = blockScoped;

}
blockScopeVar();


