let numbers = [5, 12, 8, 130, 44];
let newNumbers = numbers.find(function(num) {
    return num > 10;
});
// console.log(numbers);
console.log(newNumbers);

const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5},
];
function isCherries(fruit) {
    return fruit.name === 'bananas';
}
console.log(inventory.find(isCherries));

const inventory1 = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5},
];
const result = inventory.find( ({ name }) => name === 'cherries' ); 
console.log(result);