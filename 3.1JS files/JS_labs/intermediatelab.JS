/* 1. Create a function that takes a string as a parameter and returns the string with
 the first character of each word changed into a capital letter, as in the example
 below. Test it with different strings.*/

const toTitleCase = (string) => {
  return string
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// let resulta = toTitleCase("i beLIeve in ALieNs");
// let result2 = toTitleCase("yOu aRe DreaMIng");
// let result3 = toTitleCase("reD piLL Or BlUE piLl?")
// console.log(resulta)
// console.log(result2)
// console.log(result3)

//source = https://stackoverflow.com/questions/32589197/how-can-i-capitalize-the-first-letter-of-each-word-in-a-string-using-javascript
// arrow functions "explained"  https://dotnettutorials.net/lesson/javascript-arrow-function/#:~:text=The%20arrow%20function%20was%20introduced%20in%20ECMAScript%206,any%20names%2C%20the%20arrow%20makes%20the%20syntax%20shorter.
// https://www.w3schools.com/jsref/jsref_touppercase.asp

///////////////////////////////////////////////////////// Question 1 Answered ////////////////////////////////////////////////////////////////////////////////

// //////////////////////// Question 2 ////////////////////////////////
// /*2. Create a function truncate(str, max) that truncates a given string of text if its total length is greater than the max length.
// It should return either the truncated text, with an ellipsis (…) added to the end if it was too long,
// or the original text otherwise.
// b) Write another variant of the truncate function that uses a conditional operator.*/

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
// // console.log(truncatedSentence('This is Problem 2 of JS segment.'))
// // console.log(truncatedSentence('This is Problem 2 of JS segment.',20))
// // console.log(truncatedSentence('This is Problem 2 of JS segment.',15, '!!!'))

// // source: https://www.w3resource.com/javascript-exercises/javascript-string-exercise-16.php

// //////////////////////////////////////////////////// Question 2 Answered //////////////////////////////////////////////////////////////////////////////

// //////////////////////// Question 3 ////////////////////////////////
// /*3. Use the following animals array for the below tasks. Test each one by printing the result to the console.
// Review the following link for tips: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// a) Add 2 new values to the end
// b) Add 2 new values to the beginning
// c) Sort the values alphabetically
// d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the middle of the
// animals array with newValue
// e) Write a function findMatchingAnimals(beginsWith) that returns a new array containing all the
// animals that begin with the beginsWith string.Try to make it work regardless of upper/lower case.*/

// initial statement
const animals = ["Tiger", "Giraffe"];

//a) and b)  add 2 values to end and beggining
animals.push("Rabbit", "Cat");
animals.unshift("Donkey", "Monkey");

// console.log(animals)

// animals[2] = "penguin";                                              //technically replaces the middle 2 items at index two and 3 (middle) but wont work if more items added to aray
// animals[3] = "piggmy pig";

//c) sort values alphabetically..     syntax: const newObject = oldObject.sort
const animalsSorted = animals.sort();

// d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the middle of the
// animals array with newValue

function replaceMiddleAnimal(newAnimal) {
  var count = animals.length; // counts the length of array and assigns that number to count
  var mid = count / 2; // takes half of the integer assigned to count and assignes that as mid
  if (mid % 2 === 0) {
    animals.splice(mid + 1, 1, newAnimal);
  } else {
    // var middle = mid;  // changed animals.splice below to just "mid" peramiter
    animals.splice(mid, 1, newAnimal);
  }
  return animals;
}

// d)
replaceMiddleAnimal("Seal");
// console.log(animalsSorted)

// e) Write a function findMatchingAnimals(beginsWith) that returns a new array containing all the
// animals that begin with the beginsWith string.Try to make it work regardless of upper/lower case.

function findAnimal(beginsWith) {
  let fLetter = animalsSorted.filter(
    (item) => beginsWith.toLowerCase() === item[0].toLowerCase()
  );
  // by adding .toLowerCase to both beginsWith and item[] it will allow for searching for capital or lower case
  return fLetter;
}
// console.log(findAnimal('c'))

// // solution for insert/remove
// // https://video.search.yahoo.com/yhs/search;_ylt=AwrFDLMek0hkaeAb35MPxQt.;_ylu=Y29sbwNiZjEEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=how+to+insert+an+item+into+an+array+at+a+specific+index+javascript&type=asbw_8063_CHW_US_tid20133&param1=PlKV40VUjEyYlqRS8AljTRB9RQf6WrStmhkhAC17Im9zww2WPX1NAiJVvuTjmOIP&param2=9dUI1n2R0BLDxNuWfiP4aSFOTltNdSPoIx38%2BUf%2FiXrvPdoGmStdlfwLFZYDvqkAJrWWk4yNReCLnBD%2FqPsDZd7olTZcV8HMx1G%2Fk786sE2Tis1g8dJd8zxVWs%2BbKztBnq1TfqUiqPYK9pXifXmJFyorDuCsYXJE71Y6G5tfejBlvgbTeJr5weCiLd6ZNR6Ws3AD8mtPpqsVZUvT5UbHXxLA3xx043MKALeuk0aXw1zEcgU0n17xGbpW70ilfE7Ikmk%2Bk9kMkz7prkAzniJMIw%3D%3D&param3=NwVEMR%2FzKcG52XsVBYEh2zk2Yklq85vdfspZPoqz2M1qypHRDDTed5vIiOf0QJloJAws3N4BZ2OFCPQG%2BRw4WpTnzaTq2VmIHxERXcUW3rVQCtxOG%2BsIEOUp0%2Ff9ylXTGucyJu3wBF4BE4auNWzgxF2N%2FoxQBj7msD52KegNE9rRFnnDLMct8TmiAuK2uck%2FLbr5f6WpdNxibbnbgdnESnrs15Pb8rjdvagd0yfpD7wHzauSNPU2QNHVKWT11XkVkf0Ly9fZYpraPaIcBM6PZHoBaMEopJWXFidR5tyfSRlQRu5fTef94a5exCN1En%2FivW7PfcjsPud9EV6VF0WwPVpoFGQAlT294X8dA5%2Fpsd08RQpybQ4zfE6sK1rcaCrOrHV%2B2zp1PrO5dUWg3Q9WL9kvr%2FAU08juXoDo7OAyZwPsChGZ46yIqvhfgbIJsr7mTEdeNLlHSK9VH0T4gDBOWVXWrEwXEuRMNdN%2BE41jyFhROZ7ZBYah1UCwi6VpstbDp9fvh%2BxOq8pKOErb7URDpg%3D%3D&param4=%2FT0Pb%2BlNjez7ZOh6nG89pD2k9NM4S5uYZjkFZM9DvCE%3D&hsimp=yhs-syn&hspart=iba&ei=UTF-8&fr=yhs-iba-syn#id=1&vid=078cd1dba1dd2abeb589ac2a13770ee4&action=view

// // replacing middle of array source:
// // https://stackoverflow.com/questions/74049829/function-that-inserts-a-new-value-in-the-middle-of-an-array

// /////////////////////////////////////////////////////////// Question 3 //////////////////////////////////////////////////////////////////////////////

// //////////////////////// Question 4 ////////////////////////////////
// /*ACTUALLY QUESTION 4
// Write a function camelCase(cssProp) that changes dash-separated CSS properties like 'margin-left' into camel-cased 'marginLeft'.
// The function should remove all dashes, and uppercase the first letter of each word after a dash.
// b) Create variants of the camelCase function that use different types of for loops, and
// c) with and without the conditional operator.*/

let cssProps = ["margin-left", "font-family"]; //ask about adding additional elements here

// console.log(cssProps[0].split("-").join(''));    // removes hyphen and rejoins string to output as single string, result = marginleft
let noCamelProps = cssProps.map(antiCamelCase);

// console.log(cssProps.map(item => {
//   console.log(item)
//   return item
// }))

function antiCamelCase(cssProp) {
  let newProps = cssProp.split("-");
  for (let i in cssProps) {
    // Short hand for loop syntax (less flexible)
    newProps[i] = newProps[i].charAt(0).toUpperCase() + newProps[i].slice(1);
  }
  return newProps.join("");
}

// console.log(antiCamelCase('margin-left'));   //console logs the function on a single input
// console.log(noCamelProps)                   // console logs the entire array "noCamelProps"

// //////////////////////// Question 5 ////////////////////////////////
// // QUESTION 5
// //Decimal number operations in JavaScript can lead to unexpected results, as in the following:

let twentyCents = 0.2;
let tenCents = 0.1;
// console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// 0.2 + 0.1 = 0.30000000000000004

/* We can sometimes avoid this using the toFixed function to force the number of decimal places as below, but
it’s not always useful: */

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
// console.log(fixedTwenty + fixedTen)      //why is this not working?
// console.log(fixedTen)

// /* a) Explain why the above code returns the wrong answer
// answer: hasn't been converted from a string

// b) Create a function currencyAddition(float1, float2) which safely adds the two decimal
// numbers float1 and float2 and returns the correct float result.

let float1 = twentyCents;
let float2 = tenCents;
// console.log(fixedTwenty)
function currencyAddition(float1, float2) {
  sum = float1 + float2;

  return sum.toFixed(2); //sum of float1 +float2 marked down to 2 decimal places for a "total"
}

// console.log("$", currencyAddition(0.3, 0.8));                   //inputting the parameters twentyCents and tenCents ties in the costs of variables listed above

/* c) Create a function currencyOperation(float1, float2, operation) which safely performs the
given operation (either +, -, / or *) on the two numbers and returns the correct float result.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch may be useful. */

function currencyOperation(float1, float2, operation) {
  let result = 0;
  switch (operation) {
    case "+":
      // console.log(`${float1} + ${float2}`);
      result = float1 + float2; /// changed from return because of line 189 added " let result = 0"
      break;
    case "-":
      // console.log(`${float1} - ${float2}`);
      result = float1 - float2;
      break;
    case "/":
      // console.log(`${float1} / ${float2}`);
      result = float1 / float2;
      break;
    case "*":
      // console.log(`${float1} * ${float2}`);
      result = float1 * float2;
      break;

    default:
      break;
  }
  return result;
}
// console.log('$', currencyOperation(0.5, 0.6, "+"));               // returns the result of both properties and their operation as a math result + $ for flavor

/* d) (Extension) Extend the above function to include a fourth argument numDecimals which allows the
operation to support different amounts of decimal places from 1 to 10.*/

function currencyOperation2(float1, float2, operation, numDecimals) {
  let result = 0;
  switch (operation) {
    case "+":
      // console.log(`${float1} + ${float2}`);
      result = float1 + float2; /// changed from return because of line 189 added " let result = 0"
      break;
    case "-":
      // console.log(`${float1} - ${float2}`);
      result = float1 - float2;
      break;
    case "/":
      // console.log(`${float1} / ${float2}`);
      result = float1 / float2;
      break;
    case "*":
      // console.log(`${float1} * ${float2}`);
      result = float1 * float2;
      break;

    default:
      break;
  }
  return result.toFixed(numDecimals);
}
// console.log('$',currencyOperation2(0.5, 0.6, "+", 2));                  //same as previous part but allows for an additional parameter to be entered changing the decimal place
// console.log('$',currencyOperation2(4, 0.6, "*", 2));

// console.log(0.3 === currencyAddition(0.1, 0.2));                         // true (if you use == instead of ===)
// console.log(0.3 === currencyOperation2(0.1, 0.2, "+", 2));               // true (if you use == instead of ===)

// adjust the tofixed parameter on line 166 and 167

// //////////////////////// Question 6 ////////////////////////////////
// /* 6. Create a function unique(duplicatesArray) which takes an array parameter that may include duplicates.
// Your function should return an array containing only the unique values from duplicatesArray.
// Test with the following arrays and create another one of your own. */

// /// slides 49-51 /// new array Set

const colors = [
  //  original string array
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "red",
  "blue",
  "yellow",
];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]; // original integers array

