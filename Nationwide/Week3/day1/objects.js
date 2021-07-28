
//* ME ME ME
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

//* Slimer

const monster = {
    name: "Slimer",
    color: "greenish",
    type: "plasm or ghost or something"
 };

 console.log(monster.name)
 monster.type = `creature`
 monster["age"] = 6
 console.log(monster.type)
 console.log(monster.age)