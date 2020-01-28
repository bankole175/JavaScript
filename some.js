// returns true if one of  the element satisfies the condition provided by function and ignore othr element
let arr = [1, 2, 3, 4, 5];
let even = function (element) {
    return element % 2 === 0;
}
console.log(arr.some(even));

function isBiggerThan10(element, index, array) {
    return element > 10;
}
console.log( [2, 5, 8, 1, 4].some(isBiggerThan10));

//checking if a value exist in an array
const fruits = ['apple', 'banana', 'mango', 'guava'];
function check(arr, val) {
    return arr.some(function (arrVal) {
        return val === arrVal
    })
}
console.log(check(fruits, 'kela'));
console.log(check(fruits, 'banana'));

