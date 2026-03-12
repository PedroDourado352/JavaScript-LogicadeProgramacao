const userForm = document.getElementById("userForm");
const userIdInput = document.getElementById("userId");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const userTableBody = document.getElementById("userTableBody");
const submitButton = document.getElementById("submitButton");
const cancelEditButton = document.getElementById("cancelEditButton");

const STORAGE_KEY = "crud_users";

function getUsers() {
	const users = localStorage.getItem(STORAGE_KEY);
	return users ? JSON.parse(users) : [];
}

function saveUsers(users) {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}

function resetForm() {
	userIdInput.value = "";
	userForm.reset();
	submitButton.textContent = "Adicionar";
	cancelEditButton.classList.add("hidden");
}

function renderUsers() {
	const users = getUsers();
	userTableBody.innerHTML = "";

	if (users.length === 0) {
		userTableBody.innerHTML = "<tr><td colspan='3'>Nenhum usuário cadastrado.</td></tr>";
		return;
	}

	users.forEach((user) => {
		const row = document.createElement("tr");

		row.innerHTML = `
			<td>${user.name}</td>
			<td>${user.email}</td>
			<td class="actions-cell">
				<button type="button" class="edit" data-action="edit" data-id="${user.id}">Editar</button>
				<button type="button" class="danger" data-action="delete" data-id="${user.id}">Excluir</button>
			</td>
		`;

		userTableBody.appendChild(row);
	});
}

function createUser(name, email) {
	const users = getUsers();

	users.push({
		id: Date.now().toString(),
		name,
		email
	});

	saveUsers(users);
}

function updateUser(id, name, email) {
	const users = getUsers().map((user) => {
		if (user.id === id) {
			return { ...user, name, email };
		}
		return user;
	});

	saveUsers(users);
}

function deleteUser(id) {
	const users = getUsers().filter((user) => user.id !== id);
	saveUsers(users);
}

function fillFormForEdit(id) {
	const users = getUsers();
	const selectedUser = users.find((user) => user.id === id);

	if (!selectedUser) {
		return;
	}

	userIdInput.value = selectedUser.id;
	nameInput.value = selectedUser.name;
	emailInput.value = selectedUser.email;
	submitButton.textContent = "Salvar";
	cancelEditButton.classList.remove("hidden");
}

userForm.addEventListener("submit", (event) => {
	event.preventDefault();

	const name = nameInput.value.trim();
	const email = emailInput.value.trim();
	const editingId = userIdInput.value;

	if (!name || !email) {
		return;
	}

	if (editingId) {
		updateUser(editingId, name, email);
	} else {
		createUser(name, email);
	}

	resetForm();
	renderUsers();
});

cancelEditButton.addEventListener("click", resetForm);

userTableBody.addEventListener("click", (event) => {
	const button = event.target.closest("button");
	if (!button) {
		return;
	}

	const action = button.dataset.action;
	const id = button.dataset.id;

	if (action === "edit") {
		fillFormForEdit(id);
	}

	if (action === "delete") {
		deleteUser(id);
		if (userIdInput.value === id) {
			resetForm();
		}
		renderUsers();
	}
});

renderUsers();
