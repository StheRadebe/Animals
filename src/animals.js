class Animal {
  #name;
  constructor(name) {
    this.#name = name;
  }

  eats() {
    return "Food";
  }

  sounds() {
    console.log("sound...");
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  sounds() {
    return "Bark";
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  sounds() {
    return "Meow";
  }
}

class Home {
  constructor() {
    this.homeArray = [];
  }

  adoptPet() {
    for (let i = 0; i < arguments.length; i++) {
      this.homeArray.push(arguments[i]);
    }
  }
  makeAllSounds() {
    for (let i = 0; i < this.homeArray.length; i++) {
      console.log(this.homeArray[i].sounds());
    }
  }
}

const animal = new Animal();
const dog = new Dog("Rax");
const cat = new Cat("Stormy");

module.exports = { animal, dog, cat };
