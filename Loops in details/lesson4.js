console.log(
	"Welcome to Lesson 4, We will be learning about: Counting Loops in javascript"
);

// ============================= The Basic Structure of a for Loop ======================
// for (
//   Initialization; // is executed before the loop is executed
//   Condition; // is checked before executing an iteration
//   Increment expression; // executed at the end of an iteration
// ){
// Loop body; // is executed once in each iteration
// }

//  ============================= Counting Loop Structure ========================

// ====================================================
// A Simple for Loop that Outputs Numbers from 1 to 10
// ====================================================

for (let i = 1; i <= 10; i++) {
	console.log(i);
}

// ====================================================
// Simple Game: Populating a Pick List Using a for Loop
// =====================================================

// let selectElement = document.getElementById("grade");
const options = [
	"A (90%-100%)",
	"B (80%-89%)",
	"C (70%-79%)",
	"D (60%-69%)",
	"F (0%-59%)",
];

for (let i = 0; i < options.length; i++) {
	let optionElement = document.createElement("option");
	let optionText = document.createTextNode(options[i]);
	optionElement.appendChild(optionText);
	selectElement.appendChild(optionElement);
}

function compareSelectedValue() {
	let displayMessage = document.getElementById("message");
	let selectedValue = selectElement.value;
	// console.log(typeof selectElement.textContent);
	// console.log(selectedValue);

	if (selectedValue === "A (90%-100%)") {
		displayMessage.innerText = "Distinction!";
	} else if (selectedValue === "B (80%-89%)") {
		displayMessage.innerText = "Excellent!";
	} else if (selectedValue === "C (70%-79%)") {
		displayMessage.innerText = "Very Good!";
	} else if (selectedValue === "D (60%-69%)") {
		displayMessage.innerText = "Good";
	} else {
		displayMessage.innerText = "Fail";
	}
}
compareSelectedValue();

// ================================= Nested Counting Loops ============================

// The outer Counting Loop
for (let i = 0; i < 5; i++) {
	// Inner Loop
	for (let j = 0; j < 5; j++) {
		console.log(`i has the value ${i}, j has the value ${j}`);
	}
}

// ======= Real-Life Example: Output of the Elements of Multidimensional Arrays===================

const coordinates = [
	[50.69, 8.94],
	[54.29, 11.97],
	[55.38, 12.88],
	[60.78, 9.94],
	[62.29, 7.69],
	[70.34, 8.24],
	[72.59, 11.29],
	[80.69, 8.56],
];

// Outer Loop
for (let i = 0; i < coordinates.length; i++) {
	const coordinate = coordinates[i];
	// inner loop
	for (let j = 0; j < coordinate.length; j++) {
		console.log(coordinate[j]);
	}
}

// =============================== Defining Head-Controlled Loops =============================

//  The Basic Structure of a while Loop
// while (expression) {
// 	// Statement(s)
// }

// ==========================================================
// A Simple while Loop that Outputs the Numbers from 1 to 10
// ==========================================================

let i = 0; // Initialization
while (i < 5) {
	// Condition
	console.log(i); // Statement
	i++; // Increament
}

// ==========================================================
// Real-Life Example: Moving HTML Elements within a Web Page
// ==========================================================

const sourceList = document.getElementById("source");
const targetList = document.getElementById("target");
const copyButton = document.getElementById("move");
const moveBack = document.getElementById("move-back");

copyButton.addEventListener("click", function () {
	while (sourceList.hasChildNodes()) {
		const item = sourceList.removeChild(sourceList.firstChild);
		item && targetList.appendChild(item);
	}
});

moveBack.addEventListener("click", function () {
	while (targetList.hasChildNodes()) {
		const item = targetList.removeChild(targetList.firstChild);
		item && sourceList.appendChild(item);
	}
});

// ================= Prematurely Terminating Loops and Loop Iterations ==========================

// ===============
// 1.Break keyword

const numbers = [2, 4, 56, 22, 65, 2, 54, 88, 29];
console.log("Before the loop.");

for (let i = 0; i < numbers.length; i++) {
	// get the current number
	const number = numbers[i];
	// Make sure we have the current number and then checking if it's odd
	if (number && number % 2 === 1) {
		// display an output that we found the number
		console.log("found an odd number !");
		// Terminate the loop
		break;
	}
	// display the current number that caused the iteration to stop.
	console.log(number);
}
console.log("After the loop.");

// ========================================
// Achieving the same thing with while loop

console.log("Before the loop.");
let count = 0;
while (count < numbers.length) {
	const number = numbers[count];
	if (number % 2 === 1) {
		console.log("Found an odd  number!");
		break;
	}
	console.log(number);
	count++;
}
console.log("After the loop.");

// ===================
// 2.contiune keyword
console.log("Before the loop 3.");
for (let i = 0; i < numbers.length; i++) {
	const number = numbers[i];
	if (number && number % 2 === 1) {
		console.log("found an odd number !");
		continue;
	}
	console.log(number);
}
console.log("After the loop 3.");

// =========================================
// Achieving the same thing with while loop
console.log("before the loop 4.");
let k = 0;
while (k < numbers.length) {
	const number = numbers[k];
	k++;
	if (number % 2 === 1) {
		console.log("Found an odd number");
		continue;
	}
	console.log(number);
}
console.log("After the loop 4.");

// ======================================================
// This Nested Loop Finds Duplicate Numbers in the Array

for (let x = 0; x < numbers.length; x++) {
	const number1 = numbers[x];
	for (let y = x + 1; y < numbers.length; y++) {
		const number2 = numbers[y];
		console.log(`Comparing ${number1} with ${number2}`);
		if (number1 === number2) {
			console.log("Same numbers found");
			continue;
		}
	}
}
