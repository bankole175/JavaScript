let arr = [8, 2, 3, 4,5];
console.log(arr.splice(2, 1, "6", "7"));


let str = "Apples are round, and apples are juicy.";
let splitted = str.split(" ", 7);
console.log(splitted);


//to copy an array
let fruit = ['Banana', 'Orange','Apple', 'Mango']
let copied = fruit.slice();
console.log(copied);

let arr = [1, 2, 3, 4, 5];
// let xyz = arr.slice(0)
let x = [...arr];
console.log(x);