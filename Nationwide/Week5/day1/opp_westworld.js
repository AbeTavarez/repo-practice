
//* ============ Host object
const host = {
    name: 'AttackHost',
    occupation: 'Host Mainframe Developer',
    saySpecs () {
        console.log(`My name is ${this.name}. My occupation is ${this.occupation}`)
    }
};

console.log(host.saySpecs())

//* ======= BasicHost class
class BasicHost {
    constructor(name, occupation){
        this.name = name;
        this.occupation = occupation;
    }
    saySpecs(){
        console.log(`I am ${this.name, this.occupation)
    } 
};

//* =============== Create some basic hosts - Host1 and Host2
const host1 = new BasicHost('Roget', 'creator of Roget\'s Thesaurus');
console.log(host1)
const host2 = new BasicHost('Bucky', 'The Winter Soldier');
console.log(host2)

//* ============== Augment your basic hosts - Host3 and Host4

const host3 = new BasicHost('Sam', 'The Flacon');
console.log(host3.saySpecs())
const host4 = new BasicHost('Clinton', 'HawkEye');
console.log(host4.saySpecs())

//* ====== Populate the world with hosts
const name = [
    "Laila", "Jack", "Harley", "Hertha", "Darren", "Jolene", 
    "Loura", "Lona", "Davida", "Reena", "Leland", "Ta", "Jen", 
    "Linn", "Roslyn", "Margorie", "Rafaela", "Romona", "Shanel", "Stan"
];

const occupations = [
    "Clerical assistant", "Leaflet distributor", "Landowner",
    "Special constable", "Anaesthetist", "Park-keeper", "Butler",
    "Choreographer", "Blacksmith", "Chef", "Legal secretary",
    "Song writer", "Librarian", "Landscape gardener"
];

const hostArray = [];
//* ============= Loop
for (let host = 0; host <= 100; host++){
    let ranName = Math.floor(Math.random() * name.length)
    let ranOcc = Math.floor(Math.random() * occupations.length)
    hostArray.push(new BasicHost(name[ranName], occupations[ranOcc]))
};

console.log(hostArray)
console.log(hostArray[55].saySpecs())
