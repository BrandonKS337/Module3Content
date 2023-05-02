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
console.log(counter1()); // logs Output 1 
console.log(counter1()); // logs Output 2
console.log(counter1()); // logs Output 3

console.log(counter2()); // logs Output 1    
console.log(counter2()); // logs Output 2    
console.log(counter2()); // logs Output 3     
