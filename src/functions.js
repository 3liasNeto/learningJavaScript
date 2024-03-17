/**
 * * Functions
 * ? Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript
 * ? is similar to a procedure—a set of statements that performs a task or calculates a value,
 * ? but for a procedure to qualify as a function, it should take some input and return an output
 * ? where there is some obvious relationship between the input and the output. To use a function
 * ? , you must define it somewhere in the scope from which you wish to call it.
 * 
 * * -> to explain more, functions are block with scopes separate of global code, when we create an function
 * * we need to understand that have some instructions which will make more easier to create.
 * 
 * @example => (keyword function) -> function (Identifier) -> funcTest([params], [params2]){
 *      return params + params2
 *  }
 */
// you don`t need to define the param of the function, but with you need some value from
// an variable its possible define an param an call the value where is the parameter later
function sum(valueX, valueY){
    return valueX + valueY;
}

// to call the function we need to call the identifier where we want,
// if is just to log or set to an variable, just make like me
let calc = sum(3,4); // sum needs two value to work correctly, valueX and valueY
// valueX = 3 , valueY = 4 , sum(3,4) / 3+4 = 7
console.log(calc);

// if you want its possible to define default value to the parameters 
function division(valueX = 2, valueY = 1){
    return valueX / valueY
}

console.log(division()); // 2
console.log(division(8,2)); // 4

// return, in function have return to be possible see an return of an value in func so:
function multiplyWithOutReturn(valueX, valueY){
    const total = valueX * valueY;
}

console.log(multiplyWithOutReturn(2,4));// undefined

function multiplyWithReturn(valueX, valueY){
    const total = valueX * valueY;
    return total
}

console.log(multiplyWithReturn(2,4)); // 8 

// Anonymous Function
const plus = function(valueX,valueY){
    return valueX + valueY
}
console.log(plus(5,5)) // 10

// Arrow Functions with parameters 
const subtract = (valueX, valueY) => {
    return valueX - valueY
}

console.log(subtract(6,3)); // 3

// Arrow Function without parameters 
const message = () =>{
    return 'Hello World!'
}
console.log(message());

// Concise Arrow Function 
const valueRest = (valueX,valueY) => valueX % valueY;
console.log(valueRest(10,3)); // 1