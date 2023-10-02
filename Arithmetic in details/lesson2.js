console.log("Hello World");

//=========================== Operators for Working with Numbers =========================

let add = 20 + 20; // Addition
console.log(add); 
let sub = 20 - 5; // Subtraction
console.log(sub);
let div = 100 / 5; // Division
console.log(div);
let multi = 20 * 5; // Multiplication
console.log(multi);
let mod = 20 % 6; // Modulo
console.log(mod);
let increment = 5; // Increment
increment ++;
console.log(increment);
let decrement = 10; // Decrement
decrement --;
console.log(decrement);
let power = 5**5; // Power calculation
console.log(power);


// ================================== Operators for Easier Assignment =====================================

let result = 5;
result += 11;  // the variable now has a value of 16 ...
result -= 1;   // ... now a value of 15 ...
result /= 3;   // ... now a value of 5 ...
result *= 4;   // ... now a value of 20 ...
result %= 5;   // ... and now a value of 0.
console.log(result);


// =============================== Operators for Working with Boolean Values ===========================
// 1. (&&)  Logical AND
// 2. (||)  Logical OR
// 3. (!)   Negation

const isLoggedIn = true;
const isAdmin = false;
const isLoggedInAndAdmin = isLoggedIn && isAdmin; // AND operator
const isLoggedInOrAdmin = isLoggedIn || isAdmin; // OR operator
const isLoggedOut = !isLoggedIn;
console.log(isLoggedInAndAdmin);
console.log(isLoggedInOrAdmin);
console.log(isLoggedOut);

// ===============Results of the AND Operation of Non-Boolean Operands===========
const john = {
	firstName: "John",
	lastName: "Doe",
};
const james = {
	firstName: "James",
	lastName: "Doe",
};
const isJohnAndJames = john && james;
console.log(isJohnAndJames); // Output: Object {firstName: "James", lastName: "Doe"}
console.log(false && 'John');  // Output: false
console.log('John' && null);   // Output: null
console.log(null && 'John');   // Output: null


// ================ Use of the OR Operation for Non-Boolean Operands ================
const isJohnOrJames = john || james;
console.log(isJohnOrJames); // Output: Object {firstName: "John", lastName: "Doe"}
console.log(false || 'John'); // Output: John
console.log('John' || null);  // Output: John
console.log(null || 'John');  // Output: John


// ================================ The Nullish Coalescing Operator =============================
// RULE : the nullish coalescing operator (??) is used. This operator returns the right-hand operand (right side expression) when the left-hand operand (left side expression) is null or undefined. Otherwise, it returns the left-hand operand.
const someNullValue = null;
const someUndefinedValue = undefined;
const someNumber = 0;
const someText = "";
const someBoolean = false;


// Left operand is null --> return right operand
const a = someNullValue ?? 'Default value for null'; console.log(a);
// Output: Default value for null

// Left operand is undefined --> return right operand
const b = someUndefinedValue ?? 'Default value for undefined';
console.log(b);
// Output: Default value for undefined

// Left operand is 0 ("falsy") --> return left operand
const c = someNumber ?? 80;
console.log(c);
// Output: 0

// Left operand is an empty string ("falsy") --> return left operand
const d = someText ?? 'Default value for empty string';
console.log(d);
// Output: ''

// Left operand is false --> return left operand
const e = someBoolean ?? true;
console.log(e);
// Output: false

// Another Example 
const x = 4711;

console.log({} ?? x); // {}
console.log(false ?? x); // false
console.log(x ?? null); // 4711  
console.log(null ?? x); // 4711
console.log(null ?? null); // Null
console.log(x ?? NaN); // 4711
console.log(NaN ?? x); //  NaN 
console.log(x ?? undefined); // 4711
console.log(undefined ?? x); // 4711 
console.log(undefined ?? undefined); // undefined



// ================================== Operators for Comparing Values ==================================

// Use of the Operators for Testing Equality and Inequality
console.log(false == 0); // Output: true
console.log(false == 1); // Output: false
console.log(true == 1); // Output: true
console.log(true == 0); // Output: false
console.log("4711" == 4711);  // Output: true
console.log(false != 0); // Output: false
console.log(false != 1); // Output: true
console.log(true != 1); // Output: false
console.log(true != 0); // Output: true
console.log("4711" != 4711);  // Output: false

// Use of the Operators for Testing Strict Equality and Strict Inequality
console.log(false === 0); // Output: false
console.log(false === 1); // Output: false
console.log(true === 1); // Output: false
console.log(true === 0); // Output: false
console.log("4711" === 4711); // Output: false
console.log(false !== 0); // Output: true
console.log(false !== 1); // Output: true
console.log(true !== 1); // Output: true
console.log(true !== 0); // Output: true
console.log("4711" !== 4711); // Output: true


// ==================================== The Optional Chaining Operator ========================
// Access to Nested Properties Up To and Including ES2019

const john1 = {
	firstName: "John",
	lastName: "Doe",
	contact: {
		email: "john.doe@javacript.com",
	},
};
const james1 = {
	firstName: "James",
	lastName: "Doe",
};

if (john1.contact && john1.contact.email){
	console.log(john1.contact.email); // Output: "john.doe@javascripthandbuch.com"
}

// Runtime error!
// console.log(james.contact.email);
if (james1.contact && james1.contact.email){
    console.log(james1.contact.email); // No Output
}

// Access to Nested Properties Using the Optional Chaining Operator
// Access to nested property via
// optional chaining operator: 
console.log(john1.contact?.email);
// Output: "john.doe@javascript.com"

console.log(james1.contact?.email); // Output: undefined

// Alternative possibility: Using the
// operator on multiple hierarchy levels: 
console.log(john1?.contact?.email);


// ========================== The Logical Assignment Operators ================================

// logical OR assignment
let a1 = 5;
let a2 = null;
let a3 = false;
a1 ||= 7; // --> 5
a2 ||= 7; // --> 7
a3 ||= 7; // --> 7
console.log(`a1: ${a1}`); // "a1: 5" 
console.log(`a2: ${a2}`); // "a2: 7" 
console.log(`a3: ${a3}`); // "a3: 7"


// logical AND assignment
let b1 = 5;
let b2 = null;
let b3 = false;
b1 &&= 7; // --> 7
b2 &&= 7; // --> null
b3 &&= 7; // --> false
console.log(`b1: ${b1}`); // "b1: 7" 
console.log(`b2: ${b2}`); // "b2: null" 
console.log(`b3: ${b3}`); // "b3: false"


// logical nullish assignment
let c1 = 5;
let c2 = null;
let c3 = false;
c1 ??= 7; // --> 5
c2 ??= 7; // --> 7
c3 ??= 7; // --> false
console.log(`c1: ${c1}`); // "c1: 5" 
console.log(`c2: ${c2}`); // "c2: 7" 
console.log(`c3: ${c3}`); // "c3: false"

// ========================= Real-Life Example: Initialization of Object Properties =============== 
// internally ensures that the lastName property of the object james is initialized with the value Doe if the property is not yet assigned.

const james2 = {
	firstName: "James",
};
james2.firstName ||= "John";
james2.lastName ||= "Doe";
console.log(james2);


// Prior to ES2021, the following was required:
const peter = {
//   firstName: 'Peter'
};
peter.firstName || (peter.firstName = 'John');
peter.lastName || (peter.lastName = 'Doe');
console.log(peter);


// ======================================= Operators for Special Operations ==============================
