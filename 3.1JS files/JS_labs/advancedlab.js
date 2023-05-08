///////////////////////////////// Problem 1 ///////////////////////////////////

// 1. makeCounter below is a decorator function which creates and returns a function
// that increments a counter.
// a) Create a second counter counter2 using the makeCounter function and test to
// see if it remains independent to counter1
// b) Modify makeCounter so that it takes an argument startFrom specifying where
// the counter starts from (instead of always starting from 0)
// c) Modify makeCounter to take another argument incrementBy, which specifies how
// much each call to counter() should increase the counter value by.

function makeCounter() {
  let currentCount = 0;
  return function () {
    currentCount++;
    console.log(currentCount);
    return currentCount;
  };
}
// a) Create a second counter counter2 using the makeCounter function and test to
// see if it remains independent to counter1
// AND b) Modify makeCounter so that it takes an argument startFrom specifying where
// the counter starts from (instead of always starting from 0)
// AND c) Modify makeCounter to take another argument incrementBy, which specifies how
// much each call to counter() should increase the counter value by.

// function makeCounter(startFrom = 0, incrementBy) {
//   // sets default "start" at zero unless argument entered
//   let count = startFrom;

//   function counter() {
//     count++;
//     return count;
//   }
//   function counter() {
//     count += incrementBy;
//     return count;
//   }

//   return counter;
// }

// const counter1 = makeCounter(1, 4); //counter1 = makeCounter(start #, add how many to start)
// const counter2 = makeCounter(5, 1);

//testing console logging counter multiple times for part a to see them in action as they are called
// multiple Time
// Note: If left empty these below log as stated.
// console.log(counter1()); // logs Output 1
// console.log(counter1()); // logs Output 2
// console.log(counter1()); // logs Output 3

// console.log(counter2()); // logs Output 1
// console.log(counter2()); // logs Output 2
// console.log(counter2()); // logs Output 3

///////////////////////////////// Problem 2 ///////////////////////////////////
// 2. The following delayMsg function is intended to be used to delay printing a message until
// some time has passed.
// a) What order will the four tests below print in? Why?
// b) Rewrite delayMsg as an arrow function
// c) Add a fifth test which uses a large delay time (greater than 10 seconds)
// d) Use clearTimeout to prevent the fifth test from printing at all.

function delayMsg(msg) {
  console.log(`This message will be printed after a delay: ${msg}`);
}
// setTimeout(delayMsg, 100, "#1: Delayed by 100ms");       //commented out all these lines to not mess with part d
// setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
// setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
// delayMsg("#4: Not delayed at all");

// a) What order will the four tests below print in? Why?
// print order is #4, #3, #2, #1
// no delay set on #4 so will call instantly. It is not using setTimeout so is calling even before #3
// 3,2,1 in that order are set to delay out by 0ms 20ms 100ms meaning more and more time set into the delay.

// b) Rewrite delayMsg as an arrow function
const delayMsg2 = (msg) => {
  //pretty much the same syntax but change "function" to const to "declare it" (ask robert if I phrased this right)
  console.log(`This message will be printed after a delay: ${msg}`);
};

// setTimeout(delayMsg2, 11000, 'This took 11 seconds')          // super nerve racking waiting 11 seconds for something to just SHOW haha
// 11,000 number comes from changing 11 seconds to milliseconds aka a 1000 ms/1 sec

// d) Use clearTimeout to prevent the fifth test from printing at all.

// function delayMsg(msg) {
//   console.log(`This message will be printed after a delay: ${msg}`); //msg here takes in the msg arguement called by lines below. and returns as part of the string output
// }

// let timeoutId = setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
// setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
// setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
// setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
// delayMsg("#4: Not delayed at all");
// setTimeout(delayMsg, 11000, "I am #5 and I took 11 seconds"); // super nerve racking waiting 11 seconds for something to just SHOW haha

// clearTimeout(timeoutId);

//ask robert about this segment I can't get it to skip over the 5th parameter

///////////////////////////////// Problem 3 ///////////////////////////////////

