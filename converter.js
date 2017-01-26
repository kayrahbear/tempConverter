
var output = document.getElementById("output-target");
var userTemp = document.getElementById("tempField").value;
var button = document.getElementById("converter");
var tempInput = document.getElementById("tempField");


button.addEventListener("click", determineConverter);

// Choose a button for conversion
tempInput.addEventListener("keypress", pressed);
function pressed(e) {
console.log("event", e);
if (e.keyCode === 13) { // key 13 = enter
	determineConverter(e);
	}
}


// which conversion?
function determineConverter(clickEvent) {
	var userTemp = document.getElementById("tempField").value

	if (document.getElementById('c').checked) {
		toCelsius(userTemp);
	} else if (document.getElementById('f').checked) {
		toFahrenheit(userTemp);
	} else {
		alert("Please choose Fahrenheit or Celsius");
	}
}
// convert to 'c'
function toCelsius (userTemp) {
	finalTemp =	Math.floor((userTemp -32) * (5 / 9));
	finalTemp.toFixed(2);

// colors for different temps
	if (finalTemp < 0) {
		output.innerHTML = `<p style="color:blue">${finalTemp}</p>`;
	} else if (finalTemp > 32) {
		output.innerHTML = `<p style="color:red">${finalTemp}</p>`;
	} else {
		output.innerHTML = `<p style="color:green">${finalTemp}</p>`;
	}
}
// convert to 'f'
function toFahrenheit (userTemp) {
	finalTemp = Math.floor(userTemp + 32) * (9 / 5);
	finalTemp.toFixed(2);

// colors for different temps
	if (finalTemp < 32) {
			output.innerHTML = `<p style="color:blue">${finalTemp}</p>`;
	} else if (finalTemp > 90) {
		output.innerHTML = `<p style="color:red">${finalTemp}</p>`;
	} else {
		output.innerHTML = `<p style="color:green">${finalTemp}</p>`;
	}
}
// clear button
var clearText = document.getElementById("clear").addEventListener("click", function (event) {
	tempField.value = "";
	outputTarget.innerHTML = "";
	document.getElementById('c').checked = false;
	document.getElementById('f').checked = false;
});
