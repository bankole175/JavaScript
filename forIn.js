let person = {
    firstname: "John",
    lastname: "Doe",
    age: 25
};
let text = "";
let x;
for (x in person) {
    text += person[x] + " ";
    console.log(text);
}

let oldCar = {
    make: 'Toyota',
    model: 'Tercel',
    year: '1996'
};
for (let key in oldCar) {
    console.log(`${key} --> ${oldCar[key]}`);
}