// 3. 'Debouncing' is a concept that refers to 'putting off' the execution of multiple, fast-timed,
// similar requests until there's a brief pause, then only executing the most recent of those requests.
// See https://www.techtarget.com/whatis/definition/debouncing

// It's often used to handle fast-firing scrolling events in a browser, or to prevent multiple server
// requests being initiated if a user clicks repeatedly on a button.

// function printMe() {                                                     //commenting out this segment for partc
//   console.log("printing debounced message");
// }
// printMe = debounce(printMe); //create this debounce function for a)

// setTimeout(printMe, 100);
// setTimeout(printMe, 200);
// setTimeout(printMe, 300);

function debounce(func, ms) {
  //added ms to represent milliseconds/aka the new defined length
  let timeoutId;
  // return function() {
  //   const context = this;
  //   const args = arguments;
  //   clearTimeout(timeoutId);
  //   timeoutId = setTimeout(() => func.apply(context, args), 1000);            // apply
  // }
  return function (...args) {
    const context = this;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(context, args), ms);
  };
}

function myFunction() {
  console.log("My function is called!");
}

const debouncedFunction = debounce(myFunction, 500);

// Using the following code to test and start with:
// a) Create a debounce(func) decorator, which is a wrapper that takes a function func and suspends calls
// to func until there's 1000 milliseconds of inactivity. After this 1 second pause, the most recent call
// to func should be executed and any others ignored.

//code implanted above

// b) Extend the debounce decorator function to take a second argument ms, which defines the length of the
// period of inactivity instead of hardcoding to 1000ms

//code implanted above and the call for new function listed here
// debouncedFunction()    //calls the debounced function and executes after 1000 ms of inactivity

// c) Extend debounce to allow the original debounced function printMe to take an argument msg which is included
// in the console.log statement.

function printMe(msg) {
  console.log(`printing debounced message: ${msg}`);
}

const debouncedPrintMe = debounce(printMe, 1000);

// debouncedPrintMe('hello'); // ignored. debouncedPrintMe is debounced version of printME and prints only the last arg after whatever value I input as value in debounce properties
// debouncedPrintMe('world');

//fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls

///////////////////////////////// Problem 4 ///////////////////////////////////

// 4. The Fibonacci sequence of numbers is a famous pattern where the next number in the sequence is the sum
// of the previous 2. e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.
// a) Write a function printFibonacci() using setInterval that outputs a number in the Fibonacci sequence
// every second.

function printFibonacci() {
  let a = 0;
  let b = 1;
  setInterval(() => {
    //note to self its not set_Interval...stop typing that space lol
    const c = a + b;
    console.log(c);
    a = b;
    b = c;
  }, 1000);
}

// printFibonacci()  //this calls the function to work default with 1 as the starting integer

// b) Write a new version printFibonacciTimeouts() that uses nested setTimeout calls to do the same thing
// AND c) Extend one of the above functions to accept a limit argument, which tells it how many numbers to print
// before stopping.
function printFibonacciTimeouts() {
  let a = 0;
  let b = 1;
  let i = 0; //this is the limit argument counter variable, if statement built in further down. starts at 0 and counts each time function adds a new value
  function printNext() {
    const c = a + b;
    console.log(c);
    a = b;
    b = c;
    i++; //this takes current total and adds next value pair
    if (i < 5) {
      // this is the limit parameters. Sets function to only show 5 results unless changed
      setTimeout(printNext, 1000); // this is the "nested segment" buried into an if statement
    }
  }
  setTimeout(printNext, 1000); // same as above. sets interval to 1000ms
}

// printFibonacciTimeouts()         //calling new function that should always show same result as above.
//NOTE TO SELF....Stop leaving this on and saving the page.
//Please and thanks...

///////////////////////////////// Problem 5 ///////////////////////////////////

// 5. The following car object has several properties and a method which uses them to print
// a description. When calling the function normally this works as expected, but using it
// from within setTimeout fails. Why?

