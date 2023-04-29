// 1. What are the results of these xpressions? (answer first, then use console.log() to check)

// "" + 1 + 0               // 10
// // console.log("" + 1 + 0)
// "" - 1 + 0              // -1
// // console.log("" - 1 + 0)
// true + false
// // console.log(true + false)        // 1 true = 1, false = 0 in binary so 1+0 = 1
// !true
// // console.log(!true)                  //false .... ! =not; therefore: !true = not true aka false
// 6 / "3"
// // console.log(6 / "3")                // 2.....the division sign here converts 3 from a string to a #
// "2" * "3"
// // console.log("2" * "3")               // 6 ....same thing as line 10. multiplier symbol takes both strings and converts them to numbers
// 4 + 5 + "px"
// // console.log(4 + 5 + "px")               // 9px ....this one starts as numbers but will add in px due to px not being # or will come back bad
// "$" + 4 + 5
// // console.log("$" + 4 + 5)                    // $45 ....starts as a string object so will concatenate the three elements inside the object
// "4" - 2
// // console.log("4" - 2)                     // 2 ... starts as string but will remove 2 from value 4 because why not
// "4px" - 2
// // console.log("4px" - 2)                        //NaN (Not a Number) ... because it is trying to take "2" from 4px but due to numbers and letters it cannot causing an error in the math.
// "-9" + 5
// // console.log(" -9 " + 5)                            // -9 5 .......because string object concatenating to elements -9 and +5
// " -9 " - 5
// // console.log(" -9 " - 5)                             // -14 ......because - symbol turns this into number object
// null + 1
// // console.log(null + 1)                            //1..... null = 0 therefore 0+1 = 1
// undefined + 1
// // console.log(undefined + 1)                          // NaN .... possibly because of undefined being combined with a value? basically an undefined object being concatenated with a number object making the whole object a number object.
// undefined == null
// // console.log(undefined == null)                   // true ........because loosely they are both same object type
// undefined === null
// // console.log(undefined === null)                 // false .........do not represent the EXACT same thing so will return false
// " \t \n" - 2
// // console.log(" \t \n" - 2)                       // -2 .......... \t = tab \n = new line;    HOWEVER in this case both of those are inside parenthesis while (- 2) is outside of that meaning that the tab and new line do not apply and -2 is final variable with an actual value

//////////////////// Problem 2 ///////////////////////
// 2. Which of the bleow are not giving the right answer? Why are they not correct? How can we fix them?
// answer: switch the "string" objects that are #'s 3 4 & 30 to number objects by deleting the parenthesis in the first three parts

// let three = 3    // removed the parenthesis from these 3 to make operation statements below function properly
// let four = 4
// let thirty = 30

// what is the value of the following expressions?
// let addition = three + four                   /// incorrect answer when console logged.. shows "34"
// let multiplication = three * four               //12
// let division = three / four                     //0.75
// let subtraction = three - four                  // -1

// let lessThan1 = three < four                    //True
// let lessThan2 = thirty < four                    // incorrect answer when console logged.. showing as true

// console.log(lessThan2)

//////////////////// Problem 3 ///////////////////////
// 3. Which of the following console.log messages will print? Why?
// if (0)
// console.log('#1 zero is true')      // will NOT because 0 is the same thing as false
// if ("0")
// console.log('#2 zero is true')         // WILL print because "0" is a string and has a defined value of 0 so boom will print true ( have to mute the first if statement above or wont work lol...idiot)
// if (null)
// console.log('null is true')             // Will not print. null means no value so therefore is not a truth in this case I guess
// if (-1)
// console.log('negative is true')           // This WILL print because even negative values are still a value
// if (1)
// console.log('positive is true')             // WILL most DEFINETLY(spellcheck me) come back true. 1 = true in boolean talk

//////////////////// Problem 4 ///////////////////////
// 4. Rewrite this if using the ternary/condition operator '?'. Test it with different values for a and b. What does the '+=' do?

let a = 1;
let b = 1;
let addition = `${a} + ${b} is `; // condition operator = (condition) ? x:y      ex:  (z < 18) ? x:y
// https://www.w3schools.com/jsref/jsref_operators.asp
// if (a + b < 10) {
//     result += 'less than 10';
// } else {
//     result += 'greater than 10';
// }
//rewriting as conditional operator
let conditionOperator = a + b < 10 ? "less than 10" : "greater than 10";

let resultP4 = addition + conditionOperator;

// console.log(resultP4)

//////////////////// Problem 5 ///////////////////////
// 5. Rewrite the following function using:
// a) function expression syntax
// b) arrow function syntax
// test each version to make sure they work the same

function getGreeting(name) {
  return "Hello " + name + "!";
}
const getGreeting2 = function (name) {
  // Expression syntax
  return "Hello " + name + "!";
};
const getGreeting3 = (name) => {
  // Arrow syntax
  return "Hello " + name + "!";
};

// console.log(getGreeting1('bob'))               //change which function you're calling and it will run function in different syntax

//////////////////// Problem 6 ///////////////////////
// 6. Several requirements:
// a) Complete the inigo object by adding a lastName property and including it in the greeting.
// b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead prints his famous catch phrase to console.
// HINT: https://www.imdb.com/title/tt0093779/characters/nm0001597
// c) Update getCatchPhrase to use arrow function syntax and a conditional operator.

