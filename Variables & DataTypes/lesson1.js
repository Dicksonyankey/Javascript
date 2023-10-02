// Variables, Numbers,Strings  and Data Types in javascript 
// "use strict";
// var firstName;
// var lastName;

// let firstName;
// let lastName;

let firstName = "John", lastName = "Doe";

// An Example
console.log(firstName)
console.log(lastName)

// Another Example
let x = 4520;
x = 100;
console.log(x);

// Another Example
const number = 4203;
console.log(number);

// Example that can cause a TypeError: console.log is not a function : global standard variables.
// const console = "Hello world"
// console.log(number)

// Some Allowed Characters for a Valid variable name 
// const 2ndName = "James"; // This name is not allowed
// const first%name = "james" // This name is not allowed
// const first-name = "James" // This name is not allowed
// const firstName = "James"  // This name is valid name
// const _firstNmae = "John"  // This name is valid name
// const $firstName = "Python"   // This name is valid name


// Case Sensitivity
const name = 'John'; // This is a different variable ...
const Name = 'James'; // ... from this variable ...
const nAme = 'Peter'; // ... and this variable.


// CamelCase Spelling
// for example, is the lowerCamelCase notation, where the variable name starts with a lowercase letter and then, if the name is composed of several words, each of the other words starts with an uppercase letter. 
const defaultValue  = 2345;
const isAdmin = true;
const userIsNotLoggedIn = true;


// Meaningful Names
// not very meaningful variable names
const fn = 'John';
const ln = 'Doe';
// meaningful variable names
// const firstName = 'John';
// const lastName = 'Doe';


// ========================= Using the Different Data Types =================================
// JavaScript distinguishes among six different data types: on the one hand, there are the three primitive data types for representing numbers, strings, and Boolean values; on the other hand, there are the special data types null and undefined (also forms of primitive data types), plus the Object type, which serves as the basis for creating your own (complex) objects 

// 1. Numbers 

const number1 = 5; // Definition of an Integer
const number2 = 0.5; // Definition of an Decimal
const number3 = -22; // Definition of an Negative Integer
const number4 = -0.9; // Definition of an Negative Decimal 
const number5 = 12_300; // separator for decimal representation
const number6 = 1_000_000; // separator for decimal representation


// The Value Range of Numbers
console.log(Number.MIN_VALUE);          // Output: 5e-324
console.log(Number.MAX_VALUE);          // Output: 1.7976931348623157e+308
console.log(Number.NEGATIVE_INFINITY);  // Output: -Infinity
console.log(Number.POSITIVE_INFINITY);  // Output: Infinity


// ================================= STRINGS ===============================================
// A string is a sequencemof characters 
const first_Name = 'John'; // single quotes
const last_Name = "Doe"; // double quotes
const age = "22"; // not a number, but a string
// Syntax Error: Mixed Form const street = 'Sample Street"


// Escaping of Characters within Strings
// You can achieve this via the backslash character (\).
const message1 = 'Your name is "John Doe"';
const message2 = "Your name is 'John Doe'";
const message3 = 'Your name is \'John Doe\'';
const message4 = "Your name is \"John Doe\""; 
console.log(message1); // Output: Your name is "John Doe" 
console.log(message2); // Output: Your name is 'John Doe' 
console.log(message3); // Output: Your name is 'John Doe' 
console.log(message4); // Output: Your name is "John Doe"


// 1. The control characters (\n)
const message5 = 'Hello\nMr. \nCassay'
console.log(message5)


const message6 = "Hello\\\nMr. \nCassay"; // This well escape the backslash
console.log(message6);

// ============================ Using Template Strings ==================================== 

// Assembling a String
const fname = 'John Doe';
const fage = 44;
const message7 = "My name is " + fname + ", I am " + fage + " years old.";
console.log(message7); // "My name is John Doe, I am 44 years old."


// Definition of a Template String

const message = `Hello world.`; 
console.log(message); // Hello world


const lname = 'John Doe';
const lage = 44;
const message8 = `My name is ${lname}, I am ${lage} years old.`; 
console.log(message8); // My name is John Doe, I am 44 years old.


// Evaluating Expressions within Strings