function unique(duplicatesArray) {
  //stephen found a FANTASTIC 3 line solution for
  let uniqueItem = new Set(duplicatesArray);
  return uniqueItem;
}

// console.log(unique(colors)); // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
// console.log(unique(testScores)); // [ 55, 84, 97, 63, 32, 91, 43 ]

// //what data type only accepted unique values???
// // "The set"
// // https://jscurious.com/javascript-set-object-to-store-unique-values/#:~:text=The%20Set%20in%20JavaScript%20is,when%20compared%20to%20the%20Array.

//////////////////////// Question 7 ////////////////////////////////

// 7. Use the following array of book objects to practice the array functions for map, find and
// filter. Test each of your answers to the below tasks.
const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
  { id: 4, title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
];
// a) Write a function getBookTitle(bookId) that uses the find function to return the
// title of the book object with the matching id.

function getBookTitle(bookID) {
  let findTitle = books.find((book) => bookID === book.id);
  return findTitle.title;
}
// console.log(getBookTitle(3));

// b) Write a function getOldBooks() that uses the filter function to return all book
// objects written before 1950.

function getOldBooks() {
  return books.filter((book) => book.year < 1950); // include 1950 here to apply to objective params
}
// console.log(getOldBooks())

// c) Write a function addGenre() that uses the map function to add a new genre property
// to all of the above books, with the value ‘classic’.
function addGenre() {
  return books.map((book) => ({ ...book, Genre: "classic" })); // creates a clone of array and adds in new property
}
// console.log(addGenre())
// d) (Extension) Write a function getTitles(authorInitial) that uses map and
// filter together to return an array of book titles for books written by authors whose
// names start with authorInitial.
function getTitles(authorInitial) {
  return books.filter(
    (book) => book.author.charAt(0) === authorInitial.toUpperCase()
  );
  //filters book for first char in author properties and .upperCase() will work for either lowercase or upper
}
// console.log(getTitles('a'))
// e) (Extension) Write a function latestBook() that uses find and forEach to get the
// book with the most recent publication date.

