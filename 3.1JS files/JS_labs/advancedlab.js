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
const delayMsg2 = (msg) => {                 //pretty much the same syntax but change "function" to const to "declare it" (ask robert if I phrased this right) 
  console.log(`This message will be printed after a delay: ${msg}`);
}

// setTimeout(delayMsg2, 11000, 'This took 11 seconds')          // super nerve racking waiting 11 seconds for something to just SHOW haha
// 11,000 number comes from changing 11 seconds to milliseconds aka a 1000 ms/1 sec

// d) Use clearTimeout to prevent the fifth test from printing at all.

function delayMsg(msg) {
  console.log(`This message will be printed after a delay: ${msg}`);    //msg here takes in the msg arguement called by lines below. and returns as part of the string output
}

let timeoutId = setTimeout(delayMsg, 100, "#1: Delayed by 100ms")
setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
delayMsg("#4: Not delayed at all");
setTimeout(delayMsg, 11000, 'I am #5 and I took 11 seconds')          // super nerve racking waiting 11 seconds for something to just SHOW haha

clearTimeout(timeoutId);

//ask robert about this segment I can't get it to skip over the 5th parameter


