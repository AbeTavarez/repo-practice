
const cleanStr = (str) => {
    return str.replace(/[^\w]/g,'') // remove white spaces
    .toLowerCase() // turn string into all lower case
    .split('') // turn string into array
    .sort() // sort the array
    .join() // turn array back to string
}