const Fname = "John Doe";
const Fage = 44;
function getName() {
	return Fname;
}
const message9 = `My name is ${getName()}, I am twice the age of ↩ ${Fage / 2}.`;
console.log(message9);


// Multiline String with Template Strings

const message10 = `Dear Mr. Felix Effah,
we are happy to return the requested documents to you for review.
Yours sincerely,
Mrs. Smith,
Sample Company`;
console.log(message10);


// ============================== Boolean Values =======================================

// Definition of Boolean Variables
const isLoggedIn = true;
const isAdmin1 = false;

console.log(isLoggedIn)
console.log(isAdmin1)



// ========================================= Arrays =====================================

// In Some Cases, the Primitive Data Types Alone Will Not Work

const shoppingCartItem1 = "Record player"; // first item
const shoppingCartItem2 = "Loudspeaker"; // second item
const shoppingCartItem3 = "Preamplifier"; // third item
const shoppingCartItem4 = "Loudspeaker cables"; // fourth item

// Creating an Array via Literal Notation

const shoppingCart = [
	"Record player",
	"Loudspeaker",
	"Preamplifier",
	"Loudspeaker cables",
];

// Example of the 
const highscores = [74334, 24344, 54533, 32553, 67556];

// Example of the definition of an Array with different forms of Value
const values = ["John Doe", 22, true];

// Access to the Elements of an Array

const item1 = shoppingCart[0];  // first entry
const item2 = shoppingCart[1];  // second entry
const item3 = shoppingCart[2];  // third entry
const item4 = shoppingCart[3];  // fourth entry
console.log(item1); // 'Record player'
console.log(item2); // 'Loudspeaker'
console.log(item3); // 'Preamplifier'
console.log(item4); // 'Loudspeaker cables'



// Multidimensional Arrays

const shoppingCart1 = [
    [
        'Record player',
        200,
        1
    ],
    [
        'Loudspeaker',
        400,
        2
    ],
    [
        'Preamplifier',
        80,
        1
    ],
    [
        'Loudspeaker cables',
        20,
        2
    ]
];

// Access to the Values in a Multidimensional Array

console.log(shoppingCart1[0][0]);  // Output: Record player
console.log(shoppingCart1[0][1]);  // Output: 200
console.log(shoppingCart1[0][2]);  // Output: 1
console.log(shoppingCart1[1][0]);  // Output: Loudspeaker
console.log(shoppingCart1[1][1]);  // Output: 400
console.log(shoppingCart1[1][2]);  // Output: 2
console.log(shoppingCart1[2][0]);  // Output: Preamplifier
console.log(shoppingCart1[2][1]);  // Output: 80
console.log(shoppingCart1[2][2]);  // Output: 1
console.log(shoppingCart1[3][0]);  // Output: Loudspeaker cables
console.log(shoppingCart1[3][1]);  // Output: 20
console.log(shoppingCart1[3][2]);  // Output: 2


// ==================================== Objects ==========================================

// The easiest way to create objects in JavaScript is to use object literal notation. You simply define the object using braces and list the object properties and object methods within these braces, separated by commas.

// Creating an Object Using Object Literal Notation
const item = {
	name: "Toxicological Assessment of E-cigarette flavor on human",
	price: 55.95,
	author: "Felix Effah",
	isbn: "978-1-4932-2286-5",
	printDescription: function () {
		console.log(`${this.author}: ${this.name}`);
	},
};

console.log(item.name)
console.log(item.author)
console.log(item.printDescription())



// =============================== Special Data Types ===================================

// 1. Underfined 

let code_name;
console.log(code_name); // Output: undefined
code_name = "John Doe";
console.log(code_name); // Output: John Doe


// 2. null 

const dog = {
  name: 'Bello'
}
const person = {
  firstName: 'John',
  lastName: 'Doe',
  pet: dog
}
console.log(person.pet); // Output: Object {name: "Bello"} 
person.pet= null;
console.log(person.pet); // Output: null

// ======================================== undefined versus null =========================================
// The undefined value is not meant to be manually assigned to a variable, but the null value is. The undefined value indicates that a variable has not yet been initialized; the null value represents an empty object pointer.

