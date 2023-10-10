const person = {
	firstName: "John",
	lastName: "Doe",
};
const { firstName: firstNameExtracted, lastName: lastNameExtracted } = person;
console.log(firstNameExtracted);
console.log(lastNameExtracted);


const person1 = {
	firstName: "John",
	lastName: "Doe",
	address: {
		postCode: "23456",
		street: "22, Sample Street",
	},
};

const {
	firstName: firstNameExtracted1,
	lastName: lastNameExtracted2,
	address: { postCode: postCodeExtracted, street: streetExtracted },
} = person1;


const person2 = {
	firstName: "John",
	lastName: "Doe",
	address: {
		postCode: "23456",
		street: "22, Sample Street",
	},
};
const {
	firstName,
	lastName,
	address: { postCode, street },
} = person2;

console.log(firstName);
console.log(postCode);
console.log(lastName);


const person4 = {
  firstName : 'John',
  lastName : 'Doe',
  address : {
    postCode : '23456',
    street : '22, Sample Street'
  },
  phoneNumbers : [
    '02345/23456786',
    '02345/23456789'
] }


const {
  firstName : firstNameExtracted3,
  lastName : lastNameExtracted3,
  address : {
    postCode : postCodeExtracted1,
    street : streetExtracted1
  },
    phoneNumbers : [ phoneNumber1Extracted1, phoneNumber2Extracted1]
} = person;

console.log(postCodeExtracted1);