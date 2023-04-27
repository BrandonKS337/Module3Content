// let sayHi = function (who='Guest' /*variable*/) {

//     // console.log('Hi, ' + who + "!")
// }
// let sayGoodbye= function (who='Guest' /*variable*/) {

//     // console.log('Bye, ' + who + "!")
// }
// const myTimeout = setInterval(sayHi,10000000)
// sayGoodbye('Test')

//always clear timeouts. timeout can be set conditionally to occur after a specific amount of time surrounding an event such as AFK 5 minutes from page(no input 5 minutes)
// clearTimeout(myTimeout)

// sayHi()

// setTimeout(sayHi('Timer'), 1000)

// function printGreeting(name) {
//     console.log(`Hello, ${name}.`)
// }

// printGreeting.test = 'This is a test!'

// printGreeting('Brandon')

// function loggingTimingDecorator(originalFunction) {
//     // console.log(originalFunction)
//     return function(name) {
//         console.time('function time')
//         console.log(`\nExecuting function...`)
//         const result = originalFunction(name)  //actually start function here
//         console.timeEnd('Function timer end')
//         return result
//     }
// }

// const higherOrderFunction = loggingTimingDecorator(printGreeting)
// higherOrderFunction('Decorated')

// function slow(x) {
//   let random = 0;
//   let goal = Math.floor(Math.random() * x * 1e9);
//   console.log(`slow(${x}): randomly generated goal for ${x * 1e9} is ${goal}`);
//   //loop to simulate long calculation
//   for (let i = 0; i < goal; i++) {
//     random++;
//   }
//   return random;
// }

// function bigCalculation(x) {
//     let random = 0;
//     let goal = Math.floor(Math.random() * x * 1e9);
//     console.log(`slow(${x}): randomly generated goal for ${x * 1e9} is ${goal}`);
//     //loop to simulate long calculation
//     for (let i = 0; i < goal; i++) {
//       random++;
//     }
//     return random;
//   }

// // slow(100000)

// function cachingDecorator(originalFunction) {
//   const cache = new Map();
//   return function (x) {
//     if (cache.has(x)) {
//       console.log("returned cached value for" + x);
//       return cache.get(x);
//     }
//     //else
//     let result = originalFunction(x);
//     cache.set(x); //store in cache
//     return result;
//   };
// }

// const fast = cachingDecorator(slow)

// const bigCalculationWithCache = cachingDecorator(bigCalculation)

// fast(8)
// fast(8)
// fast(8)

// bigCalculationWithCache(100)

// bigCalculationWithCache(100)

// const user = {
//     name: 'John',
//     sayHi() {
//         console.log (`Hi, ${this.name}`)
//     }
// }

// // user.sayHi()

// // /setTimeout(function to execute, milliseconds)
// // setTimeout(function() {user.sayHi(); }, 1000)
// //////////////////////////////////////////////////////////////////////slide 30 BTW
// // solution 1
// // setTimeout(() => {user.sayHi()}, 300)

// // solution 2
// const boundSayHi = user.sayHi.bind(user)  ///older and harder to read than the arrow function above
// setTimeout(boundSayHi, 1000)

///get/set properties slide 33

// const jackData = {
//     firstName: 'Jack',
//     lastName: 'Black'

// }

// const jackAccessor = {
//     get firstName() {
//         return this._firstName || 'Jack'
//     },
//     get lastName(){
//         return this._lastName || "Black"
//     },

//     set firstName(newFirstName) {
//         this._firstNAme = newFirstName
//     },
//     set lastName(newLastName) {
//         this._lastName = newLastName
//     }
// }

// console.log(jackData.lastName)

///slide 36

// const jackBlack = {
//   firstName: "Jack",
//   lastName: "Black",
//   dateOfBirth: new Date("1969-08-28"),
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   get age() {
//     const today = new Date();
//     return today.getFullYear() - this.dateOfBirth.getFullYear();
//   },

// };

// // console.log(jackBlack.firstName);

// for (let prop in jackBlack){
//   console.log(`${prop} is ${jackBlack[prop]}`)
// }

/////constructor function slide 38
// function Actor(name, birthday){
//     this.name = name;
//     this.birthday = birthday;
//     Object.defineProperty(this, 'age', {
//         get () {
//             const today = new Date()
//             return today.getFullYear() - this.birthday.getFullYear()
//         }
//     })
// }

// const sean = new Actor('Sean Connery', new Date('1930-08-25'))

// console.log(sean.age)

// for (let prop in sean) {
//     console.log(`${prop} is ${sean[prop]}`)
// }

// slide 39
// class ActorClass {
//     moviesCount = 0
//     constructor(name, birthday){
//         this.name = name;
//         this.birthday = birthday;
//     }
//     get age() {
//             const today = new Date()
//             return today.getFullYear() - this.birthday.getFullYear()
//         }
//         set numMovies(number) {
//             if (number > 0 && number < 100) {
//                 this.moviesCount = number
//             } else {
//                 throw new Error('Number of movies cannot be zero or greater than 100')
//             }
//         }
//         get numMovies() {
//             return this.moviesCount
//         }
//     }

//     const sean = new ActorClass('Sean Connery', new Date('1930=08-25'))

//     sean.moviesCount = 94

//     // console.log(sean.age)
//     console.log(`${sean.name} is ${sean.age} and has been in at least ${sean.moviesCount} movies!!`)

//     for (let prop in sean) {
//         console.log(` ${prop} is ${sean[prop]}`)
//     }

// let animal = {
//   eats: true,
//   sleeps: true,
//   legs: 4,
//   mammal: true,
// };
// let rabbit1 = { jumps: true };

// Object.setPrototypeOf(rabbit1, animal);

// let rabbit2 = Object.create(animal, {
//   jumps: {
//     value: true,
//     enumerable: true,
//   },
// });

// console.log(rabbit1.legs, rabbit2.legs);

// for (let prop in rabbit1) {
//   console.log(`${prop} is ${rabbit1[prop]}`);
// }

// slide 47 creating classes

// class MyClass {
//   prop = value;
//   constructor(name, birthday) {
//     this.name = name;
//     this.birthday = birthday;
//   }
//   sayHi() {
//     console.log(`Hi, ${this.name}`)
//   }
//   get age() {
//     const today = new Date();
//     return today.getFullYear() - this.birthday.getFullYear();
//   }
//   set numMovies(number) {
//     if (number > 0 && number < 100) {
//       this.moviesCount = number;
//     } else {
//       throw new Error("Number of movies cannot be zero or greater than 100");
//     }
//   }
//   get numMovies() {
//     return this.moviesCount;
//   }
// }


///slide 48 example///
// class Rabbit extends Animal {
//     hide () {
//         // console.log(`${this.name} hides!`)
//     }
// }


// slide 50 EX: type through it


let animal = {
  eats: true,
  sleeps: true,
  legs: 4,
  mammal: true,
}
let rabbit1 = { jumps: true };

Object.setPrototypeOf(rabbit1, animal);

// for (let prop in rabbit1) {
//   console.log(`${prop} is ${rabbit1[prop]}`)
//   //try this block of code
 try { 
    //trying to make it brake so it moves on to catch
    setTimeout( () => noSuchVariable, 1000); //undefined
    //if the try cannot be exectued then execute catch block (intended usage)
  } catch (err) {
    // console.log(`${err} - There is no first name!`)
  }
