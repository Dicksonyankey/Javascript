function checkUsername(userData){
    const {firstName, lastname, age, hairColor, height} = userData;
    if (firstName.length < 5){
        console.error("User first name must be more tan 5!")
    }else if (firstName.length > 8){
        console.error("Username may contain a maximum of 8 characters.");
    }else{
        console.log("Valid username");
    }
}



const person4 = {
	firstName: "Max Mustermann",
	lastName: "Doe",
	age: 33,
	hairColor: "brown",
	height: 1.8,
};
console.log(checkUsername(person4))

// Searching for the First Occurrence

const fullname = 'Max Mustermann'; 
console.log(fullname.indexOf('M')); // Output: 0 
console.log(fullname.indexOf('mann'))
console.log(fullname.indexOf("M", 2)); // optionally second argument to show were to start the search


// // Searching for the last Occurrence
console.log(fullname.lastIndexOf('M')); // Output: 4 
console.log(fullname.lastIndexOf('M', 2)); // Output: 0

// The substring() and substr() Methods Extract Parts from a String
console.log(fullname.substring(4, 10));
console.log(fullname.substring(4));
console.log(fullname.substr(4, 6));
console.log(fullname.substr(4));


for (let i=1; i<15; i++) {
  console.log(`${i}`.padStart(3,'0'));
}

for (let i=1; i<15; i++) {
  console.log(`${i}`.padEnd(3,'0'));
}


