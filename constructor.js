function Hero(name, level) {
    this.name = name;
    this.level = level;
}

// Adding a method to the constructor
Hero.prototype.greet = function() {
    return `${this.name} says hello.`;
}
const hero1 = new Hero('Varg', 1);
console.log(hero1.greet());

// create a more specific character class called Mage,
// and assign the properties of Hero to it using call(), 
//as well as adding an additional property.

// Creating a new constructor from the parent
function Mage(name, level, spell) {
    // Chain constructor with call
    Hero.call(this, name, level);

    this.spell = spell;
}
const hero2 = new Mage('Lejon', 2, 'Magic Missile');
console.log(hero2);
