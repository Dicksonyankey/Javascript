"use strict";
// ===================================== Controlling the Flow of a Program ==========================

const userIsLoggedIn = false;
const userName = "Felix";

if (userIsLoggedIn) {
	const message = `Welcome ${userName}, You are Logged In `;
	document.getElementById("message").textContent = message;
} else {
	const message = `Welcome ${userName}, LogIn`;
	document.getElementById("message").textContent = message;
}

// ==========================================================================
// A Simple Age Game Using the if-else-if-else Branching.
// The program first ask for that user name and then figures out what to do.
// =========================================================================

const age1 = prompt("For what age are you looking for film tips?");
const age = 12;
if (age >= 18) {
	const message = "Show films with a rating of G, PG, PG-13, R, and NC-17";
	document.getElementById("message").textContent = message;
} else if (age >= 17) {
	const message = "Show films with a rating of G, PG, PG-13, and R.";
	document.getElementById("message").textContent = message;
} else if (age >= 13) {
	const message = "Show films with a rating of G, PG, and PG-13.";
	document.getElementById("message").textContent = message;
} else if (age >= 6) {
	const message = "Show films with a rating of G, PG, and PG-13.";
	document.getElementById("message").textContent = message;
}

// ==========================================================================
// A Simple Age Game Using the if-else-if-else Branching.
// The program first ask for that user name and then figures out what to do.
// Modifies the Game a bit
// =========================================================================

const age2 = prompt("For what age are you looking for film tips?");
if (!isNaN(parseFloat(age)) && isFinite(age)) {
	if (age >= 18) {
		const message ="Show films with a rating of G, PG, PG-13, R, and NC-17";
		document.getElementById("message").textContent = message;
	} else if (age >= 17) {
		const message = "Show films with a rating of G, PG, PG-13, and R.";
		document.getElementById("message").textContent = message;
	} else if (age >= 13) {
		const message = "Show films with a rating of G, PG, and PG-13.";
		document.getElementById("message").textContent = message;
	} else if (age >= 6) {
		const message = "Show films with a rating of G, PG, and PG-13.";
		document.getElementById("message").textContent = message;
	}
} else {
	const message = "Invalid age entered.";
	document.getElementById("message").textContent = message;
}

// =========================== Variable Assignment Using a Branch

const age3 = 18;
// let isAtLeast18 = false;
// if (age >= 18) {
// 	isAtLeast18 = true;
// }
// console.log(isAtLeast18);

// ============================ Variable Assignment Using the Selection Operator
// Ternary Operator in javascript

// const isAtLeast18 = age >= 18 ? true : false;
// console.log(isAtLeast18);

// =========================== Assigning a String Using the Selection Operator

const isAtLeast18 = age >= 18 ? true : false;
const message = isAtLeast18 ? "Over 18" : "Under 18";
console.log(message);

// ============================= Switch Statement ==========================
// Using the switch Application

const testResultElement = document.getElementById("testResult");
const testResult = 0;
let icon = null;
switch (testResult) {
	case 0:
		icon = "pass.png";
		break;
	case 1:
		icon = "info.png";
		break;
	case 2:
		icon = "warning.png";
		break;
	case 3:
		icon = "error.png";
		break;
	default:
		icon = "unknown.png";
}
testResultElement.src = "img/" + icon;
