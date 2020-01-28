function Person(first, last, age, gender, interests) {
    this.name = {
        first,
        last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
}
const person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
console.log(person1.age);

function doSomething() {}
doSomething.prototype.foo = 'bar';
let doSomething1 = new doSomething();
doSomething1.prop = 'some value'
console.log(doSomething1.prop);
console.log(doSomething.prototype.foo);

let superHero = 
{
    "squadName" : "Super hero squad",
    "homeTown" : "metro city",
    "formed" : 2016,
    "secretBase" : true,
    "members":
        {
            "name" : "molecule",
            "age" : 29,
            "powers" : [
                "Radiation", "turning tiny"
            ]
        }
}
console.log(superHero.members.powers[0]);

