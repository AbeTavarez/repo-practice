
//* Imports our Anagram function
const anagrams = require(`./anagrams`);



//* =============== Start of test

//* Describe Block
describe('Anagram Test Suite', () => {

    //* Test # 1 - checks if the func exists
    test(`Anagrams function exists`, () => {
        expect(typeof anagrams).toEqual(`function`)
    });

    //* Test # 2 - checks the return value of the function
    test(` "Hello" is an anagram of "llohe" `, () => {
        expect(anagrams(`hello`, `llohe`)).toBeTruthy();
    });


    //* Test # 3 
    test(` "Hello World" is an anagram of "dlrowllohe" `, () => {
        expect(anagrams(`Hello World`, `dlrowllohe`)).toBeTruthy();
    });

    //* Test # 4
    test(` "Hello World!" is NOT an anagram of "!dlrowllohe" `, () => {
        expect(anagrams(`Hello World`, `!dlrowllohe`)).toBeTruthy();
    })

    //* Test # 5
    test(` "Hello World!" is NOT an anagram of "!dlrowllohe" `, () => {
        expect(anagrams(`Hello World`, `helloo world`)).toBeFalsy();
    })








});

