
const cleanStr = str => {
    return str.replace(/[^\w]/g,'') // remove white spaces
    .toLowerCase() // turn string into all lower case
    .split('') // turn string into array
    .sort() // sort the array
    .join('') // turn array back to string
};

const findWordFrequencies = str => {
    str = cleanStr(str); // clean string with helper function
    const obj = {}; // create object

    for (let char = 0; char <= str.length; char++){
        if (obj[str[char]]){
            // if key exist
            obj[str[char]] += 1
        } else {
            // if key doesnt exist
            obj[str[char]] = 1
        }
    };
    return obj; // return object
};
const wordObject = findWordFrequencies('The world is all that is the case');
// console.log(wordObject)

const findHighestFrequency = obj => {\
    //* Placeholders for our values
    let highestFrequentKey = ''; // for the key
    let highestFrequentValue = 0; // for the value of that key
    let finalObj = {}; // the obj we need to return

    for (let key in obj){
        // console.log(key, obj[key])
        //* === if the value of the key is higher 
        //* than the current value on highestFrequentValue
        if (obj[key] > highestFrequentValue){
            highestFrequentKey = key 
            highestFrequentValue = obj[key]
            
        }
    };

    finalObj[highestFrequentKey] = highestFrequentValue

    return finalObj
};

const result = findHighestFrequency(wordObject);
console.log(result)



// s