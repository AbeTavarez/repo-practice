//* ================== Person class 
class Person {
    constructor (name, age, eyes, hair, lovesCats = false, lovesDogs) {
      this.legs = 2;
      this.arms = 2;
      this.name = name;
      this.age = age;
      this.eyes = eyes;
      this.hair = hair;
      this.lovesCats = lovesCats;
      this.lovesDogs = lovesDogs || false;
    }
    greet (otherPerson) {
      console.log('hi ' + otherPerson + '!');
    }
    classyGreeting (otherClassyPerson) {
      console.log('Greetings ' + otherClassyPerson.name + '!');
    }
    setHair (hairColor) {
      this.hair = hairColor;
    }
    walk () {
      console.log('I hate when my Segway is in the shop.');
    }
  };

  const me = new Person('Karolin', 41, 'green', 'copper dark ash blonde', true, true);
  const you = new Person('Matt', 36, 'blue', 'blonde');
  
  me.classyGreeting(you);
  you.classyGreeting(me);

  console.log(me)

//* ================== SuperHero Class
  class SuperHero extends Person {
      fly() {
          console.log(`Up up and away!`);
      }
  };

  const kal = new SuperHero('Ka el', 40, 'Green', 'Black');
  console.log(kal)
  kal.fly()