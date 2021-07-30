
////////////////////////////////////////////* ME ME ME
let me = {
    firstName: "Abraham",
    lastName: "Tavarez",
    email: "abraham@me.com"
};

//first prorperty
console.log(me.firstName)

// add age property
me["age"] = 1000
console.log(me.age)

// property "place of residence"
me["place of residence"] = 'ny'
console.log(me["place of residence"])
// console.log(me)

//* Fancy greeting
const fancyGreeting = (obj) => {
    console.log(`Greetings, ${obj.firstName} ${obj.lastName}`)
}
// function call
fancyGreeting(me)

//////////////////////////////////////////* Slimer

const monster = {
    name: "Slimer",
    color: "greenish",
    type: "plasm or ghost or something"
 };

 console.log(monster.name)
 monster.type = `creature`
 monster.age = 6
//  monster["age"] = 6

 console.log(monster.type)
 console.log(monster.age)

 ////////////////////////////////////////* Ogres

 const adventurer = new Object();

 adventurer.name = 'Eren';
 adventurer.hitpoints = 10;
 adventurer["restorative medicine"] = ["pills", "water", "apple"];

 const ogre = new Object();
 ogre.hitpoints = 10;

 ////////////////////////////////////* Game simulator 

 while(adventurer.hitpoints > 0 || ogre.hitpoints > 0){
    //* creates random number
    let randNUm = Math.floor(Math.random() * 2)
    console.log(randNUm)

    //* 0 === adventurer | 1 === ogre
    if (randNUm === 0){
        ogre.hitpoints -= 1;
        if (ogre.hitpoints === 0){
            console.log(`Adventurer WINS!`);
            break;
        }

    } else if (randNUm === 1) {
        adventurer.hitpoints -= 1;
        if (adventurer.hitpoints === 0){
            console.log(`Ogre WINS!`);
            break;
        }
    }
    console.log(`Adveturer Points: ${adventurer.hitpoints}`)
    console.log(`Ogre Points: ${ogre.hitpoints}`)
 }
 
//////////////////////////////////////////////////////* Cat Combinator 


const cat1 = {};
cat1.name = 'Mama Cat';
cat1.breed = 'Persian';
cat1.age = 7;

const cat2 = {};
cat2.name = 'Papa Cat';
cat2.breed = 'Bengal';
cat2.age = 9;

const combineCats = (mama, papa) => {
    return {
        MamaCat: mama,
        PapaCat: papa
    }
};

const catFamily = combineCats(cat1, cat2);
console.log(catFamily)

const combineCats2 = (mama, papa) => {
    return {
        name: mama.name + papa.name,
        age: 1,
        breed: mama.breed + papa.breed
    }
};

////////////////////////////////////////////* Cat Brain Bender
console.log(`///////////////////Cat Brain Bender///////////////////////////////`)
console.log(combineCats2(combineCats2(combineCats2(cat1, cat2), combineCats2(cat1, cat2)), combineCats2(combineCats2(cat1, cat2), combineCats2(cat1, cat2))));


//////////////////////////////////////////////////////* Profiler
const profiler = (username, hometown, favoriteColor) => {
    return {
        username: username,
        hometown: hometown,
        favColor: favoriteColor
    }
};

const abe = profiler('Abe', 'NY', 'blue')
console.log(abe)

////////////////////////////* Plus
const profilerPlus = (key, value) => {
    let obj = profiler('stitches13', 'new leaf', 'orange')
    obj[key] = value;
    return obj
};

console.log('PLUS: ', profilerPlus('age', 100))