//IIFE(Immediately Invoked Function Expression)
(function(input) {
    let result = input.split("").reverse().join("");
    console.log(result);
})('bankole')


// named function
function reverseString(input) {
    let splittedString = input.split("").reverse().join("");
    console.log(splittedString);
}
reverseString('samuel')


// using arrow function
let reString = input => {
    let result = input.split("").reverse().join("");
    console.log(result);
};
reString('joshua')


