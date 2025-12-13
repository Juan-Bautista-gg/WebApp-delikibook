// ===== Aplicación Principal DeliBook =====

// Selectores
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const loginMsg = document.getElementById("loginMsg");
const registerMsg = document.getElementById("registerMsg");
const workspaceUserName = document.getElementById("workspaceUserName");
const confirmLogout = document.getElementById("confirmLogout");
const workspaceContent = document.getElementById("workspaceContent");

// ===== Funciones de UI =====
// Renderizar información del usuario
function renderUserInfo(user) {
    if (!user) {
        if (workspaceUserName) workspaceUserName.textContent = "";
        return;
    }

    if (workspaceUserName) {
        workspaceUserName.textContent = user.nombre;
    }
}

// Mostrar mensaje en un contenedor
function showMessage(element, message, type = "error") {
    if (!element) return;
    element.textContent = message;
    element.className = `msg ${type}`;
}

// Limpiar mensaje
function clearMessage(element) {
    if (element) {
        element.textContent = "";
        element.className = "msg";
    }
}

// ===== Inicializar usuarios por defecto =====
initDefaultUsers();

// ===== Inicializar navegación =====
initNavigation();

// ===== Registro de usuario =====
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
            setTimeout(() => {
                navigateTo("login");
            }, 1500);
        } else {
            showMessage(registerMsg, result.message, "error");
        }
    });
}

// ===== Login =====
if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        clearMessage(loginMsg);

        const identifier = document.getElementById("loginUser").value.trim();
        const loginPass = document.getElementById("loginPass").value.trim();
        
        const result = performLogin(identifier, loginPass);
        
        if (result.success) {
            renderUserInfo(result.user);
            loginForm.reset();
            navigateTo("workspace");
        } else {
            showMessage(loginMsg, result.message, "error");
        }
    });
}

// ===== Logout =====
function handleLogout() {
    // Solo navegar a la pantalla de confirmación
    navigateTo("logout");
}

// Confirmar logout (cuando presiona SI)
function confirmLogoutAction() {
    clearSession();
    renderUserInfo(null);
    navigateTo("home");
}

// Inicializar botón de confirmación de logout
if (confirmLogout) {
    confirmLogout.addEventListener("click", confirmLogoutAction);
}

// ===== Estado inicial =====
function init() {
    const user = getCurrentUser();
    renderUserInfo(user);
    
    // Verificar si hay sesión activa
    if (user) {
        navigateTo("workspace");
    } else {
        navigateTo("home"); // Mostrar home público primero
    }
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
