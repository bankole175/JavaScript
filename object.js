const person = {
    name: ['Bob', 'Smith'],
    age: 32,
    gender: 'male',
    interest: ['music', 'skiing'],
// greeting: function() {
//     alert('Good morning ' + this.name[0]);
// }
};
console.log(person.name[0], person.age, person.gender, person.interest[0]);
// console.log(person.greeting());

const person2 = {
name: {
    first: 'Bob', 
    last: 'Smith',
}
};
// changing the name
person2['name']['last'] = 'Samuel';
person2['eyes'] = 'hazel';
person2.farewell = 'bye for now'
console.log(person2.name.last, person2.eyes, person2.farewell);

function person1(name) {
    this.name = name;
}const person3 = new person1('sammy');
console.log(person3.name);

let john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    job: 'teacher',
    calcAge: function() {
        return 2019 - this.birthYear;
    }
};

console.log(john.calcAge());