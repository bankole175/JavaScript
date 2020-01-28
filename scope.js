// example to prove that let support only function scoping 
//i.e it is only accessible in the function scope if we log y within the bracket we will have 1
// var x = function() {
//     if (true) {
//         var y =1;
//     }
// }
// x();
// console.log(y);


// NOTE: VAR DO NOT RESPECT BLOCK SCOPE BUT LET RESPECT IT 
// function hoist() {
//     if (true) {
//         let message='Hoisting is all the rage!'
//         console.log(message);
//     }
//   }
  
//   hoist();

//   function hoist() {
//     if (true) {
//         var message1='Hoisting is all the rage!'
//     }
//     console.log(message1);
//   }
//   hoist();

// function hoist() {
//         let message='Hoisting is all the rage!'
//       }
//       console.log(message);
      
//       hoist();

// expression(); 

// var expression = function() {
//   console.log('Will this work?');
// };
//Output: "TypeError: expression is not a function
// the expression above is not seen as a function instead it is seen as a variable

var x = 2;
var add = function() {
var y = 1;
};
console.log(add(x + y));