function latestBook(books) {
  Array.prototype.max = function () {
    return Math.max.apply(null, this);
  };
  let years = books.map((book) => book.year);
  let latest = years.max();
  books.forEach((book) => {
    if (book.year == latest) {
      console.log(book);
    }
  });
}

// CALL FUNCTION TO SORT OUT LATEST BOOK FROM THE LIST
// latestBook(books); // My poor POOR brain for this last extension.

//////////////////////// Question 8 ////////////////////////////////

// 8. The following code creates a new Map object for storing names
// beginning with A, B, or C with their phone numbers.
const phoneBookABC = new Map(); //an empty map to begin with
phoneBookABC.set("Annabelle", "0412312343");
phoneBookABC.set("Barry", "0433221117");
phoneBookABC.set("Caroline", "0455221182");

// a) Create a new phoneBookDEF Map to store names beginning with D, E or F
let phoneBookDEF = new Map();

// b) Initialise the contents of phoneBookDEF by passing in an array of keys/values
// phoneBookDEF = phoneBookABC.map(name => name)
phoneBookDEF.set("Heustis", "#number 1");
phoneBookDEF.set("Kentucky", "#number 2");
phoneBookDEF.set("Darleeene", "#number 3");

// let letters = new Array('D', 'E', 'F');

// let names = new Array('Diana', 'dingdong', 'Frank')
// phoneBookDEF.set(letters,names)             // letters set as key and names = values

