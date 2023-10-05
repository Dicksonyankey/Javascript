console.log("-----Working with Primitives & Reference DataTypes-------");

// For Function Calls with Primitive Data Types, the Value Is Passed
function example(x) {
	console.log(x);
	x = 5;
	console.log(x);
}
let y = 4711;
console.log(y);
example(y);
console.log(y);

// For Function Calls with Reference Types, the Pointer Is Passed
function example1(x) {
	console.log(x.value);
	x.value = 5;
	console.log(x.value);
}
let y1 = {
	value: 4711,
};
console.log(y1.value);
example1(y1);
console.log(y1.value);

// ===================================
// Determining the Type of a Variable
// ===================================

// Application of the typeof Operator for Different Values
console.log(typeof true); // boolean
console.log(typeof false); // boolean
console.log(typeof 4711); // number
console.log(typeof 22.22); // number
console.log(typeof "John Doe"); // string
console.log(typeof function () {}); // function
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof Symbol("B")); // symbol

// Application of the instanceof Operator for Different Values
const john = {
	firstName: "John",
	lastName: "Doe",
};

const numbers = [2, 3, 4, 5, 6, 7, 8, 9];
function add(x, y) {
	return x + y;
}

console.log(john instanceof Object);
console.log(john instanceof Array);
console.log(numbers instanceof Object); // true
console.log(numbers instanceof Array);
console.log(add instanceof Function);
console.log(add instanceof Object);

// For Values of Primitive Data Types, the instanceof Operator Always Returns false
console.log(true instanceof Object);
console.log(4711 instanceof Object);
console.log("John Doe" instanceof Object);

// Using the Array.isArray() Method for Different Values
console.log(Array.isArray(john)); // false
console.log(Array.isArray(numbers)); // true

// ==========================================
// Creating Objects Using Literal Notation
// =========================================

const item = {
	name: "JavaScript: The Comprehensive Guide",
	price: 59.95,
	author: "Philip Ackermann",
	isbn: "978-1-4932-2286-5",
	printDescription: function () {
		console.log(`${this.author}: ${this.name}`);
	},
};

console.log(item.name);
console.log(item.price);
console.log(item.author);
console.log(item.isbn);
item.printDescription();

// ==========================================
// Creating Objects via Object.entries()
// =========================================

const array = [
	["name", "JavaScript: The Comprehensive Guide"],
	["price", 59.95],
	["author", "Philip Ackermann"],
	["isbn", "978-1-4932-2286-5"],
	[
		"printDescription",
		function () {
			console.log(`${this.author}: ${this.name}`);
		},
	],
];

const itemInformation = Object.fromEntries(array);
console.log(itemInformation);
console.log(itemInformation.name); 
console.log(itemInformation.price); 
console.log(itemInformation.author); 
console.log(itemInformation.isbn);
itemInformation.printDescription()

// ===========================================
// Creating Objects via Constructor Functions
// ===========================================

function Item(name, price, author, isbn) {
	this.name = name;
	this.price = price;
	this.author = author;
	this.isbn = isbn;
	this.printDescription = function () {
		console.log(`${this.author}: ${this.name}`);
	};
}

const item1 = new Item(
	"JavaScript: The Comprehensive Guide",
	59.95,
	"Philip Ackermann",
	"978-1-4932-2286-5"
);

const item2 = new Item(
	"Node.js: The Comprehensive Guide",
	49.94,
	"Sebastian Springer",
	"978-1-4932-2292-6"
);