//answer: from what I could find out the setTimeout fails because "this" keyword inside description() doesn't
// point/refer to the "car" "object", car.description is passed as a function
// reference without the object reference.

let car = {
  make: "Porsche",
  model: "911",
  year: 1964,

  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`); //this.whatever is contained locally inside description()
  },
};

// car.description(); //works
// setTimeout(car.description, 200); //fails        // I had read something about binding the object to the description????
// so something like setTimeout(car.description.bind(car), 200) should fix this wihtout wrapping stuff as mentioned in a

// a) Fix the setTimeout call by wrapping the call to car.description() inside a function

// setTimeout(function() {     //instead of calling car.description, 200 here you can
//   car.description();        // "nest"(sort of) it inside this blank function and it just works
// }, 200);                    // doing it this way makes 'this' keyword in description() refer to car object when setTimeout is called now.

// b) Change the year for the car by creating a clone of the original and overriding it

let newCar = Object.assign({}, car); // creates a clone of car "object"
newCar.year = 2022; // changes the year for new object
// car.description(); // print the description of the original car
// Should ....Should print: 'This car is a Porsche 911 from 1964'

// newCar.description(); // This call prints the new car object description
// Should show: 'This car is a Porsche 911 from 2022'

// c) Does the delayed description() call use the original values or the new values from b)? Why?
// Answer: uses original values of car
// Answer2: because it is bound/connected to the original car object? (ask if that is right)

// d) Use bind to fix the description method so that it can be called from within setTimeout without a wrapper function
//this is what I was mentioning on line 238/239 that I had read on.

// setTimeout(car.description.bind(car), 200); // .bind(car) further tells description() where to pull its values from kind of like in example we did wednesday 5/3

// e) Change another property of the car by creating a clone and overriding it, and test that setTimeout still uses the bound value from d)

let car2 = { ...car }; //deep clones object

car2.year = 1970; //changes year on this car but keeps "Porsche 911"

// setTimeout(car2.description.bind(car2), 1000); //changed timeout to 1000 to help see it work in terminal
//this should display "this car is a Porsche 911 from (whatever year set on line 270)

///////////////////////////////// Problem 6 ///////////////////////////////////

// 6. Use the Function prototype to add a new delay(ms) function to all functions, which can be used to delay
// the call to that function by ms milliseconds.

// function multiply(a, b) {
//   console.log(a * b);
// }
// multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds

// Function.prototype.delay = function(ms) {        //adds a delay method to all funcs/returns new func delayed execution of orig by 'ms'
//   const func = this;
//   return function(...args) {
//     setTimeout(() => {
//       func.apply(this, args);                    //apply is used to call orig func
//     }, ms);
//   };
// };

// a) Use the example multiply function below to test it with, as above, and assume that all delayed functions will
// take two parameters

// function multiply(a, b) {           //moving down the function from line 281-284. Adding in additional params
//   console.log(a * b);
// }

// multiply.delay(1000)(2, 3); // delays execution for 1 second and logs 6

// b) Use apply to improve your solution so that delayed functions can take any number of parameters

Function.prototype.delay = function (ms) {
  // uses rest param to capture args called with .delay func.
  const func = this;
  return function (...args) {
    setTimeout(() => func.apply(this, args), ms); //uses apply method here to call orig function with input args
  };
};

// c) Modify multiply to take 4 parameters and multiply all of them, and test that your delay prototype function still works.

function multiply(a, b, c, d) {
  //modded from line 298-302 to take in 4 params
  console.log(a * b * c * d); // added extra 2 params to fill in
}

// multiply.delay(1000)(2, 3, 4, 6); // delays execution for 1 second and logs 144

///////////////////////////////// Problem 7 ///////////////////////////////////

// 7. In JavaScript, the toString method is used to convert an object to a string representation.
// By default, when an object is converted to a String, it returns a string that looks something like [object Object].
// However, we can define our own toString methods for custom objects to provide a more meaningful string representation.

function Person(name, age, gender) {
  // moved this up because made little sense to have at the bottom of question arrangement wise.
  this.name = name;
  this.age = age;
  this.gender = gender;
}
// const person1 = new Person("James Brown", 73, "male");                   //commented out to run line 350 and 351
// console.log("person1: " + person1); //prints person1: [object Object]    //commented out to run line 350 and 351

// a) Define a custom toString method for the Person object that will format and print their details

Person.prototype.toString = function () {
  return this.name + ", " + this.age + " years old, " + this.gender; //returns: para1, para2, para3 after running const person#.tostring inside consolelog
};

// b) Test your method by creating 2 different people using the below constructor function and printing them

const person1 = new Person("James Brown", 73, "male");
const person2 = new Person("Mary Smith", 32, "female");

// console.log(person1.toString()); // Returns to terminal/Output: James Brown, 73 years old, male
// console.log(person2.toString()); // Returns to terminal/Output: Mary Smith, 32 years old, female

// c) Create a new constructor function Student that uses call to inherit from Person and add an extra property cohort

function Student(name, age, gender, cohort) {
  //start of constructor function syntax
  Person.call(this, name, age, gender); // this part uses the call method to inherit from person object
  this.cohort = cohort; //This part adds the new prop 'cohort' to student object
}

// d) Add a custom toString for Student objects that formats and prints their details. Test with 2 students.

Student.prototype.toString = function () {
  return (
    this.name +
    ", " +
    this.age +
    " years old, " +
    this.gender +
    ", cohort " +
    this.cohort
  );
};

const student1 = new Student("John Smith", 21, "male", 1);
const student2 = new Student("Jane Doe", 23, "female", 2);

// console.log(student1.toString()); // Returns to terminal/Output: John Smith, 21 years old, male, cohort 1
// console.log(student2.toString()); // Returns to terminal/Output: Jane Doe, 23 years old, female, cohort 2

///////////////////////////////// Problem 8 ///////////////////////////////////
///Need to answer///

// 8. The following DigitalClock class uses an interval to print the time every second once started, until stopped.

class DigitalClock {
  constructor(prefix) {
    this.prefix = prefix;
  }
  display() {
    let date = new Date();
    //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];
    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
  }
}
const myClock = new DigitalClock("my clock:");
// myClock.start();

// a) Create a new class PrecisionClock that inherits from DigitalClock and adds the parameter precision – the
// number of ms between 'ticks'.
// This precision parameter should default to 1 second if not supplied.

class PrecisionClock extends DigitalClock {
  //this part creates PrecClock and clones class data from DigiClock
  constructor(prefix, precision = 1000) {
    //constructor function syntax sets new precision param to be 1 sec by default. (Personal note: this is milliseconds to seconds. stop forgetting how to math)
    super(prefix); //(used super because super/subclass idea) when using extends keyword you have to pair it with super in order to initialize inherited props and methods of the base/original class
    this.precision = precision;
  }

  start() {
    this.display();
    this.timer = setInterval(() => this.display(), this.precision);
  }
}

// const precisionClock = new PrecisionClock('My Precision Clock', 2500);   // Ignore: Just logging to see output for precision clock
// console.log(precisionClock);

// b) Create a new class AlarmClock that inherits from DigitalClock and adds the parameter wakeupTime in the format hh:mm. When the clock
// reaches this time, it should print a 'Wake Up' message and stop ticking. This wakeupTime parameter should default to 07:00 if not supplied.

class AlarmClock extends DigitalClock {
  // copies digiClock
  constructor(prefix, wakeupTime = "07:00") {
    // construc func syntax adding "wakeup" default = 7AM
    super(prefix); //needed because of extends keyword on line 431
    this.wakeupTime = wakeupTime; //changes object name
  }
  display() {
    //creating func called display under constructor syntax
    let date = new Date(); //set local computers date as obj called "date"
    let [hours, mins] = [date.getHours(), date.getMinutes()]; //set hours and minutes using local devices time via pulling data from new date object with .gethours and .get minutes
    // if (hours < 10) hours = "0" + hours;                  // this part and next line just make it so that there are no single digit outputs on either side of the hours:minutes output for readability
    // if (mins < 10) mins = "0" + mins;
    let currentTime = `${hours}:${mins}`; //sets new obj using hour and minutes
    console.log(`${this.prefix} ${currentTime}`);
    if (currentTime === this.wakeupTime) {
      // This if statement compares current time to alarm clock time and will stop log once local hits current
      console.log("Wake Up");
      this.stop();
    }
  }
}

// const precisionClock = new PrecisionClock('precision clock:', 5000);      // this part logs ('text to be displayed' + the delay between clock() outputs.) ex: 5000 on second param = 5 second delay between outputs/logs
// precisionClock.start();                                       // calls the function using precisionClock class specifications

// const alarmClock = new AlarmClock('alarm clock:', '17:40');   // this part mainly just sets up alarm for whatever time user sets in.
// alarmClock.start();                            // calling this func will run the code until local timer hits that exact time.
//to test for accuracy I have been setting 2nd param line 460 up for 1 minutes past local time using 24 hour format

///////////////////////////////// Problem 9 ///////////////////////////////////

// 9. We can delay execution of a function using setTimeout, where we need to provide both the callback function
// and the delay after which it should execute.

// a) Create a promise-based alternative randomDelay() that delays execution for a random amount of time (between 1
// and 20 seconds) and returns a promise we
// can use via .then(), as in the starter code below
// b) If the random delay is even, consider this a successful delay and resolve the promise, and if the random number
// is odd, consider this a failure and reject it
// c) Update the testing code to catch rejected promises and print a different message
// d) Try to update the then and catch messages to include the random delay value

// function randomDelay() {
//   // your code
// }
// randomDelay().then(() => console.log("There appears to have been a delay."));

//Start of Code using template and a-d stuff above

function randomDelay() {
  const delay = Math.floor(Math.random() * 20) + 1; // Part a) generates random delay between 1 and 20 seconds/ Math.random is func to generate random # and *20 is the "ceiling". This is all then set up as a new object called delay..aka the random delay created
  return new Promise((resolve, reject) => {
    //retains "Promise" outputting results of setTimeout
    setTimeout(() => {
      //setTimeout func set with arrow syntax to create if else conditions for basically"even or odd numbered delay
      if (delay % 2 === 0) {
        // basically.. if the random number generated doesn't have a remainder when divided in half it will register as an even number
        resolve(delay);
      } else {
        //this part of loop will log error if delay/2 has a remainder. Aka if its an odd number
        reject(`Error: Random delay of ${delay} seconds is odd.`);
      }
    }, delay * 1000);
  });
}

// randomDelay()
//   .then((delay) => console.log(`Success: Delayed for ${delay} seconds.`))    //chained .then method loging succes message and .catch method logging error. output of randomDelay() in this manor will show one result or the other only.
//   .catch((error) => console.error(error));
// MUST include the call for then and catch or it will run function properly but not log showing the results

///////////////////////////////// Problem 10 ///////////////////////////////////

// 10. Fetch is a browser-based function to send a request and receive a response from a server, which uses
// promises to handle the asynchronous response.
// The below fetchURLData uses fetch to check the response for a successful status code, and returns a promise
// containing the JSON sent by the remote server
// if successful or an error if it failed. (To run this code in a node.js environment, follow the instructions in
// the comments before the function.)

// a) Write a new version of this function using async/await
// b) Test both functions with valid and invalid URLs
// c) (Extension) Extend your new function to accept an array of URLs and fetch all of them, using Promise.all to
// combine the results.

//run 'npm init' and accept all the defaults
//run 'npm install node-fetch'
//add this line to package.json after line 5: "type": "module",

// import fetch from "node-fetch";
// globalThis.fetch = fetch;

// function fetchURLData(url) {
//   let fetchPromise = fetch(url).then((response) => {
//     if (response.status === 200) {
//       return response.json();
//     } else {
//       throw new Error(`Request failed with status ${response.status}`);
//     }
//   });
//   return fetchPromise;
// }

// fetchURLData("https://jsonplaceholder.typicode.com/todos/1")
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error.message));

//Start of new version using Async/await:
// a) Write a new version of this function using async/await

import fetch from "node-fetch"; //attempts to import info from node-fetch witch is located inside package-lock.json
globalThis.fetch = fetch; //global is all source not just local

async function fetchURLData(url) {            //naming new func and declaring it async with input url as param var
  try {
    const response = await fetch(url);        //makes HTTP request using fetch function to url and waiting for response via "await" keyword
    if (response.status === 200) {            //checks whether status code on "response obj is '200'. evidently in HTTP status 200 means request succeeded and server sent response back.
      const data = await response.json();
      return data;                            //data = info returned by the server hosting the URL (TODO: check to make sure this line of thought is worded correctly)
    } else {                                  // if server query didn't return 200 then "throw....line 557"
      throw new Error(`Request failed with status ${response.status}`); 
    }
  } catch (error) {
    throw new Error(`Error: ${error.message}`); //throw stops execution of code and returns error obj to caller of func.
  }
}

// b) Test both functions with valid and invalid URLs

const validURL = "https://jsonplaceholder.typicode.com/todos/1";    //URL provided by problem 10 and will show a valid response to async/await stuff
const invalidURL = "https://jsonplaceholder.typicode.com/invalid";    //This will cause an error to log in terminal

fetchURLData(validURL)                                                // This part tests fetchURLData with good URL using Promises
  .then((data) => console.log("Fetch with Promises:", data))          // This part says if server comes back good on URL then log the returned data to console
  .catch((error) => console.error("Fetch with Promises:", error.message));  // isn't necessary because URL is good in this case but this would return an error if URL is bad

(async () => {                                                      //This block of code uses async/await syntax. Fetches data from server using good URL. 
  try {
    const data = await fetchURLData(validURL);                      //await keyword used here to "await" fetchedURLData() which was promised to resolve or reject thanks to the above.
    console.log("Fetch with async/await:", data);                   //executed if comes back good from Promise 
  } catch (error) {                                                 //executed if promise is bad
    console.error("Fetch with async/await:", error.message);
  }
})();

fetchURLData(invalidURL)                                            //similar to above testing good URL except this is checking "invalid" URL
  .then((data) => console.log("Fetch with Promises:", data))        // will fail and move down to .catch
  .catch((error) => console.error("Fetch with Promises:", error.message));  // will be used in most below to produce error message because of known bad URL listed above.

(async () => {                                                // runs through code block once promise is returned invalid
  try {
    const data = await fetchURLData(invalidURL);
    console.log("Fetch with async/await:", data);
  } catch (error) {                                           // When invalid is tested this code executes outputting "Fetch with async/await: Error: Request failed with status 404"
    console.error("Fetch with async/await:", error.message);
  }
})();

async function fetchAllURLData(urls) {                // This code block is specifically for allowing fetchURLData function to accept an array of URLs and "fetch" all of them
  try {
    const promises = urls.map((url) => fetchURLData(url));    // urls map targets the const set up below with strings of urls entered. 
    const data = await Promise.all(promises);         // data is the info returned from server request was "awaiting" for .all of the URLS in array
    return data;
  } catch (error) {                                   //This portion will throw error if return is != 200. error is defined in the fetchAllURLData() function below8
    throw new Error(`Error: ${error.message}`);
  }
}
const urls = [
  "https://jsonplaceholder.typicode.com/todos/1",   
  "https://jsonplaceholder.typicode.com/todos/2",   
  "https://jsonplaceholder.typicode.com/todos/3",
];

fetchAllURLData(urls)
  .then((data) => console.log("Fetch all with async/await:", data))
  .catch((error) =>
    console.error("Fetch all with async/await:", error.message)
  );

//  fetch youtube vid: https://www.youtube.com/watch?v=cuEtnrL9-H0
// https://www.youtube.com/watch?v=drK6mdA9d_M
// https://www.youtube.com/watch?v=tc8DU14qX6I
