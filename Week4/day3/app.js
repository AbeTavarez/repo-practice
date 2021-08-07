//* -------------------------------- Directions
// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const anagrams = (stringA, stringB) => {
    stringA = stringA.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
    stringB = stringB.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
    console.log( stringA === stringB)
};
anagrams('rail safety', 'fairy tales')
anagrams('RAIL! SAFETY!', 'fairy tales')
anagrams('Hi there', 'Bye there')


//* -------------------------------- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

const capitalize = (str) => {
    console.log(str.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' '));
}

//capitalize('a short sentence') //--> 'A Short Sentence'
//capitalize('a lazy fox') //--> 'A Lazy Fox'
//capitalize('look, it is working!') //--> 'Look, It Is Working!'
