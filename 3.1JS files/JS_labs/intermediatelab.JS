// Create a function that takes a string as a parameter and returns the string with 
// the first character of each word changed into a capital letter, as in the example 
// below. Test it with different strings.

// const toTitleCase = (phrase) => {
//     return phrase
//       .toLowerCase()
//       .split(' ')
//       .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//       .join(' ');
//   };
  
//   let result = toTitleCase('mary had a little');

  // console.log(result)

  // const toTitleCase = (string) => {
  //   return string
  //     .toLowerCase()
  //     .split(' ')
  //     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  //     .join(' ')
  // }
  
  // let result = toTitleCase('i beLIeve in ALieNs')
  // console.log(result)

  //source = https://stackoverflow.com/questions/32589197/how-can-i-capitalize-the-first-letter-of-each-word-in-a-string-using-javascript
// arrow functions "explained"  https://dotnettutorials.net/lesson/javascript-arrow-function/#:~:text=The%20arrow%20function%20was%20introduced%20in%20ECMAScript%206,any%20names%2C%20the%20arrow%20makes%20the%20syntax%20shorter.
// https://www.w3schools.com/jsref/jsref_touppercase.asp
///////////////////////////////////////////////////////// Question 1 Answered ////////////////////////////////////////////////////////////////////////////////


// 2. Create a function truncate(str, max) that truncates a given string of text if its total length is greater than the max length. 
// It should return either the truncated text, with an ellipsis (…) added to the end if it was too long, 
// or the original text otherwise. 
// b) Write another variant of the truncate function that uses a conditional operator.

// text_truncate = function(str, length, ending) {
//     if (length == null) {
//       length = 100;
//     }
//     if (ending == null) {
//       ending = '(...)';
//     }
//     if (str.length > length) {
//       return str.substring(0, length - ending.length) + ending;
//     } else {
//       return str;
//     }
//   };
// console.log(text_truncate('We are doing JS string exercises.'))
// console.log(text_truncate('We are doing JS string exercises.',19))
// console.log(text_truncate('We are doing JS string exercises.',15,'!!'))

// source: https://www.w3resource.com/javascript-exercises/javascript-string-exercise-16.php

// truncatedSentence = function(str, length, end) {
//   if (length ==null) {
//     length = 100;
//   }
//   if (end == null) {
//     end = '(...)';
//   }
//   if (str.length >length) {
//     return str.substring(0, length - end.length) + end
//   }
//   else {
//     return str
//   }
// }
// console.log(truncatedSentence('This is Problem 2 of JS segment.'))
// console.log(truncatedSentence('This is Problem 2 of JS segment.',20))
// console.log(truncatedSentence('This is Problem 2 of JS segment.',15, '!!!'))


/////////////////////////////////////////////////////////// Question 2 Answered //////////////////////////////////////////////////////////////////////////////

// 3. Use the following animals array for the below tasks. Test each one by printing the result to the console. 
// Review the following link for tips: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array 
// a) Add 2 new values to the end 
// b) Add 2 new values to the beginning 
// c) Sort the values alphabetically 
// d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the middle of the animals array with newValue 
// e) Write a function findMatchingAnimals(beginsWith) that returns a new array containing all the animals that begin with the beginsWith string. 
//   Try to make it work regardless of upper/lower case.

// const animals = ['Tiger', 'Giraffe']

// let pushAnimals = animals.push('Rabbit', 'Cat')                   //don't need pushAnimals or unshift animals just have for no reason
// let unshiftAnimals = animals.unshift('Donkey', 'Monkey')

// replaceMiddleAnimal(dog) {
//   animals[2] = "dog"

// }


// console.log(animals.sort(replaceMiddleAnimal))                                       // adding .sort() makes the array sort alphabetically

/////////////////////////////////////////////////////////// Question 3 NOT-Answered //////////////////////////////////////////////////////////////////////////////


// 4. Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a
// and b. What does the ‘+=’ do?

// const a = 2, b = 3;
// let result = `${a} + ${b} is `;
// if (a + b < 10) {
// result += 'less than 10';
// } else {
// result += 'greater than 10';
// }

let a = 2, b = 5;
let question4Result = a += b;
const sum = question4Result >= 10 ? "Yes" : "No"
console.log(sum)

//////part B)   The addition assignment (+=) operator performs addition (which is either numeric 
  // addition or string concatenation) on the two operands and assigns the result to the left operand.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition_assignment




//////source example that helped super well - syntax section about 1/3 of way down page///////////////
// const age = 26;
// const beverage = age >= 21 ? "Beer" : "Juice";
// console.log(beverage)

// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator

/////////////////////////////////////////////////////////// Question 4 Answered ///////////////////////////////////////////////////////////