// c) Update the phone number for Caroline
phoneBookABC.set("Caroline", "#I am totally a number"); //quick way to update value

// console.log(phoneBookABC)

// d) Write a function printPhoneBook(contacts) that prints the names and phone
// numbers in the given Map

function printPhonebook(contacts) {
  for (let name of contacts) {
    let substring = ",";
    name.toString().indexOf(substring);
    let contact = name.toString().slice(0, name.toString().indexOf(substring));
    let number = name
      .toString()
      .slice(name.toString().indexOf(substring) + 1, name.toString().length);
    console.log(contact + " : " + number);
  }
}

// printPhonebook(phoneBookABC);
// printPhonebook(phoneBookDEF);

// e) Combine the contents of the two individual Maps into a single phoneBook Map
function mergePhoneBooks(phone1, phone2) {
  let phoneBookAll = new Map([...phone1, ...phone2]);
  return phoneBookAll;
}

// console.log(phoneBookAll)
// f) Print out the full list of names in the combined phone book

// console.log(mergePhoneBooks(phoneBookABC,phoneBookDEF))

//////////////////////// Question 9 ////////////////////////////////

// 9. Given the below salaries object, perform the following tasks.
let salaries = {
  Timothy: 35000,
  David: 25000,
  Mary: 55000,
  Christina: 75000,
  James: 43000,
};
// a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries

