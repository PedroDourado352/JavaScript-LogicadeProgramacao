const display = document.getElementById("display");
const keys = document.querySelector(".keys");

let expression = "";

const lastChar = () => expression[expression.length - 1];
const isOperator = (char) => ["+", "-", "*", "/"].includes(char);

function updateDisplay() {
	display.textContent = expression || "0";
}

function appendValue(value) {
	if (value === ".") {
		const parts = expression.split(/[+\-*/]/);
		const currentNumber = parts[parts.length - 1];
		if (currentNumber.includes(".")) {
			return;
		}
		if (!currentNumber) {
			expression += "0";
		}
	}

	if (isOperator(value)) {
		if (!expression) {
			return;
		}
		if (isOperator(lastChar())) {
			expression = expression.slice(0, -1) + value;
			return;
		}
	}

	expression += value;
}

function calculate() {
	if (!expression || isOperator(lastChar())) {
		return;
	}

	try {
		const result = Function(`"use strict"; return (${expression})`)();
		if (!Number.isFinite(result)) {
			expression = "Erro";
			return;
		}
		expression = String(result);
	} catch {
		expression = "Erro";
	}
}

function clearAll() {
	expression = "";
}

function deleteLast() {
	expression = expression.slice(0, -1);
}

keys.addEventListener("click", (event) => {
	const button = event.target.closest("button");
	if (!button) {
		return;
	}

	if (expression === "Erro") {
		expression = "";
	}

	const action = button.dataset.action;
	const value = button.dataset.value;

	if (action === "clear") {
		clearAll();
	} else if (action === "delete") {
		deleteLast();
	} else if (action === "equals") {
		calculate();
	} else if (value) {
		appendValue(value);
	}

	updateDisplay();
});

window.addEventListener("keydown", (event) => {
	const allowed = "0123456789.+-*/";

	if (allowed.includes(event.key)) {
		if (expression === "Erro") {
			expression = "";
		}
		appendValue(event.key);
		updateDisplay();
		return;
	}

	if (event.key === "Enter" || event.key === "=") {
		calculate();
		updateDisplay();
		return;
	}

	if (event.key === "Backspace") {
		deleteLast();
		updateDisplay();
		return;
	}

	if (event.key.toLowerCase() === "c") {
		clearAll();
		updateDisplay();
	}
});

updateDisplay();
