// * an in-line comment -> Used to specify simple informations
/** @type { string } */
const DEFAULT_NON_LOGGED_USER_NAME = 'guest' // non logged user name

/** [ Blank Line ]
 *  * Multi-line comment -> Used to express your idea about an function and metadata 
 */

// MetaData
/** [ Blank Line ]
 * @author Elias Neto
 * @version 0.1
 */


/** [ Blank Line ]
 * * Get the non user number
 * @param { number }  -> nonUser 
 * @return { number }  -> nonUser length 
 */
function getNonUser(nonUser){
    if(nonUser < 0) return 0; // just accept positive number
    return nonUser
}

var nonUser = [
    'guest',
    'guest',
    'guest',
    'guest',
    'guest',
]

getNonUser(nonUser.length)
// console.log(getNonUser(nonUser.length)) // if you want to test remove the comment

// is more cool write comments using this extension -> Better Comments | find in vscode extensions library
/**
 *  * Important Comment
 *  ! Warning Comment
 *  ? Question Comment
 *  TODO: TODO Comment
 */

/**
 * * Bibliography
 *  Free Code Camp -> https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/
 *  JsDoc -> https://jsdoc.app/tags-type
 *  TypeScript -> https://www.typescriptlang.org/pt/docs/handbook/jsdoc-supported-types.html
 *  BitSrc(Medium) -> https://blog.bitsrc.io/best-practices-for-using-comments-in-javascript-4c4cd8619c18
 */