// returns true if all the element satisfies the condition provided by function
let arr = [2, 4, 6, 8, 10];
let even = function (element) {
    return element % 2 === 0;
}
console.log(arr.every(even));

console.log( ["Stewie", "Msg", "Quagmire"].every(contact => contact.length >= 4));


let arr1 =  ["Stewie", "Message", "Quagmire"];
let contact1 = function (contact) {
    return contact.length >= 4;
}
console.log(arr1.every(contact1));
