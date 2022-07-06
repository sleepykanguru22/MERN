class Ninja {
  constructor(name) {
    this.name = name;
    this.health = 3;
    this.speed = 3;
    this.strength = 3;
  }

  sayName = () => console.log(this.name);

  showStats = () =>
    console.log(
      `health:${this.health} speed:${this.speed} strength:${this.strength}`
    );
  drinkSake() {
    this.health += 10;
  }
}

// const ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// ninja1.drinkSake();
// ninja1.showStats();

class Sensei extends Ninja {
  constructor(name) {
    super(name);
    this.health = 200;
    this.speed = 10;
    this.strength = 10;
    this.wisdom = 10;
  }

  speakWisdom() {
    super.drinkSake();
    console.log("You should be coding");
  }
}

superSensei = new Sensei("Jarjar");
superSensei.speakWisdom();
superSensei.showStats();
