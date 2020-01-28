var y = 2;
var x = function () {
    console.log(y);
    var y = 1
}
x();
// output is undefined because var support hoisting

console.log(myName);
var myName = 'Sunil';

function hoist() {
    a = 20;
    var b = 100;
  }
  
  hoist();
  
  console.log(a); 
  /* 
  Accessible as a global variable outside hoist() function
  Output: 20
  */
  
  console.log(b); 
  /*
  Since it was declared, it is confined to the hoist() function scope.
  We can't print it out outside the confines of the hoist() function.
  Output: ReferenceError: b is not defined
  */

//  function hoist() {
//     var message='Hoisting is all the rage!'
//     console.log(message);
//   }
  
//   hoist();