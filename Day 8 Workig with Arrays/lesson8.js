console.log("------Working with Arrays in Javascript-------");

// ====================================================
// Creating and Initializing Arrays
// ===================================================

// Creating an Array
const names = new Array();

// Creating an Array with a Specified Length
const names1 = new Array(20);

//Creating an Array with Specified Values
const names2 = new Array("John", "James", "Peter");

// Creating an Array Using Short Notation
const name3 = ["John", "James", "Peter"];

const colors = [];

// Creating an Array of Objects Using Short Notation
const contacts = [
	{
		firstName: "John",
		lastName: "Doe",
		email: "john.doe@javascripthandbuch.de",
	},
	{
		firstName: "James",
		lastName: "Doe",
		email: "james.doe@javascripthandbuch.de",
	},
];
console.log(contacts);

// Arrays Can Contain Values of Different Data Types
const values = [];
values[0] = "John";
values[1] = 4711;
values[2] = true;
console.log(values);

// ================================
// Accessing Elements of an Array
// ================================

// Accessing Individual Elements of an Array by Index
const todoList = ["Clean bathroom", "Go shopping", "Tidy up", "Mow lawn"];
console.log(todoList[0]);
console.log(todoList[1]);
console.log(todoList[2]);
console.log(todoList[3]);
console.log(todoList[4]);

// Accessing Individual Elements of an Array via Loop and Index
console.log("--Items in TodoList--");
for (let i = 0; i < todoList.length; i++) {
	console.log(todoList[i]);
}

// ===============================
// Adding and removing elements
// =================================================
// The push(), pop(), shift(), and unshift() methods

// Adding Elements to an Array via the push() Method
const todoList1 = [];
let length;
length = todoList1.push("Code in the morning");
console.log(length);
length = todoList1.push("Code in the afternoon");
console.log(length);
length = todoList1.push("Code in the evening");
console.log(length);
console.log(todoList1);

// Adding Elements to an Array Using the unshift() Method
const todoList3 = [];
todoList3.unshift("code in the evening");
todoList3.unshift("code in the afternoon");
todoList3.unshift("code in the morning");
console.log(todoList3);

// Adding Elements to an Array Using the splice() Method

todoList.splice(2, 0, "Paint garage");
console.log(todoList);

todoList1.splice(2, 0, "Paint garage", "Coding is fun");
console.log(todoList1);

// You can also add an entire Array using the spread operator.
todoList3.splice(2, 0, ...values);
console.log(todoList3);

// The pop() Method Removes the Last Element from an Array
const item1 = todoList.pop();
console.log(item1);
const item2 = todoList.pop();
console.log(item2);
const item3 = todoList.pop();
console.log(item3);
const item4 = todoList.pop();
console.log(item4);
const item5 = todoList.pop();
console.log(item5);

// The shift() Method Removes the First Element from an Array
const load1 = todoList.shift();
console.log(load1);
const load2 = todoList.shift();
console.log(load2);
const load3 = todoList.shift();
console.log(load3);
const load4 = todoList.shift();
console.log(load4);
const load5 = todoList.shift();
console.log(load5);

// The splice() Method Can Be Used to Delete Elements from an Array
const todoList5 = ["Clean bathroom", "Go shopping", "Tidy up", "Mow lawn"];
const deletedTodos = todoList5.splice(1, 2);
console.log(deletedTodos);
console.log(todoList5);

console.log("-----------");
// The slice() Method Can Be Used to Extract Parts of an Array
const todoList6 = ["Clean bathroom", "Go shopping", "Tidy up", "Mow lawn"];

const sliced1 = todoList6.slice(1);
console.log(sliced1);
const sliced2 = todoList6.slice(2);
console.log(sliced2);

const sliced3 = todoList6.slice(0, 2);
console.log(sliced3);
const sliced4 = todoList6.slice(2, 4);
console.log(sliced4);
console.log(todoList6);

// ============================
// Sorting Objects in Arrays
// ===========================

const contacts1 = [
	{
		firstName: "John",
		lastName: "Doe",
		email: "john.doe@javascripthandbuch.de",
	},
	{
		firstName: "James",
		lastName: "Dean",
		email: "supterjames@javascripthandbuch.de",
	},
	{
		firstName: "Peter",
		lastName: "Dickens",
		email: "dickens@javascripthandbuch.de",
	},
];

function compareByFirstName(contact1, contact2) {
	return contact1.firstName.localeCompare(contact2.firstName);
}

function compareByLastName(contact1, contact2) {
	return contact1.lastName.localeCompare(contact2.lastName);
}

function compareByEmail(contact1, contact2) {
	return contact1.email.localeCompare(contact2.email);
}

contacts1.sort(compareByFirstName); // sort by first name
console.log(contacts1[0].firstName); // James
console.log(contacts1[1].firstName); // John
console.log(contacts1[2].firstName); // Peter

// contacts.sort(compareByLastName); // sort by last name
// console.log(contacts[0].firstName); // James
// console.log(contacts[1].firstName); // Peter
// console.log(contacts[2].firstName); // John

// contacts.sort(compareByEmail); // sort by email address
// console.log(contacts[0].firstName); // Peter
// console.log(contacts[1].firstName); // John
// console.log(contacts[2].firstName); // James

// Simple Example of Using an Array as a Stack

const stack = [];
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4, 5, 6, 7, 8);
console.log(stack);
console.log(stack.pop());
console.log(stack); // 0509476858

// ==========================
// Finding Elements in Arrays
// =========================

const transactions = [-20.0, 500.5, -40.0, -34.5, 200, 500.5, -20, 200];

console.log(transactions.indexOf(-20.0));
console.log(transactions.indexOf(500));
console.log(transactions.indexOf(200));
console.log(transactions.indexOf(200, 5));

// lastIndexOf method
console.log(transactions.lastIndexOf(-20.0));
console.log(transactions.lastIndexOf(500));
console.log(transactions.lastIndexOf(200));
console.log(transactions.lastIndexOf(200, 5));

// Incudes method
console.log([4, 5, 6].includes(4));
console.log([2, 7, 8].includes(4));
console.log(["John", "James"].includes("Peter"));
console.log(["John", "James"].includes("James"));
console.log([4, 5, 6, 4711, 50, 87].includes(6, 2));
console.log([4, 5, 6, 4711, 50, 87].includes(6, 4));

const result1 = [2, 3, 4, 5, 6, 7, 2, 3, 4, 5].find(
	(element) => element % 2 !== 0
);
console.log(result1); // 3

const result2 = [2, 3, 4, 5, 6, 7, 2, 3, 4, 5].findIndex(
	(element) => element % 2 !== 0
);
console.log(result2); // 1

// =================================
// Converting Arrays to Strings

const namesOfPoeple = ["John", "James", "Peter"];
const namesString = namesOfPoeple.toString();
console.log(namesString);
const namesLocaleString = names.toLocaleString();
console.log(namesLocaleString);
const namesValue = namesOfPoeple.valueOf();
console.log(namesValue);
const namesJoined = namesOfPoeple.join("-");
console.log(namesJoined);

// ==================================================
// Extracting Values from Arrays without Destructurin

const bestOfStonerrock = [
	"Kyuss",
	"Spiritual Beggars",
	"Spice and the RJ Band",
	"Band of Spice",
];

const [one, two, three, four] = bestOfStonerrock;
console.log(one);
console.log(two);
console.log(three);
console.log(four);
