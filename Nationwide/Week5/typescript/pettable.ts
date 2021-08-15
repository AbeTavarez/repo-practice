import { Bunny, Elephant, stray } from "./animals";


interface Pettable {

    numberOfPets: number;
  
    isAGoodBoy: boolean;
  
  }
  
  
  
function pet(animal: Pettable) {
  
    animal.numberOfPets++;
  
    animal.isAGoodBoy = true;
  
  }

  const fluffy = new Bunny('fluffy', false);

  const dumbo = new Elephant('dumbo');

  pet(fluffy)