/**
 * * If ... else
 * ? The if...else statement executes a statement if a specified condition is truthy.
 * ? If the condition is falsy, another statement in the optional else clause will be executed.
 * ? Has to else if, who is an mid statement of if, when need more than one condition to verify is
 * ? useful to use the else if.
 */
let conditionOne = true;
let conditionTwo;

if(conditionOne){
// verify that the conditionOne is true, and if is run the instruction of this scope
console.log(conditionOne);
}else if(conditionTwo){
// verify that the conditionTwo is true, and if is run the instruction of this scope
console.log(conditionTwo);
}else{
// If no conditions is met, run the code block 
console.log('Error, no conditions met');
}

/**
 * * Switch
 * ? The switch statement evaluates an expression, matching the expression's value against a series of case clauses,
 * ? and executes statements after the first case clause with a matching value, until a break statement is encountered.
 * ? The default clause of a switch statement will be jumped to if no case matches the expression's value.
 */
const fruit = 'apple';

switch(fruit){
    case 'apple':
        console.log(fruit);
    break;
    case 'orange':
        console.log(fruit);
    break;
    case 'melon':
        console.log(fruit);
    break;
    default:
        console.log('Error fruit not founded ', fruit);
    break;
}


/**
 * * Comparison Operators
 * ? Less than: < 
 * ? Greater than: >
 * ? Less than or equal to: <=
 * ? Greater than or equal to: >=
 * ? Is equal to: ===
 * ? Is not equal to: !== 
 */

const lessThan = 1 < 2 ; // one is less than two, if is return will be true
console.log(lessThan);

const lessThanOrEqual = 1 <= 1 ; // one is less than or equal one, if is return will be true
console.log(lessThanOrEqual);

const greaterThan = 1 > 2 ; // one is greater than two, if not is return will be false
console.log(greaterThan);

const greaterThanOrEqual = 1 >= 1 ; // one is greater than or equal one, if is return will be true
console.log(greaterThanOrEqual);

const equal = 1 === 1 ; // one is equal one, if is return will be true
console.log(equal);

const notEqual = 1 !== 1 ; // one is not equal one, if is return will be true
console.log(notEqual);

/**
 * * Logical Operators
 * ? And : &&
 * ? Or : ||
 * ? Not operator : !   
 */

/**
 * * And 
 * ? When AND(&&) is used, all values need to be true or equal, to validation return true
 * @example -> if equal return true and notEqual to, const and will be return true
 */
const and = equal && notEqual  // equal = true and notEqual = false, so this will return false

/**
 * * Or 
 * ? When OR(||) is used, one value need to be true or equal, to validation return true
 * @example -> if equal return true and notEqual not, const will be return true
 */
const or = equal || notEqual // equal = true or notEqual = false, here needs to find an value that is true, 
// so we have equal that is true so return will be true

/**
 * * Not
 * ? Different of other logical operators, NOT(!) is not an comparison which needs two values to verify
 * ? if is true or equal, NOT turn the value to your negative values, more common in boolean values where
 * ? turn an boolean value true to false when NOT(!) is called.
 * @example -> notEqual(value = false), when i call notEqual in negation his value turn to true
 * -> !notEqual(value = true) 
 */
// notEqual = false
const not = !notEqual // return true, negate the fact that notEqual is false and turn to true

/**
 * * Existence
 * ? Here is just to see if the value exists or not, in boolean data is verify if is true
 * @example -> just call the value, equal - if equal exists will return true and run the part of
 * the verify 
 * ! Will return false in some situation like if the value is: 
 * ! "" || ''
 * ! 0
 * ! null
 * ! undefined
 * ! NaN
 */
const exist = () => {
    /**
     * * This func verify that not exist, if he had some value and is not boolean
     * * will return true but if is boolean and is true the verify will be like
     * ? Boolean Example -> not === true ? true : false
     */
    return not ? true : false // Ternary Operator - an if but more simple
}