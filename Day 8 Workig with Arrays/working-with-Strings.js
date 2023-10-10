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
	firstName: "John",
	lastName: "Doe",
	age: 33,
	hairColor: "brown",
	height: 1.8,
};

console.log(checkUsername(person4))