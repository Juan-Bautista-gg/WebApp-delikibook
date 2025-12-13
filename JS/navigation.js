// ===== Navegación entre pantallas =====
// Nota: Este archivo depende de auth.js

let screens, navButtons;

function initNavigationElements() {
    screens = document.querySelectorAll("[data-screen]");
    navButtons = document.querySelectorAll("[data-go]");
}

// Mostrar una pantalla específica
function showScreen(name) {
    if (!screens) initNavigationElements();
    screens.forEach((section) => {
        section.classList.toggle("active", section.dataset.screen === name);
    });
}

// Inicializar navegación
function initNavigation() {
    initNavigationElements();
    if (!navButtons) return;
    
    navButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const target = btn.dataset.go;
            if (target === "logout") {
                if (typeof handleLogout === 'function') {
                    handleLogout();
                }
                return;
            }
            navigateTo(target);
        });
    });
}

// Control de acceso a secciones privadas
function checkAccess(screenName) {
    const privateScreens = ["workspace"];
    
    // El home puede ser público o privado según el estado
    if (screenName === "workspace") {
        if (!isLoggedIn()) {
            showScreen("login");
            return false;
        }
    }
    
    // Si intentan acceder a home sin sesión, mostrar home público
    if (screenName === "home" && !isLoggedIn()) {
        return true; // Permitir acceso al home público
    }
    
    return true;
}

// Navegar con control de acceso
function navigateTo(screenName) {
    if (checkAccess(screenName)) {
        showScreen(screenName);
    }
}
