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

function makeCounter(startFrom = 0, incrementBy) {
  // sets default "start" at zero unless argument entered
  let count = startFrom;

  function counter() {
    count++;
    return count;
  }
  function counter() {
    count += incrementBy;
    return count;
  }

  return counter;
}

const counter1 = makeCounter(1, 4); //counter1 = makeCounter(start #, add how many to start)
const counter2 = makeCounter(5, 1);

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

function delayMsg(msg) {
  console.log(`This message will be printed after a delay: ${msg}`); //msg here takes in the msg arguement called by lines below. and returns as part of the string output
}

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
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);    //this.whatever is contained locally inside description()
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

let newCar = Object.assign({}, car);    // creates a clone of car "object"
newCar.year = 2022;                     // changes the year for new object
car.description();                      // print the description of the original car
// Should ....Should print: 'This car is a Porsche 911 from 1964'

newCar.description();                   // This call prints the new car object description
// Should show: 'This car is a Porsche 911 from 2022'

// c) Does the delayed description() call use the original values or the new values from b)? Why?
// Answer: uses original values of car
// Answer2: because it is bound/connected to the original car object? (ask if that is right)

// d) Use bind to fix the description method so that it can be called from within setTimeout without a wrapper function
//this is what I was mentioning on line 238/239 that I had read on.

setTimeout(car.description.bind(car), 200)    // .bind(car) further tells description() where to pull its values from kind of like in example we did wednesday 5/3

// e) Change another property of the car by creating a clone and overriding it, and test that setTimeout still uses the bound value from d)

let car2 = {...car}  //deep clones object

car2.year = 1970  //changes year on this car but keeps "Porche 911"

setTimeout(car2.description.bind(car2), 1000)      //changed timeout to 1000 to help see it work in terminal
//this should display "this car is a prsche 911 from (whatever year set on line 270)