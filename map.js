let array =[1, 4, 9, 16];
let mapped = array.map(x =>
     x * 2
);
console.log(mapped);


let numbers = [1, 4, 9];
let newNumbers = numbers.map(function(num) {
    return Math.sqrt(num)
});
// console.log(numbers);
console.log(newNumbers);


let numb = [1, 4, 9];
let newNumb = numb.map(function(num) {
    return num * 2;
});
// console.log(numb);
console.log(newNumb);

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths);
