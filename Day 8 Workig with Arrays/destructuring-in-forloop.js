const persons = [
	{
		firstName: "John",
		lastName: "Doe",
		contact: {
			email: "john.doe@javascripthandbuch.de",
			phone: "02345/23456789",
		},
	},
	{
		firstName: "Jane",
		lastName: "Smith",
		contact: {
			email: "jane.smith@javascripthandbuch.de",
			phone: "02345/23456789",
		},
	},
];
for (let {
	firstName: firstName,
	lastName: lastName,
	contact: { email: email, phone: phone },
} of persons) {
	console.log(`${firstName} ${lastName}`);
	console.log(`Email: ${email}`);
	console.log(`Phone: ${phone}`);
}

for (let {
	firstName: f,
	lastName: l,
	contact: { email: e, phone: p },
} of persons) {
	console.log(`${f} ${l}`);
	console.log(`Email: ${e}`);
	console.log(`Phone: ${p}`);
}

function printPerson({
	firstName: firstName,
	lastName: lastName,
	contact: { email: email, phone: phone },
}) {
	console.log(`${firstName} ${lastName}`);
	console.log(`Email: ${email}`);
	console.log(`Phone: ${phone}`);
}

const person1 = {
	firstName: "Jane",
	lastName: "Smith",
	contact: {
		email: "jane.smith@javascripthandbuch.de",
		phone: "02345/23456789",
	},
};

console.log(printPerson(person1));

// ==============================================
// Copying Object Properties to Another Object
// ==============================================

const person4 = {
	firstName: "John",
	lastName: "Doe",
	age: 33,
	hairColor: "brown",
	height: 1.8,
};
const { firstName, lastName, ...properties } = person4;
console.log(firstName);
console.log(lastName);
console.log(properties);