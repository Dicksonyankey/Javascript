document.addEventListener("DOMContentLoaded", function () {
	const button = document.getElementById("button-calculate-sum");
	button.addEventListener("click", calculateSum);
});

function calculateSum() {
	// Convert both field value to an Integer
	const x = parseInt(document.getElementById("field1").value);
	const y = parseInt(document.getElementById("field2").value);

	const result = x + y;
	showResult(result);

	// Set Both Fields i.e 1 & 2 bac to empty
	document.getElementById("field1").value = "";
	document.getElementById("field2").value = "";
}

function showResult(result) {
	const resultField = document.getElementById("result");
	resultField.value = result;
}