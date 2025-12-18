// ===== Aplicación Principal DeliBook =====

// ================= SELECTORES =================
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const loginMsg = document.getElementById("loginMsg");
const registerMsg = document.getElementById("registerMsg");
const workspaceUserName = document.getElementById("workspaceUserName");
const confirmLogout = document.getElementById("confirmLogout");
const logoutBtn = document.querySelector(".logout-btn");

// ================= UI =================
function renderUserInfo(user) {
    if (!user) {
        workspaceUserName.textContent = "";
        return;
    }
    workspaceUserName.textContent = user.nombre;
}

function showMessage(element, message, type = "error") {
    if (!element) return;
    element.textContent = message;
    element.className = `msg ${type}`;
}

function clearMessage(element) {
    if (element) {
        element.textContent = "";
        element.className = "msg";
    }
}

// ================= INIT APP =================
initDefaultUsers();
initNavigation();

// ================= REGISTRO =================
if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        clearMessage(registerMsg);

        const nombre = document.getElementById("regNombre").value.trim();
        const apellido = document.getElementById("regApellido").value.trim();
        const email = document.getElementById("regEmail").value.trim();
        const usuario = document.getElementById("regUsuario").value.trim();
        const pass = document.getElementById("regPass").value.trim();

        const result = registerUser(nombre, apellido, email, usuario, pass);

        if (result.success) {
            showMessage(registerMsg, result.message, "success");
            registerForm.reset();
            setTimeout(() => navigateTo("login"), 1500);
        } else {
            showMessage(registerMsg, result.message);
        }
    });
}

// ================= LOGIN =================
if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        clearMessage(loginMsg);

        const identifier = document.getElementById("loginUser").value.trim();
        const loginPassValue = document.getElementById("loginPass").value.trim();

        const result = performLogin(identifier, loginPassValue);

        if (result.success) {
            renderUserInfo(result.user);
            loginForm.reset();
            navigateTo("workspace");
            initTasks();
        } else {
            showMessage(loginMsg, result.message);
        }
    });
}

// ================= LOGOUT =================
function handleLogout() {
    navigateTo("logout");
}

if (logoutBtn) {
    logoutBtn.addEventListener("click", handleLogout);
}

function confirmLogoutAction() {
    clearSession();
    renderUserInfo(null);
    navigateTo("home");
}

if (confirmLogout) {
    confirmLogout.addEventListener("click", confirmLogoutAction);
}

// ================= ESTADO INICIAL =================
function init() {
    const user = getCurrentUser();
    renderUserInfo(user);

    if (user) {
        navigateTo("workspace");
        initTasks();
    } else {
        navigateTo("home");
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}

// =================================================
// =============== LISTA DE TAREAS =================
// =================================================

let tasks = [];
let currentUserKey = null;

function initTasks() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    if (!taskInput || !addTaskBtn || !taskList) return;

    const user = getCurrentUser();
    if (!user) return;

    currentUserKey = `tasks_${user.usuario}`;
    tasks = JSON.parse(localStorage.getItem(currentUserKey)) || [];

    renderTasks(taskList);

    addTaskBtn.onclick = () => {
        const text = taskInput.value.trim();
        if (text === "") return;

        tasks.push({ text, completed: false });
        saveTasks();
        renderTasks(taskList);
        taskInput.value = "";
    };
}

function renderTasks(taskList) {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task.text;

        if (task.completed) {
            li.style.textDecoration = "line-through";
        }

        li.addEventListener("click", () => {
            tasks[index].completed = !tasks[index].completed;
            saveTasks();
            renderTasks(taskList);
        });

        const btn = document.createElement("button");
        btn.textContent = "X";

        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            tasks.splice(index, 1);
            saveTasks();
            renderTasks(taskList);
        });

        li.appendChild(btn);
        taskList.appendChild(li);
    });
}

function saveTasks() {
    if (!currentUserKey) return;
    localStorage.setItem(currentUserKey, JSON.stringify(tasks));
}

