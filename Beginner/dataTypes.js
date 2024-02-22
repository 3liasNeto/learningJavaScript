/**
 * * Data Types 
 * In JavaScript exist seven different data types to work with,
 * some are much more common to use than other, but its interesting 
 * to know what are this seven data types:
 * @type { Boolean } -> True and False
 * @type { null } -> value null but in math context he value is 0 
 * @type { undefined } ->  UNDEFINED, OK non determined value, 
 * an statement can be undefined and have value at some code moment.
 * @type { Number } -> 0,1,2,3,4,5 ... and some other numbers, 
 * ! Also has { BigInt } is a numeric data type for different numeric types like Interger, Float, Double, or Bignums
 * @type { String } -> ('Hello World') or ("Hello World") and (`Hello World`), this is
 * the way that its possible to create an variable in type string. 
 * @type { Symbol } -> is like the private method in java (LIKE ok), so if i need to 
 * turn the value of my variable anonym, Symbol is useful but the instance need to be
 * unique and immutable. 
 * @type { Object } ->  This is more difficult to explain, but reading some stuffs,
 * Object is like an function, and map of instruction to know what do with the data or instructions
 * that he received ( Have other things to explain like the relation of Object, Function and
 * Method but i think iam not the person to lecture about this theme maybe in the future ).
 */

// * Boolean
let isThisAnPokemon = true;

// * null ( Most used in verifications )
/**
 * * just verify the value of isThisAnPokemon
 *  @example
 *  @param { Boolean } -> is a pokemon? true || false 
 *  @return true if(isThisAnPokemon === true) else null  
 */
let verifyPokemon = !isThisAnPokemon ? null : true; 

// * undefined 
let pokemonName; // value undefined
pokemonName = undefined;  // remains undefined 

// * Number 
let pokedexNumber = 94; // The best Pokemon of all time 

// * String
pokemonName = 'Gengar'; // here pokemonName change his value

// * Symbol - string | number | undefined
const bannedPokemon = Symbol(384); 

// * Object 
let genName = [
    {   
        number: 1,
        name: 'Kanto'
    },
    {   
        number: 2,
        name: 'Johto'
    },
    {   
        number: 3,
        name: 'Hoenn'
    },
]

const pokedex = {
    pokemon : "Haunter",
    pokedex : 93,
    gen : 1,
    genRegion: function(){
        // just an example of func in a object
        // but if you just need the value of genRegion call here 
        // genName.find((value) => value.number === pokedex.gen).name
        const regionName = genName.find((value) => value.number === this.gen).name;
        return regionName
    },
    haveEvolution : true ,
    evolution : "Gengar"
  };

  // genRegion is a function so to see he value i need to call like an function
  console.log(pokedex)
  console.log(pokedex.genRegion())

  /**
 * * Bibliography
 *  MDN -> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types
 *  MDN(Object) -> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object
 *  CodeAcademy(Object) -> https://www.codecademy.com/forum_questions/52fb74757c82cace17000145
 *  MDN(Symbol) -> https://developer.mozilla.org/pt-BR/docs/conflicting/Web/JavaScript/Reference/Global_Objects/Symbol
 */