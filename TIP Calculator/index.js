const billAmountInput = document.getElementById("billAmount");
const tipPercentageInput = document.getElementById("tipPercentage");
const numberOfPeopleInput = document.getElementById("numberOfPeople");
const calculateButton = document.getElementById("calculateButton");
const resetButton = document.getElementById("resetButton");

const tipPerPersonOutput = document.getElementById("tipPerPerson");
const totalPerPersonOutput = document.getElementById("totalPerPerson");
const totalTipOutput = document.getElementById("totalTip");
const peopleError = document.getElementById("peopleError");

function formatMoney(value) {
	return `$${value.toFixed(2)}`;
}

function resetResults() {
	tipPerPersonOutput.textContent = "$0.00";
	totalPerPersonOutput.textContent = "$0.00";
	totalTipOutput.textContent = "$0.00";
}

function calculateTip() {
	const bill = Number(billAmountInput.value);
	const tipPercent = Number(tipPercentageInput.value);
	const people = Number(numberOfPeopleInput.value);

	peopleError.textContent = "";

	if (!bill || bill < 0 || !tipPercent || tipPercent < 0) {
		resetResults();
		return;
	}

	if (!people || people <= 0) {
		peopleError.textContent = "Number of people must be at least 1.";
		resetResults();
		return;
	}

	const totalTip = bill * (tipPercent / 100);
	const totalWithTip = bill + totalTip;
	const tipPerPerson = totalTip / people;
	const totalPerPerson = totalWithTip / people;

	tipPerPersonOutput.textContent = formatMoney(tipPerPerson);
	totalPerPersonOutput.textContent = formatMoney(totalPerPerson);
	totalTipOutput.textContent = formatMoney(totalTip);
}

function resetCalculator() {
	billAmountInput.value = "";
	tipPercentageInput.value = "";
	numberOfPeopleInput.value = "";
	peopleError.textContent = "";
	resetResults();
}

calculateButton.addEventListener("click", calculateTip);
resetButton.addEventListener("click", resetCalculator);
