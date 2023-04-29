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
const getGreeting2 = function(name) {         // Expression syntax    
    return "Hello " + name + "!";
}
const getGreeting3 = (name) => {                // Arrow syntax
    return "Hello " + name + "!";
}

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
  firstName: "Inigo",
  lastName: "Montoya", //Added lastName property here to define it for use (step a)
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `; //Added lastName here to include in response (step a)
    console.log(greeting + this.getCatchPhrase(person));
  },
  getCatchPhrase(person) {
    if (person.numFingers === 6) {
      return "You killed my father, Prepare to Die!!";
    } else {
        return this.getCatchPhrase
    }
  },
};

// inigo.greeting(westley);
// inigo.greeting(rugen);

inigo.greeting(westley)