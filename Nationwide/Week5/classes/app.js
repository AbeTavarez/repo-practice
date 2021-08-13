
//* First example
// class Person {
//     greet() {
//         console.log(`hi!`)
//     }
// };

// // create new objects
// const me = new Person();
// const you = new Person();

// me.greet();
// you.greet();

class Person {
    constructor(nameParam, ageParam, eyesParam, hairParam){
        this.name = nameParam;
        this.age = ageParam;
        this.eyes = eyesParam;
        this.arms = 2;
        this.legs = 2;
        this.hair = hairParam;
    }
};

const me = new Person('Eren', 30, 'Brown', 'Black');
me.arms = 4
console.log(me.arms)
