const button = document.getElementById("calcular");
const resultado = document.getElementById("resultado");
const nomeInput = document.getElementById("name");
const alturaInput = document.getElementById("altura");
const pesoInput = document.getElementById("peso");

function classificarImc(imc) {
	if (imc < 18.5) {
		return "Abaixo do peso";
	}
	if (imc < 25) {
		return "Peso normal";
	}
	if (imc < 30) {
		return "Sobrepeso";
	}
	if (imc < 35) {
		return "Obesidade grau 1";
	}
	if (imc < 40) {
		return "Obesidade grau 2";
	}
	return "Obesidade grau 3";
}

function mostrarMensagem(texto, tipo) {
	resultado.textContent = texto;
	resultado.classList.remove("error", "success");
	if (tipo) {
		resultado.classList.add(tipo);
	}
}

function calcularImc() {
	const nome = nomeInput.value.trim();
	const altura = Number(alturaInput.value);
	const peso = Number(pesoInput.value);

	if (!nome || !altura || !peso || altura <= 0 || peso <= 0) {
		mostrarMensagem("Preencha nome, altura e peso corretamente.", "error");
		return;
	}

	const imc = peso / (altura * altura);
	const classificacao = classificarImc(imc);

	mostrarMensagem(`${nome}, seu IMC é ${imc.toFixed(2)} (${classificacao}).`, "success");
}

button.addEventListener("click", calcularImc);

window.addEventListener("keydown", (event) => {
	if (event.key === "Enter") {
		calcularImc();
	}
});