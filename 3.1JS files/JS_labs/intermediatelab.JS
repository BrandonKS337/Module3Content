/* 1. Create a function that takes a string as a parameter and returns the string with
 the first character of each word changed into a capital letter, as in the example
 below. Test it with different strings.*/

/*const toTitleCase = (phrase) => {
    return phrase
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  let result = toTitleCase('mary had a little');

console.log(result)*/

const toTitleCase = (string) => {
  return string
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

let result = toTitleCase("i beLIeve in ALieNs");
// console.log(result)

//source = https://stackoverflow.com/questions/32589197/how-can-i-capitalize-the-first-letter-of-each-word-in-a-string-using-javascript
// arrow functions "explained"  https://dotnettutorials.net/lesson/javascript-arrow-function/#:~:text=The%20arrow%20function%20was%20introduced%20in%20ECMAScript%206,any%20names%2C%20the%20arrow%20makes%20the%20syntax%20shorter.
// https://www.w3schools.com/jsref/jsref_touppercase.asp

///////////////////////////////////////////////////////// Question 1 Answered ////////////////////////////////////////////////////////////////////////////////

/*2. Create a function truncate(str, max) that truncates a given string of text if its total length is greater than the max length.
It should return either the truncated text, with an ellipsis (…) added to the end if it was too long,
or the original text otherwise.
b) Write another variant of the truncate function that uses a conditional operator.*/

truncatedSentence = function (str, length, ending) {
  if (length == null) {
    length = 100;
  }
  if (ending == null) {
    ending = "(...)";
  }
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
};
// console.log(truncatedSentence('This is Problem 2 of JS segment.'))
// console.log(truncatedSentence('This is Problem 2 of JS segment.',20))
// console.log(truncatedSentence('This is Problem 2 of JS segment.',15, '!!!'))

// source: https://www.w3resource.com/javascript-exercises/javascript-string-exercise-16.php

/////////////////////////////////////////////////////////// Question 2 Answered //////////////////////////////////////////////////////////////////////////////

/*3. Use the following animals array for the below tasks. Test each one by printing the result to the console.
Review the following link for tips: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
a) Add 2 new values to the end
b) Add 2 new values to the beginning
c) Sort the values alphabetically
d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the middle of the animals array with newValue
e) Write a function findMatchingAnimals(beginsWith) that returns a new array containing all the animals that begin with the beginsWith string.
  Try to make it work regardless of upper/lower case.*/

const animals = ["Tiger", "Giraffe"];

const pushAnimals = animals.push("Rabbit", "Cat"); //don't need pushAnimals or unshift animals just have for no reason
const unshiftAnimals = animals.unshift("Donkey", "Monkey");

// console.log(animals)
// // animals[2] = "penguin";               ////technically replaces the middle 2 items because they had us add 2 not just 1
// // animals[3] = "piggmy pig";

// console.log(animals.sort())
// console.log()

function replaceMiddleAnimal(newValue) {
  var count = animals.length + 1;
  var mid = count / 2;
  if (mid % 2 === 0) {
    animals.splice(mid, 2, "bear");
  } else {
    var middle = mid - 1;
    animals.splice(middle, 2, "bear");
  }
  return animals;
}

// console.log(replaceMiddleAnimal());

// const str = animals
// console.log(str.startsWith())

// solution for insert/remove
// https://video.search.yahoo.com/yhs/search;_ylt=AwrFDLMek0hkaeAb35MPxQt.;_ylu=Y29sbwNiZjEEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=how+to+insert+an+item+into+an+array+at+a+specific+index+javascript&type=asbw_8063_CHW_US_tid20133&param1=PlKV40VUjEyYlqRS8AljTRB9RQf6WrStmhkhAC17Im9zww2WPX1NAiJVvuTjmOIP&param2=9dUI1n2R0BLDxNuWfiP4aSFOTltNdSPoIx38%2BUf%2FiXrvPdoGmStdlfwLFZYDvqkAJrWWk4yNReCLnBD%2FqPsDZd7olTZcV8HMx1G%2Fk786sE2Tis1g8dJd8zxVWs%2BbKztBnq1TfqUiqPYK9pXifXmJFyorDuCsYXJE71Y6G5tfejBlvgbTeJr5weCiLd6ZNR6Ws3AD8mtPpqsVZUvT5UbHXxLA3xx043MKALeuk0aXw1zEcgU0n17xGbpW70ilfE7Ikmk%2Bk9kMkz7prkAzniJMIw%3D%3D&param3=NwVEMR%2FzKcG52XsVBYEh2zk2Yklq85vdfspZPoqz2M1qypHRDDTed5vIiOf0QJloJAws3N4BZ2OFCPQG%2BRw4WpTnzaTq2VmIHxERXcUW3rVQCtxOG%2BsIEOUp0%2Ff9ylXTGucyJu3wBF4BE4auNWzgxF2N%2FoxQBj7msD52KegNE9rRFnnDLMct8TmiAuK2uck%2FLbr5f6WpdNxibbnbgdnESnrs15Pb8rjdvagd0yfpD7wHzauSNPU2QNHVKWT11XkVkf0Ly9fZYpraPaIcBM6PZHoBaMEopJWXFidR5tyfSRlQRu5fTef94a5exCN1En%2FivW7PfcjsPud9EV6VF0WwPVpoFGQAlT294X8dA5%2Fpsd08RQpybQ4zfE6sK1rcaCrOrHV%2B2zp1PrO5dUWg3Q9WL9kvr%2FAU08juXoDo7OAyZwPsChGZ46yIqvhfgbIJsr7mTEdeNLlHSK9VH0T4gDBOWVXWrEwXEuRMNdN%2BE41jyFhROZ7ZBYah1UCwi6VpstbDp9fvh%2BxOq8pKOErb7URDpg%3D%3D&param4=%2FT0Pb%2BlNjez7ZOh6nG89pD2k9NM4S5uYZjkFZM9DvCE%3D&hsimp=yhs-syn&hspart=iba&ei=UTF-8&fr=yhs-iba-syn#id=1&vid=078cd1dba1dd2abeb589ac2a13770ee4&action=view

// replacing middle of array source:
// https://stackoverflow.com/questions/74049829/function-that-inserts-a-new-value-in-the-middle-of-an-array

/////////////////////////////////////////////////////////// Question 3 NOT-Answered //////////////////////////////////////////////////////////////////////////////

/*4. Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a
and b. What does the ‘+=’ do?

const a = 2, b = 3;
let result = `${a} + ${b} is `;
if (a + b < 10) {
result += 'less than 10';
} else {
result += 'greater than 10';
}

let a = 2, b = 5;
let question4Result = a += b;
const sum = question4Result >= 10 ? "Yes" : "No"
console.log(sum)

////part B)   The addition assignment (+=) operator performs addition (which is either numeric
addition or string concatenation) on the two operands and assigns the result to the left operand.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition_assignment

////source example that helped super well - syntax section about 1/3 of way down page///////////////
const age = 26;
const beverage = age >= 21 ? "Beer" : "Juice";
console.log(beverage)

source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator*/

/////////////////////////////////////////////////////////// Question 4 Answered ///////////////////////////////////////////////////////////

/*ACTUALLY QUESTION 4
Write a function camelCase(cssProp) that changes dash-separated CSS properties like 'margin-left' into camel-cased 'marginLeft'. 
The function should remove all dashes, and uppercase the first letter of each word after a dash. 
b) Create variants of the camelCase function that use different types of for loops, and 
c) with and without the conditional operator.*/

function camelCase(cssProp) {
  let results = []
  for (let index=0; index < Input.length; index++) {
    let chars = input.split('');
    results.push(char)
  }
}
// loop over string                   ///pseudo code to help guide your mindset
// if char in string = '-' 
// replace hyphen 
// remember the next char 
// .uppercase the next charecter
// combine everything and return 

// QUESTION 5
//Decimal number operations in JavaScript can lead to unexpected results, as in the following:

let twentyCents = 0.20 
let tenCents = 0.10 
// console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`) 
// 0.2 + 0.1 = 0.30000000000000004 

/* We can sometimes avoid this using the toFixed function to force the number of decimal places as below, but 
it’s not always useful: */

let fixedTwenty = twentyCents.toFixed(2); 
let fixedTen = tenCents.toFixed(2); 
// console.log(fixedTwenty + fixedTen) //why is this not working?

/* a) Explain why the above code returns the wrong answer  // answer: hasn't been converted
b) Create a function currencyAddition(float1, float2) which safely adds the two decimal 
numbers float1 and float2 and returns the correct float result. */
let float1 = twentyCents
let float2 = tenCents

function currencyAddition(float1, float2) {
  sum = float1 + float2

  return sum.toFixed(2); //sum of float1 +float2 marked down to 2 decimal places for a "total"
}

console.log('$', currencyAddition(twentyCents, tenCents))       //inputing the parameteres twentyCents and tenCents ties in the costs of variables listed above

/* c) Create a function currencyOperation(float1, float2, operation) which safely performs the 
given operation (either +, -, / or *) on the two numbers and returns the correct float result. 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch may be useful. */

function currencyOperation(float1, float2, operation) {
}


/* d) (Extension) Extend the above function to include a fourth argument numDecimals which allows the 
operation to support different amounts of decimal places from 1 to 10.*/
// adjust the tofixed paramater on line 166 and 167

/* 6. Create a function unique(duplicatesArray) which takes an array parameter that may include duplicates. 
Your function should return an array containing only the unique values from duplicatesArray.
Test with the following arrays and create another one of your own. */

const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow'] 
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43] 

function unique() {}

console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ] 
console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]

let counted = {   //trying steps
  'red' : 0,
  'green': 0,
}

const uniqueArray = []   //his example

//what data type only accepted unique values???
// "The set"
// https://jscurious.com/javascript-set-object-to-store-unique-values/#:~:text=The%20Set%20in%20JavaScript%20is,when%20compared%20to%20the%20Array.

// pseudo code
// function unique takes in param colors
// iterate over array
// count each item and add count object
//iterate over input array and check count
// if count > 1
// then skip
// else push item to uniqueArray
// return uniqueArray

