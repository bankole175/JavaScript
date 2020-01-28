// this method is used to copy portion of an array from one location in the array to another location in the same array
// and returns it without modifying

let arr = ['totn', 'a', 'b', 'c', 'd', 'e'],
newArray = arr.copyWithin(5, 0, 1);
console.log(newArray);

let arr1 = ['a', 'b', 'c', 'd', 'e', 'totn'],
newArray1 = arr1.copyWithin(-2, -1);
console.log(newArray1);