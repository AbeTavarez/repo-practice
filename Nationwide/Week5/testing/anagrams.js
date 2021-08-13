
// * =========== Helper function to clean the string

const cleanStr = str => {
    return str.replace(/[^\w]/g,'') // remove white spaces
    .toLowerCase() // turn string into all lower case
    .split('') // turn string into array
    .sort() // sort the array
    .join() // turn array back to string
};

//* ========= Anagram function
const anagrams = (strA, strB) => {
    strA = cleanStr(strA)
    // console.log(strA)
    strB =  cleanStr(strB)
    // console.log(strB)
    return  strA === strB
};
console.log(anagrams(`Hello World`, `! dlrowllohe`))
console.log(anagrams(`Hello World`, `helloo world`))

//* Exporting the function will make it available in others files on out project
module.exports = anagrams;