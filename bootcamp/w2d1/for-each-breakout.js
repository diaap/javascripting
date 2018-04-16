// a foreach is to iterate through an array - first you need to have an array
//lets iterate through this array - using forEach

var fruits = ['apples', 'oranges', 'raisins'];
var numbers = [9, 8, 7, 6]

//start with array name

fruits.forEach();


//in order to iterate through the element, I need a callback inside as a parameter to the forEach
//this callback will simply be a function that has some parameters in the body of the function
//a variable to represent a singular element -- one fruit at a time
//inside the body of the callback function we have access to fruit and we can do wtv we want with it

fruits.forEach(function (fruit) {

  //we can't use continue or break ---

  console.log(`I love ${fruit}`);
});

//you can have more than one parameter
numbers.forEach( function (num, index) {

  console.log(num, index);

});


