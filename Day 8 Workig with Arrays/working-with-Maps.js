const numbersOfAlbums = new Map([
	["Kyuss", 4],
	["Tool", 6],
	["Monster Magnet", 8],
	["Ben Harper", 9],
	["Queens of the Stone Age", 6],
]);
console.log(numbersOfAlbums);

const numbersOfAlbums1 = new Map();
numbersOfAlbums1.set("Kyuss", 4);
numbersOfAlbums1.set("Tool", 6);
numbersOfAlbums1.set("Monster Magnet", 8);
numbersOfAlbums1.set("Ben Harper", 9);
numbersOfAlbums1.set("Queens of the Stone Age", 6);
console.log(numbersOfAlbums1.get("Kyuss")); // Output: 4
console.log(numbersOfAlbums1.size); // Output: 5
console.log(numbersOfAlbums1.has("Kyuss")); // Output: true
numbersOfAlbums1.delete("Kyuss"); // Delete an entry console.log(numbersOfAlbums1.has('Kyuss')); //Output: false
console.log(numbersOfAlbums1.has("Justin Bieber"));
numbersOfAlbums1.clear();
console.log(numbersOfAlbums1.size);



for (let artist of numbersOfAlbums.keys()) {
	console.log(artist);
}

// Comparison of the Classic for-in Loop with the New for-of Loop
const numbers = [ 18, 22, 26, 30, 34 ];
numbers.name = "number array"; 

for (let i in numbers){
    console.log(i);
}

// for-of loop
for (let i of numbers) {
    console.log(i); 
}

for (let number of numbersOfAlbums.values()) {
	console.log(number);
}

console.log("---------------------");
for (let entry of numbersOfAlbums.entries()) {
console.log(entry[0]); // Key
console.log(entry[1]); // Value 
}

console.log("---------------------");
// Alternative access via array destructuring:
for (let [bandName,numberOfAlbums] of numbersOfAlbums.entries()) {
    console.log(`${bandName} => ${numberOfAlbums}`);
};




// ==================================== Sets ======================================
const artists = new Set([
	"Kyuss",
	"Kyuss",
	"Tool",
	"Monster Magnet",
	"Ben Harper",
	"Queens of the Stone Age",
]);
console.log(artists);