const westley = {
  name: "Westley",
  numFingers: 5,
};
const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};

const inigo = {
  //// this is an object so it requires key value pairs aka (property: value)
  firstName: "Inigo",
  lastName: "Montoya", //Added lastName property here to define it for use (step a)
  //   getCatchPhrase: () => {//insert if else here},     //this is arrow function inserted inside an OBJECT syntax
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `; //Added lastName here to include in response (step a)
    console.log(greeting + this.getCatchPhrase(person));
  },
  getCatchPhrase(person) {
    //regular syntax
    if (person.numFingers === 6) {
      return "You killed my father, Prepare to DIE!!";
    } else {
      return `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
    }
  },
  getCatchPhrase: (person) => {
    //arrow function syntax
    if (person.numFingers === 6) {
      return "You killed my father, Prepare to DIE!!";
    } else {
      return `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
    }
  },
};

// inigo.greeting(westley);
// inigo.greeting(rugen);

//////////////////// Problem 7 ///////////////////////  - Go back and find video going through this
// 7. The following object represents a basketball game and keeps track of the score as the game progresses.
// a) Modify each of the methods so that they can be 'chained' together
// and the last line of the example code works.
// b) add a new method to print the full time final score
// c) Add a new object property to keep track of the number of fouls and a method to increment
// it, similar but separate to the score. Include the foul count in the 1/2 time and full
// time console messages
// d) Test your object by chaining all the method calls together in different combinations

const basketballGame = {
  score: 0,
  fouls: 0, //added per requirements

  freeThrow() {
    this.score++;
    return this; // added to create an output on terminal
  },
  basket() {
    this.score += 2;
    return this; // added to create an output on terminal
  },
  threePointer() {
    this.score += 3;
    return this; // added to create an output on terminal
  },
  penalty() {
    this.score -= 2;
    return this; // added to create an output on terminal
  },
  halfTime() {
    console.log("Halftime score is " + this.score);
    return this; // added to create an output on terminal
  },
  increaseFouls(param = 0, second_param = 0) {
    console.log("First 1/2:", param, "Second 1/2:", second_param);
    this.fouls = param + this.fouls;
    return this;
  },
  fullTime() {
    console.log("Fulltime score is " + this.score, "\n" + "fouls" + this.fouls);
    return this;
  },
};
//modify each of the above object methods to enable function chaining as below
// basketballGame.basket(2).freeThrow(1).increaseFouls(5).halfTime();

//////////////////// Problem 8 ///////////////////////
// 8. The object below represents a single city
// a) Write a function that takes an object as an argument and uses a for...in loop to 
// access and print to the console each of those object properties and their Values. 
// Test it using the sydney object below.
// b) Create a new object for a different city with different properties and call your function
// again with the new object.

const sydney = {
    Name: 'Sydney',
    Population: 5_121_000,
    State: 'NSW',
    Founded: '26 January 1788',
    TimeZone: 'Australia/Sydney'
};
const lafayette = {
    Name: 'Lafayette',
    Population: 4_624_000,
    State: 'Louisiana',
    Founded: '30 April, 1812',
    TimeZone: 'Central Daylight Time',
    Best_Food_Chain: "Raising Canes"
}
const printProps = (paramater) => {
    for(let key in paramater) {
        console.log(key, ':', paramater[key])
    }
    
}
// console.log(printProps(sydney))    /// this will return an undefined because I do not have a return set up inside the function itself.
// printProps(sydney)
// printProps(lafayette)

//////////////////// Problem 9 ///////////////////////
// 9. Use the following variables to understand how JavaScript stores objects by reference.
// a) Create a new moreSports variable equal to teamSports and add some new sport
// values to it (using push and unshift)
// b) Create a new dog2 variable equal to dog1 and give it a new value
// c) Create a new cat2 variable equal to cat1 and change its name property
// d) Print the original teamSports, dog1 and cat1 variables to the console. Have they
// changed? Why?
// e) Change the way the moreSports and cat2 variables are created to ensure the
// originals remain independent

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let moreSports = [...teamSports]    //Deep clone syntax for arrays is newVar=[arr]
let dog1 = 'Bingo';
let newDoggo = dog1  //newDoggo = dog2 just changing it for person flavor
let cat1 = {name: 'Fluffy', breed: 'Siberian'}
let newGatto = {...cat1}  //Deep clone syntax variable = {...newProperty}

// pushing / unshifting variables
moreSports.push('baseball')
moreSports.unshift('soccer')

// changing pet names from inherited property names of 'bingo' and 'fluffy
newDoggo = 'barf'
newGatto.name = 'not fluffy'     // changes inherited name while keeping other key values same
// console.log(newGatto)


// printProps(teamSports) // step d says print so using an existing function to "print" just in case
// printProps(dog1)
// printProps(cat1)

console.log(teamSports, dog1, cat1)  // How I think they meant to do this step d request
// d) answer: no, comes back with new variable because I set = to instead of cloning them
// e) reroute initial variables for the moreSports and newGatto to deep clone vs pull array 








