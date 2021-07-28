//* Exercise 1: 
const foods = [];
//console.log('Exercise 1 results: ', foods);

//* Excercise 2
foods.push("pizza")
foods.push("cheeseburger")

//* Excercise 3
foods.unshift("taco")

//* Excercise 4
var favFoods = foods[1]
//console.log(favFoods)

//* Excercise 5
foods.splice(2,0,"tofu")
//console.log(foods)

//* Excercise 6
foods.splice(1,1,"sushi","cupcake")
//console.log(foods)

//* Excercise 7
var yummy = foods.slice(1,3)
//console.log(yummy)

//* Excercise 8
var soyIdx = foods.indexOf("tofu")
//console.log(soyIdx)

//* Excercise 9
var allFoods = foods.join(" -> ")
//console.log(allFoods)

//* Excercise 10
var hasSoup = foods.includes("soup")
//console.log(hasSoup)

//* Excercise 11
const nums = [100,5,23,15,21,72,9,45,66,7,81,90];
var odds = []
nums.forEach(num =>{
    if(num % 2 != 0){
        odds.push(num)
    }
} )
//console.log(odds)

//* Excercise 12
var fizz = []
var buzz = []
var fizzbuzz = []
nums.forEach(num =>{
    if(num % 3 == 0 && num % 5 == 0){
        fizzbuzz.push(num)
        }
   else if(num % 3 == 0){
        fizz.push(num)
    }
     else if(num % 5 == 0){
        buzz.push(num)
    }
})
//console.log(fizzbuzz)
//console.log(buzz)
//console.log(fizz)

//* Excercise 13
const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];
//! Before the pop !!!
console.table(numArrays)
var numList = numArrays.pop()
console.log('numList Array -> ', numList)
//! After the pop
console.table(numArrays)

//* Excercise 14
var num = numArrays[2][1]
console.log('num -> ', num)

//* Excercise 15
let total = 0
numArrays.forEach(arr =>{
    // console.log(arr)
   arr.forEach(num => {
    //    console.log(num)
    //    console.log(total)
       total += num 
   })
});

console.log('Total -> ',total)
console.log(`==== done brain.rest() =================`)