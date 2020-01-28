let markHeight = 1.69;
let markMass = 78;

let johnMass = 92;
let johnHeight = 1.95;

let BMIMark = markMass / (markHeight * markHeight);
let BMIJohn = johnMass / (johnHeight * johnHeight);
console.log(BMIMark.toFixed(2), BMIJohn.toFixed(2));

let markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);


//using Object
let john = {
    fullName: 'Bankole Samuel',
    mass: 110,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi.toFixed(2);
    }
}

let mark = {
    fullName: 'John Kenedy',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi.toFixed(2);
    }
}

john.calcBMI() > mark.calcBMI() ? console.log(john.fullName + ' has a higher BMI of ' + john.bmi)
: john.bmi < mark.bmi ? console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi)
: console.log('They have same BMI');

