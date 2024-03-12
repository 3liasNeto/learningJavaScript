/**
 * * Basic Arithmetic Operator 
 * This is easy so if you have learn a bit of math, this part will be easy.
 * ? Add: +
 * ? Subtract: -
 * ? Multiply: *
 * ? Divide: /
 * ? Remainder: %
 */

// * Add 
var calcAdd = 1 + 1 // 2 

// * Subtract 
var calcMinus = calcAdd - 1 // 2 - 1 = 1 

// * Multiply 
var calcMult = calcMinus * 5 // 1 * 5 = 5 

// * Divide 
var calcDivide = calcMult / 2 // 5 / 2 = 2.5

/**
 * * Remainder 
 * ? Remainder, is the rest of a division so: 
 * @func -> 9 / 2 = 4.5 but in Remainder will be divided one time so 
 * -> 9 / 2 = 4 and the rest of 9 - 8 will be the value of the calc 
 * so ==> 9 % 2 = 1
 */
var calcRest = 9 % 2 // 

/**
 * ? Division Calc
 * *  9 / 2 = 4.5
 * *  9 - 8 = 1 -> 10 - 10 = 0
 * 
 * ? Remainder Calc
 *  * 9 % 2 = 1 
 *  * 9 - 8 = 1
 */

/**
 * * Have an way to increase the calc i some situations
 * * you can use theses operator, is equal an normal Arithmetic operator but
 * * with an plus: 
 * 
 * ? OK, Imagine you have this variable 
 * @var initialValue = 5; 
 * ? But you wont to add 5 to value initialValue, so you do this normally
 * @initialValue = initialValue + 5 // * But Have an way more fast 
 * ! initialValue += 5 
 * ? on this way you are saying that initiaValue = initialValue + 5 the same thing
 * ? its possible to made this if other operator like here: 
 * ! initialValue -= 1 // initialValue - 1
 * ! initialValue /= 2 // initialValue / 2
 * ! initialValue *= 2 // initialValue * 2
 */
let initialValue = 5
console.log(initialValue);

initialValue += 5; // initialValue + 5 = 10
console.log(initialValue);

initialValue -= 2; // initialValue - 2 = 8
console.log(initialValue);

initialValue /= 2; // initialValue + 2 = 4
console.log(initialValue);

initialValue *= 2; // initialValue * 2 = 8
console.log(initialValue);

/**
 * * Increment and Decrement
 * ? Simple to, just add 1 and decrease one
 */
let variantMoney = 10;

// * Increment
variantMoney++; // 10 + 1
console.log(variantMoney);
// * Decrement
variantMoney--; // 10 - 1
console.log(variantMoney);