function salTotal(sal) {
  let total = 0; // for of loop.. not for in because this is iterable array.
  for (let i of Object.values(sal)) {
    // syntax for for/of loop = for (let x of arr){text +=arr[x]}
    total += i; // has to be just i(index) no brackets or will give wrong answers only
  }
  return total; // locks in the total so can read when called
}

// console.log('$', salTotal(salaries));

// b) Write a function topEarner(salaries) that calculates and returns the name of the person
// earning the highest salary
function topEarner() {}
//psuedo:
// 1. sort values into a seperate array so smallest to biggest value
// 2. define .length or find last item
// 3. return salaries[lastitem of sorted .values array]

//////////////////////// Question 10 ////////////////////////////////
// 10.The following code uses the Date object to print the current time and the number of hours
// that have passed today so far. Extend the code to do the following:
const today = new Date();
// console.log('Current time is ' + today.toLocaleTimeString())         //original prob call
// console.log(today.getHours() + ' hours have passed so far today')   //original prob call
// a) Print the total number of minutes that have passed so far today
// console.log(today.getHours()*60 + today.getMinutes() + ' minutes have passed so far today')
// b) Print the total number of seconds that have passed so far today
// console.log(today.getHours()*60 + today.getMinutes()*60*60 + today.getSeconds() + ' seconds have passed so far today')

// c) Calculate and print your age as: 'I am x years, y months and z days old'

function amIOld() {
  // let howOld = today.getFullYear()-1989                  // this part messes up the order and ruins code, ask how else to do this
  let dateString = '1989-05-24'
  let bDay = new Date(dateString);
  let years = today.getFullYear()-bDay.getFullYear()
  let months = today.getMonth()-bDay.getMonth();

  let days = today.getDate()-bDay.getDate();
  let x = years;
  let y = months;
  let z = days;
  console.log("I am ", +x + " years, ", +y + " months and ", +z + " days old");
}
// amIOld()


// d) Write a function daysInBetween(date1, date2) which calculates and returns the amount
// of days in between the two given dates.

function daysInBetween(date1, date2) {
  // let date1 = new Date("06/30/2019");
  // let date2 = new Date("07/30/2019");

  let Difference_In_Time = date2.getTime() - date1.getTime();

  let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

  //To display the final no. of days (result)
  console.log(
    "Total number of days between dates  \n" +
      date1 +
      "<br> and <br>" +
      date2 +
      " is: \n " +
      Difference_In_Days
  );
}

// console.log(daysInBetween(new Date("1989-05-24"), new Date('1989-06-24')));
