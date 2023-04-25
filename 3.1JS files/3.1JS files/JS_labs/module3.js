// // "" + 1 + 0                               //1: 1       "" defines line to be a string
// // "" - 1 + 0                               //2: -1
// // true + false                             //3: 1
// !true                                       //4: false
// 6/"3"                                        //5: 2
// "2"*3                                       //6: 23
// 4+5+"px"                                    //7: 6
// "$" + 4 + 5                                 //8: $45
// "4" - 2                                     //9: 2
// "4px" - 2                                   //10: NaN     number and letters same string cause it to fail
// " -9 " + 5                                  //11: -9 5
// " -9 " - 5                                  //12: 14
// null + 1                                    //13: 1
// undefined + 1                               //14: NaN
// undefined == null                           //15: True
// undefined === null                          //16: False
// " \t \n" - 2                                //17: -2

// console.log(" \t \n" - 2)

/* 6.
    const westley = {
    name: "Westley",
    numFingers: 5,
    age: 100,
    };
    const rugen = {
    name: "Count Rugen",
    numFingers: 6,
    age: 20,
    };
    const inigo = {
    firstName: "Inigo",
    name: "cornholio",
    age: 45, 
    greeting(person) {
        let greeting = `Hello ${person.name}, my name is ${this.firstName}. `;
        console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase(person) {
        if (person.name === "Westly") {
        return "You killed my father, Prepare to DIE!!";
        } else {
        return "HELLO WORLd";
        }
    },
    };



inigo.greeting(inigo);
*/
/*
// 7.
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
    console.log("First param:", param, "Second_param:", second_param);
    this.fouls = param + this.fouls;
    return this;
  },
  fullTime() {
    console.log("Fulltime score is " + this.score, "\n" + "fouls" + this.fouls);
    return this;
  },
};
//modify each of the above object methods to enable function chaining as below
basketballGame.basket(0).freeThrow().increaseFouls().halfTime();
*/ /// end of question 7

/* 8.
///older style that we've been practicing with
// function printProperties(param) {
//     // function code
// }
const dog = {
    name: 'Doggo',
    color: 'Brown',
    favorite_toy: 'Hot dog' //this is a key
}
//another part of problem 8 was to add another property section
const cat = {
    name: 'Meows',
    color: 'brown',
    favorite_food: 'All OF IT'
}

const printProperties = (param) => {
    for(let key in param) {
        //key = name
        console.log(key, ":", param[key])
    }
}

printProperties(cat)
// const sydney = {
//     name: 'Sydney',
//     population: 5_121_000,
//     state: 'NSW',
//     founded
// }

*/

/* Exercise 9.
let teamSports = ['Hockey', 'Crickety', 'Volleyball' ]
let moreSports = teamSports

let dog1 = 'Bingo'
let dog2 = dog1
dog2 = 'Doggo'

let cat1 = {
    name: "snowball",
    breed: 'Siberian'
}
let cat2 = cat1

cat2.name = "barf"


moreSports.push('Tennis')

console.log(cat1)
End of Exercise 9 */

/* Exercise 10.

// function Person(name, age) {      //original problem syntax
//   this.name = name;
//   this.age = age;
//   this.human = true;
// }

//constructor function syntax
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
  }
  canDance() {
    if (this.age < 30) {
      return true;
    } else {
      return false;
    }
  };
}

let Brandon = new Person("Brandon", 45);

let Bill = new Person("Bill", 25);

const printProperties = (param) => {
  for (let key in param) {
    //key = name
    console.log(key, ":", param[key]);
  }
};

printProperties(Brandon);

console.log(Brandon.canDance())
*/