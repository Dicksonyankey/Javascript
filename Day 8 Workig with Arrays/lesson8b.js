const ulElement = document.getElementById("list");

const names = [
	"Alice",
	"Bob",
	"Charlie",
	"David",
	"Ella",
	"Fiona",
	"George",
	"Hannah",
	"Ivan",
	"Jack",
];

for (let i = 0; i < names.length; i++) {
	const createLiElement = document.createElement("li");
	const liItem = document.createTextNode(names[i]);
	createLiElement.appendChild(liItem);
	ulElement.appendChild(createLiElement);
}
