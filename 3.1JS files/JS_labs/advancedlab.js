// 1. makeCounter below is a decorator function which creates and returns a function
// that increments a counter.
// a) Create a second counter counter2 using the makeCounter function and test to
// see if it remains independent to counter1
// b) Modify makeCounter so that it takes an argument startFrom specifying where
// the counter starts from (instead of always starting from 0)
// c) Modify makeCounter to take another argument incrementBy, which specifies how
// much each call to counter() should increase the counter value by.

// function makeCounter() {                   // commented out to move it into section b
//   let currentCount = 0;
//   return function () {
//     currentCount++;
//     console.log(currentCount);
//     return currentCount;
//   };
// }

// a) Create a second counter counter2 using the makeCounter function and test to
// see if it remains independent to counter1
function counter2() {
    let currentCount = 0;
    return function () {
      currentCount++;
      console.log(currentCount);
      return currentCount;
    };
  }

  // b) Modify makeCounter so that it takes an argument startFrom specifying where
// the counter starts from (instead of always starting from 0)
function makeCounter(startFrom) {
    let currentCount = 0;
    let newStart = (currentCount + startFrom)
    return function () {
      currentCount++;
      console.log(currentCount);
      console.log(newStart)
      return currentCount;
      
    };
  }

console.log(makeCounter(4))
let counter1 = makeCounter();
counter1(); // 1 counter1(); // 2
