console.log("Learning about functions in javascript");
// ============================= Creating Reusable Code Blocks ==================================

// ================================================
// Creating a Function Using a Function Expression

const showMessage = function () {
	console.log("Welcome");
};
showMessage();

// =====================================================================
// With Function Expressions, the Function Cannot Be Called by Its Name

const showMessage1 = function showMessageFunctionName() {
	console.log("Welcome");
};
showMessage1();

// ===========================================================================================
// Functions Created Using a Function Declaration Can Already Be Used before This Declaration

showMessage2(); // Function call possible
function showMessage2() {
	console.log("Welcome");
}

// ==========================================================
// Creating a Function via the Function Constructor Function

const sum = new Function("x", "y", "return x + y");
console.log(sum(7, 8)); // Output: 15

// ==========================================================
// Defining Functions with a Parameter

function displayMessage(message) {
	console.log(message);
}
displayMessage("hello world");
displayMessage("James: How are you doing?");
displayMessage("Hi John, how are you doing today?");

// ==========================================================
// Declaration of a Function with Multiple Parameters

function printPersonalInformation(firstname, lastname, age) {
	console.log(`First name : ${firstname}`);
	console.log(`Last name : ${lastname}`);
	console.log(`Age : ${age}`);
}

printPersonalInformation("John", "Doe", 44);
printPersonalInformation("James", "Smith", 34);

// ==================================================================================
// Within a Function, the Behavior Can Be Adjusted Depending on the Arguments Passed

function printPersonInformation1(firstName, lastName, age) {
	if (firstName !== undefined) {
		console.log(`First name: ${firstName}`);
	}
	if (lastName !== undefined) {
		console.log(`Last name: ${lastName}`);
	}
	if (age !== undefined) {
		console.log(`Age: ${age}`);
	}
}

printPersonInformation1("John", "Doe", 44);
printPersonInformation1("James", "Smith", 34);

function printPersonInformation3(firstName, lastName, age) {
	if (arguments.length > 3) {
		console.log(`Size: ${arguments[3]}`);
	}
	if (arguments.length > 4) {
		console.log(`Weight: ${arguments[4]}`);
	}
}

printPersonInformation3("John", "Doe", 44, 1.88, 88);

// ======================================
// The Principle of Rest Parameters

function printPersonInformation4(firstName, lastName, age, ...restArgs) {
	console.log("First name: " + firstName);
	console.log("Last name: " + lastName);
	console.log("Age: " + age);
	if (restArgs.length > 0) {
		console.log(`Size: ${restArgs[0]}`);
	}
	if (restArgs.length > 1) {
		console.log(`Weight: ${restArgs[1]}`);
	}
}
printPersonInformation4("John", "Doe", 44, 1.88, 88);

// =================================================
// Implementation of a Variadic Function via Array

function sumArray(numbers) {
	let result = 0;
	for (let i = 0; i < numbers.length; i++) {
		result += numbers[i];
	}
	console.log(result);
}

sumArray([2, 3, 4, 5]);
sumArray([2, 3, 4, 5, 6, 7, 8, 9]);
sumArray([2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

function sumArray1() {
	let total = 0;
	for (let i = 0; i < arguments.length; i++) {
		total += arguments[i];
	}
	console.log(total);
}

sumArray1(2, 3, 4, 5);
sumArray1(2, 3, 4, 5, 6, 7, 8, 9);
sumArray1(2, 3, 4, 5, 6, 7, 8, 9, 10, 11);

// =========================================================
// Defining Functions within Functions
// =========================================================

function sum1(x, y) {
	const result = normalize(x) + normalize(y);
	function normalize(i) {
		if (i < 0) {
			return 0;
		}
		return i;
	}
	return result;
}
console.log(sum1(-5, 5));
// console.log(normalize(-5));

// =======================================
// Defining Return Values
// =======================================

function findSum(x, y) {
	const result = x + y;
	return result;
}

console.log(findSum(10, 30));

// You can also perform a direct return

function findSum1(x, y) {
	return x + y;
}

const sumNumber = findSum1(10, 3);
console.log(sumNumber);

// ==================================
// A Function That Returns an Object

function createNewUser(username, email, password) {
	const user = {
		username: username,
		email: email,
		password: password,
	};

	return user;
}

const john = createNewUser("johndoe123", "johndoe@gmail.com", 123333);
console.log(john);

//

function createNewUser1(username, email, password) {
	password = password !== undefined ? password : "Secretisthepassword";
	const user = {
		username: username,
		email: email,
		password: password,
	};
	return user;
}
const james = createNewUser1("jamessmith12", "jamessmith12@gmail.com");
console.log(james);

// Using Array Values as Arguments of a Function

console.log("-----Using Array Values as Arguments of a Function------");
const userData1 = ["John Doe", "john.doe@example.com", "secret"];
const userData2 = ["James Doe", "james.doe@example.com", "password"];

const john1 = createNewUser(userData1[0], userData1[1], userData1[2]);
console.log(john1);

const james1 = createNewUser(userData2[0], userData2[1], userData2[2]);
console.log(james1);

// Using Array Values as Arguments to a Function Using the Spread Operator
console.log("--Using the spread operator to acheive the same result above.--");
const john2 = createNewUser(...userData1);
console.log(john2);

const james2 = createNewUser(...userData2);
console.log(james2);

// ============================================================================
//  Defining Functions Using Short Notation
// ============================================================================

// (parameters) => {function body} // Basic Structure of an Arrow Function

// An Arrow Function with One Parameter
const showMessage4 = (message) => console.log(message);

// An Arrow Function without Parameters
const printHelloWorld = () => console.log("Hello world");

// ============= An Arrow Function That Returns an Object =================
const createUser3 = (username, email, password) => ({
	username: username,
	email: email,
	password: password,
});

// ============== same as this =============

function createUser4(username, email, password) {
	const user = {
		username: username,
		email: email,
		password: password,
	};
	return user;
}

// =========================================================
// Modifying Strings via Functions
// =========================================================

// const fullname = 'John Doe';
// const age = 44;
// function tagFunction(strings, ...replacements) { }
// const message = tagFunction`My name is ${fullname}, I am ${age} years old.`;
// console.log(message);

// Implementation and Usage of a Tag Function

function tagFunction(strings, ...replacements) {
	const name = replacements[0];
	const age = replacements[1];

	if (age > 80) {
		return `${strings[0]}${replacements[0]}`;
	}

	return `${strings[0]}${replacements[0]}${strings[1]}${replacements[1]}${strings[2]}`;
}

const name = "John Doe";
let age = 100;

const showResult = tagFunction`My name is ${name}, I am ${age} years old`;
console.log(showResult);

// ==========================================
// Context Object
// ===============

const data = {
	name: "John",
	getName: function () {
		return this.name;
	},
};
console.log(data.getName());
// The output of the program is John, as expected, because (this) refers to the person object here.

var value = "global name";
function getNameGlobal() {
	return this.value;
}
console.log(getNameGlobal()); // Output : global name

const person4 = {
	value: "James",
	getName: getNameGlobal,
};
const artist = {
	value: "Kyuss",
	getName: getNameGlobal,
};
console.log(person4.getName()); // Output: James
console.log(artist.getName()); // Output: Kyuss
