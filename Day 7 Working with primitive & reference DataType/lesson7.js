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
itemInformation.printDescription();

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

console.log(item2);

// ===========================================
// Creating Objects Using Classes
// ===========================================

class ItemClass {
	constructor(name, price, author, isbn) {
		this.name = name;
		this.price = price;
		this.author = author;
		this.isbn = isbn;
	}
	printDescription() {
		console.log(`${this.author}: ${this.name}`);
	}
}

const item4 = new ItemClass(
	"JavaScript: The Comprehensive Guide",
	59.95,
	"Philip Ackermann",
	"978-1-4932-2286-5"
);
console.log(item4.name);
console.log(item4.price);
console.log(item4.author); // "Philip Ackermann"
console.log(item4.isbn); // "978-1-4932-2286-5"
item.printDescription(); // "Philip Ackermann:

const item3 = new ItemClass(
	"Node.js: The Comprehensive Guide",
	49.94,
	"Sebastian Springer",
	"978-1-4932-2292-6"
);
console.log(item3.name);
console.log(item3.price);
console.log(item3.author); // "Sebastian Springer"
console.log(item3.isbn); // "978-1-4932-2292-6"
item2.printDescription(); // "Sebastian Springer:

// =================================================
// Creating Objects via the Object.create() Function
// =================================================

const itemObject = Object.create(Object.prototype, {
	name: {
		value: "JavaScript: The Comprehensive Guide",
	},
	price: {
		value: 59.95,
	},
	author: {
		value: "Philip Ackermann",
	},
	isbn: {
		value: "978-1-4932-2286-5",
	},
	printDescription: {
		value: function () {
			console.log(`${this.author}: ${this.name}`);
		},
	},
});

// ============================================
// Property Attributes on the Object.create()
// ===========================================

const itemObject1 = Object.create(Object.prototype, {
	name: {
		Value: "Node Js: The beginners Guide",
		writable: true,
		configurable: true,
		enumerable: true,
	},
	price: {
		value: 49.99,
		writable: true,
		configurable: true,
		enumerable: true,
	},
	author: {
		value: "Philip Ackermann",
		writable: false,
		configurable: true,
		enumerable: true,
	},
	isbn: {
		value: "978-1-4932-2286-5",
		writable: false,
		configurable: true,
		enumerable: true,
	},
	printDescription: {
		value: function () {
			console.log(`${this.author}: ${this.name}`);
		},
	},
});

for (let property in itemObject1) {
	console.log(property);
}

itemObject1.name = "The Ultimate Guide";
console.log(itemObject1.name);

itemObject1.author = "Dr. Felix Effah";
console.log(itemObject1.author); // This is not cause any change.

// Access to the Property Attributes
const itemOne = {
	name: "JavaScript: The Comprehensive Guide",
	price: 59.95,
	author: "Philip Ackermann",
	isbn: "978-1-4932-2286-5",
	printDescription: function () {
		console.log(`${this.author}: ${this.name}`);
	},
};
const propertyDescriptor = Object.getOwnPropertyDescriptor(itemOne, "name");
console.log(propertyDescriptor.enumerable); // true
console.log(propertyDescriptor.configurable); // true
console.log(propertyDescriptor.writable); // true
console.log(propertyDescriptor.value); // JavaScript: The Comprehensive Guide

// ===========================================================
// Accessing Properties and Calling Methods
// ===========================================================

// Getters and Setters when Using Object Literal Notation
const itemTwo = {
	_name: "JavaScript: The Comprehensive Guide",
	_price: 59.95,
	_author: "Philip Ackermann",
	_isbn: "978-1-4932-2286-5",
	set name(newName) {
		if (typeof newName === "string") {
			console.log("Set new name");
			this._name = newName;
		} else {
			throw new TypeError("Name must be a string.");
		}
	},
	get name() {
		console.log("Return name");
		return this._name;
	},
};

console.log(itemTwo.name);
itemTwo.name = "JavaScript: The Comprehensive Guide by Philip Ackermann";
console.log(itemTwo.name);

// Creating Object Properties and Object Methods via Helper Methods: (Object.defineProperty)
const itemThree = {};
Object.defineProperty(itemThree, "name", {
	value: "JavaScript: The Comprehensive Guide",
});
Object.defineProperty(itemThree, "price", {
	value: 59.95,
});
Object.defineProperty(itemThree, "author", {
	value: "Philip Ackermann",
});
Object.defineProperty(itemThree, "isbn", {
	value: "978-1-4932-2286-5",
});
Object.defineProperty(itemThree, "printDescription", {
	value: function () {
		console.log(`${this.author}: ${this.name}`);
	},
});

// Adding New Properties and Methods via the Object.defineProperties() Method
const itemFour = {};
Object.defineProperties(item, {
	name: {
		value: "JavaScript: The Comprehensive Guide",
	},
	price: {
		value: 59.95,
	},
	author: {
		value: "Philip Ackermann",
	},
	isbn: {
		value: "978-1-4932-2286-5",
	},
	printDescription: {
		value: function () {
			console.log(`${this.author}: ${this.name}`);
		},
	},
});


// Outputting Object Properties and Object Methods via the for-in Loop

const item5 = {
	name: "JavaScript: The Comprehensive Guide",
	price: 59.95,
	author: "Philip Ackermann",
	isbn: "978-1-4932-2286-5",
	printDescription: function () {
		console.log(`${this.author}: ${this.name}`);
	},
};
for (let property in item5) {
	console.log(`Name: ${property}`);
	console.log(`Value: ${item5[property]}`);
}

// Listing All Object Properties and Object Methods via the Object.keys() Method

const properties = Object.keys(item);
for (let i = 0; i < properties.length; i++) {
	const property = properties[i];
	console.log(`Name: ${property}`);
	console.log(`Value: ${item[property]}`);
}
printArray(properties);
function printArray(array) {
	for (let i = 0; i < array.length; i++) {
		console.log(array[i]);
	}
}

// Listing All Object Properties and Object Methods via the Object.values() Method

const values = Object.values(item);
console.log(values);


// Listing All Object Properties and Object Methods via the Object.entries() Method

const entries = Object.entries(item);
console.log(entries);


// ================================
// Preventing Changes to Objects
// ================================

const john1 = {
	firstName: "John",
	lastName: "Doe",
};

console.log(Object.isExtensible(john));
john.age = 44;
console.log(john1.age);
Object.preventExtensions(john1);
console.log(Object.isExtensible(john1));
john1.firstName = "James";
console.log(john.firstName);

