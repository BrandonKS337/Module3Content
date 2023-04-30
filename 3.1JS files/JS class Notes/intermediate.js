/*const user = {
    name: 'John',
    toString() {
        return this.name;
    }
}

const thisString = 4

thisString.toString

const newVariable = thisString.toString()

console.log(typeof newVariable)*/

/*
const apple = {
    price: 100,
    valueOf() {                          //Method name
        return this.price;
    }
}

console.log( apple );
*/

//Primitive-like object
/*const user = {
    name: 'John',
    money: 1000,
    [Symbol.toPrimitive](hint) {
        return hint === 'string' ? `{name: '${this.name}'}` : this.money;
    }
};

console.log( user ); 
console.log( +user )
console.log( user + 500);*/

//Numbers
/*
// const billion= 1000000000
// const billion= 1_000_000_000
// const billion= 1e9

const microSeconds = 1e-6

console.log(microSeconds)*/

/*
// hexadecimal Numbers

// alert (0xff)
// alert(0xFF)

// console.log(0xFF)*/

/*
// Binary#s
const a = 0b11111111;  //binary form of 255
const b = 0o377;  //octal form of 255

console.log(b)*/

/*
// Base conversion
const base = 16
// const base = 2
// const base = 36

// 123456..toString(36)
console.log(123456.toString(36))*/

// Imprecise calculations
// console.log(1e500);

// console.log(0.1 +0.2);

// const base = 16

// console.log(isNaN("4px"));

// console.log(9999999999999999)

// console.log(parseFloat("100px"))

// console.log(parseInt("111",2))

///array practice

// const ourArray = [2,3,4,5]

// console.log('step 1', ourArray)

// ourArray.push(1)

// console.log('step 2', ourArray)

// ourArray.shift()

// console.log('step 3', ourArray)

//array stack data structure          push/pop  == end of the array
/*
const ourStack = [1,2,3,4,5]

console.log('step 1', ourStack)

ourStack.push(6)

console.log('step 2', ourStack)

ourStack.pop()

console.log('step 3', ourStack)

ourStack.pop()

console.log('step 2', ourStack)*/

// const users = [
//     {id: 1, name: 'John', age:55},
//     {id: 2, name: "Bill", age: 2},
//     {id: 3, name: "Mary", age: 19}
// ]

// const result = users.filter(item => item.age <= 3)    ///////////find method //////////
//  const result = users.map(item => item.name)                           //////map method////////

// const arr = ['John', "Smith"]

// const [firstName, lastName] = arr
// console.log(firstName,lastName)

// function reversTring(str) {
// let splitString = str.split("")
//consol.log(splitString)

// let reverseArray = splitString.reverse()
// console.log(reverseArray)

// let joinArray = reverseArray.join("")
// console.log(joinArray)
// return str.split("").revers().joinArray
// }

//console.log(reversString("banana"))

// const testMap = new Map()

// const testObj = {
//     first_name: "Bob",
//     last_name: "Dilln",
//     age: 5
// }

// testMap.set('1', 'str1')
// testMap.set(1, 'num1')

// console.log(testMap.keys())

// const entries = Object.fromEntries(testMap.entries())

// console.log(entries)

// const testArray = ["Julius", "Ceasar", "Consul", "of the roman Republic", "Test Title", "something"];

// const [firstName, lastName, title1, title2, title3, title4 = "Nothing"] = testArray

// console.log(title)

// let first = 'Jane',
// second ="Pete";

// [first, second] = [second, first];

// console.log(title4)
// const testObj = {
//     title: "Menu",
//     height: 200,
//     width: 100,
//     something: {
//         first_name: 'John',
//         last_name: "Doe"
//     },
//     items: ["Cake", "Donut"],
//     movies: ["Terminator"]
// }
// function showMenu(props){
//     const {title, ...rest} = props

// console.log(rest.height)
// console.log(rest)
// console.log(rest.movies)
// function button(rest){
// console.log(rest.movies)
// }

// button(rest)
// }
// showMenu(testObj)

// const {
//     size: {width, height},
//     items: [firstItem, secondItem]
// } = testObj;

// console.log(testObj)

// const {width: new_width, heigh: h} = testObj

// console.log(new_width)

// App(testObj)

// const test = 24*3600*1000

// const now = new Date()

// const parse = Date.parse(now)

// console.log(parse)

// const now = new Date('August19, 1975 23:15:30')

// now.setFullYear(1969)

// const year = now.getFullYear()
// const month = now.getMonth ()
// const day = now.getDay ()

// console.log(year, month, day)

///Json slide 72

// console.log(title4);
// const testObj = {
//     test: undefined,
//   title: "Menu",
//   height: 200,
//   width: 100,
//   something: {
//     first_name: "John",
//     last_name: "Doe",
//   },
//   items: ["Cake", "Donut"],
//   movies: ["Terminator"],
//   ourFunction(){
//     console.log('Hello')
//   }
// };

// const stringy = JSON.stringify(testObj);

// const parse = JSON.parse(stringy)

// console.log(parse);

/////////////////////////// w3schools.com array sort example: sort cars ==>>translated to JS
// const cars = [
//     {type: "volvo", year: 2016},
//     {type: "Saab", year: 2001},
//     {type: "BMW", year: 2010}
// ];

// cars.sort(function(a,b){
//     return a.year - b.year});

// displayCars();

// function displayCars() {
//     cars[0].type + "" + cars[0].year + "<br>" +
//     cars[1].type + "" + cars[1].year + "<br>" +
//     cars[2].type + "" + cars[2].year;
// }

// console.log(cars)

////////////////////////////end example

// const numbers = [45, 4, 9, 16, 25];
// let txt = "";
// numbers.forEach(myFunction);

// function myFunction(value, index, array) {
//   txt += value + "<br>";
// }

// console.log(txt)
//Array map ex:
// const numbers1 = [45, 4, 9, 16, 25];
// const numbers2 = numbers1.map(myFunction);

// function myFunction(value) {
//   return value * 2;
// }

// console.log(numbers2)

//JS array flatMap()

// const myArr = [1, 2, 3, 4, 5, 6];
// const newArr = myArr.flatMap((x) => x * 2);

// console.log(newArr)

//Array Filter
// const numbers3 = [45, 4, 9, 16, 25];
// const over18 = numbers3.filter(myFunction);
// const under18 = numbers3.filter(myFunction2);

///////////////////ASK ABOUT HOW TO IF ELSE this EXample from w3schools
// function myFunction(value, index, array) {
//   let value =
//     if value { x > 18},
//   else {
//     return value > 18
//   }
// function myFunction2(value) {
//     return value < 18
// }
// console.log(under18)

/////////////////////// EX: reduce()
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}
console.log(sum);

//////////////////////////// Array sorting and inserting //////////////////////////
// Stephen's answer for problem 3 intermediate

const animals = ["Tiger", "Giraffe",];     //original syntax

animals.push("Rabbit", "Cat");             // adds to at end
animals.unshift("Donkey", "Monkey");        //adds to at start

const animalsSorted = animals.sort()        //sorts and returns as new object

function replaceMiddleAnimal(newAnimals) {  //replaces "middle" item
    let index = animalsSorted.length /2
    animalsSorted[index] = newAnimals
}

console.log(replaceMiddleAnimal('bear'))      //console.log to insert new item value