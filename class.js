class Hero {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }

    // Adding a method to the constructor
    greet() {
        return `${this.name} says hello.`;
    }
}
const hero1 = new Hero('Varg', 1);
console.log(hero1.greet());

// the super keyword is used in place of call to access the parent functions.
// We will use extends to refer to the parent class.

// Creating a new class from the parent
class Mage extends Hero {
    constructor(name, level, spell) {
        // Chain constructor with super
        super(name, level);

        // Add a new property
        this.spell = spell;
    }
}
const hero2 = new Mage('Lejon', 2, 'Magic Missile');
