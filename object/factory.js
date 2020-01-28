// function createCircle(radius) {
//   return {
//     radius,
//     draw: function() {
//       console.log("draw");
//     }
//   };
// }
// const circle = createCircle(1);
// console.log(circle.draw());

// function reverseInput(input) {
//   splitted = input
//     .split("")
//     .reverse()
//     .join("");
// }
// reverseInput("confluence");
// console.log(splitted);

// ((x, y) => {
//   let answer = x + y;
//   console.log(answer);
// })(2, 3);

// let arr = [2, 30, 49, 10];
// let sorted = arr.sort((x, y) => {
//   return x - y;
// });
// let descending = sorted.reverse();
// console.log(descending);

let number = [1, 2, 4, 3, 2, 2, 1, 5, 1];
let newNumber = [...new Set(number)];
console.log(newNumber);
