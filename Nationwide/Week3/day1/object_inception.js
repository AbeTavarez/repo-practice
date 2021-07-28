

const adventurer = {
    name: "Timothy",
    hitpoints: 10,
    belongings: ["sword", "potion", "Tums"],
    companion: {
        name: "Velma",
        type: "Bat"
    }
};

//console.log(adventurer.belongings[0])
adventurer.belongings.push("Vogue Magazine")

for (let i=0; i < adventurer.belongings.length; i++){
    console.log(adventurer.belongings[i]);
};
// companions object
console.log(adventurer.companion)
//companion's name
console.log(adventurer.companion.name)
//companion's type
console.log(adventurer.companion.type)

// change the companion's name
adventurer.companion.name = "Susan"
console.log(adventurer.companion.name)

adventurer["companion2"] = {name: "Vic", type: "Insect"}
console.log(adventurer)

// give companion a companion
adventurer.companion["SusansCompanion"] = {
    name: "Tim",
    type: "Parasite",
    belongings: ["Scuba tank", "Rogan Josh", "Health Insurance"]
};

console.log(adventurer.companion.SusansCompanion)