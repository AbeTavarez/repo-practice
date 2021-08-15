
//* ================== Bunny Class

class Bunny {

  public name: string;

  public isAGoodBoy: boolean;

  public numberOfPets: number;

  private pregnant: boolean;

  constructor(name: string, pregnant: boolean) {

    this.name = name;

    this.pregnant = pregnant;

    this.isAGoodBoy = false;

    this.numberOfPets = 0;

  }

  isPregnant() {

    return this.pregnant;
  
  }

}

const fluffy = new Bunny('Fluffy', true);


//* =============== Pets

class Elephant {

    public name: string;
  
    public isAGoodBoy: boolean;
  
    public numberOfPets: number;
  
    public peanuts: Array<Peanut>
  
    constructor(name: string) {
  
      this.name = name;
  
      this.isAGoodBoy = false;
  
      this.numberOfPets = 0;
  
      this.peanuts = [new Peanut()];
  
    }
  
    toot() {
  
      console.log('TOOT TOOT!');
  
    }
  
  }
  
  
  
  
class Peanut {
  
    public numberOfNuts: number;
  
    constructor() {
  
      this.numberOfNuts = 2
  
    }
  
}

const stray = {

    numberOfPets: 0,
  
    isAGoodBoy: true,
  
    legs: 3
  
};

export { Bunny, Elephant, stray }; 