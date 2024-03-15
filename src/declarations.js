/**
 * * Hoisting -> when the code is running, variable go to the top of the scope, so 
 * * if I call a variable before declaring it, its value will start undefined
 */
console.log(hoisting);
var hoisting =  true;

/**
 * * When the code run log will appear undefined, cause of hoisting so code made this
 * @example
 * * var hoisting;
 * * console.log(hoisting); // return undefined
 * * hoisting =  true;
 */

/**
 * * var -> variable with global and local scope, which can optionally initialize with value,
 * * and its possible to declare it again in the code. Its possible to do hoisting.
 */
var Variable; // initialize undefined - Global Scope
var Variable = 1; // declared again but with value
Variable = 2; // change the value 

function varLocalScope(){
    var localVariable = 'Hi Func';
    console.log(localVariable) // return 'Hi Func'
}

console.log(localVariable) // return localVariable is not defined

/**
 * * let -> Read the var example but its not possible declare more than one time in the code, and
 * * its not possible to do hoisting.
 */
let indentifier; // initialized here - Global Scope - not possible to declare again
indentifier = 1; // change the value of the indentifier 

function letLocalScope(){
    let localIndentifier = 'Hi Func';
    let indentifier = 4; // in local scope its possible to declare let again
    console.log(localIndentifier) // return 'Hi Func'
    console.log(indentifier) // return 4 - in localScope will return the value that have changed
}

console.log(localIndentifier) // return localIndentifier is not defined
console.log(indentifier) // return 1 - value of global scope 

/**
 * * const -> it only has that its value can be accessed depending on the block where it is,
 * * in different can only be declared one time and he value cannot be changed but its possible if the const
 * * is an object otherwise you can only read
 */
const notChangedValue = 0;

const objectConst = {
    firstName : 'Elias',
    lastName : 'Neto',
}

console.log(objectConst)
objectConst.firstName = 'Felipe'
console.log(objectConst)