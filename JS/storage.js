// ===== Gestión de LocalStorage =====

// Usuarios
const getUsers = () => JSON.parse(localStorage.getItem("usuariosDeliBook") || "[]");
const saveUsers = (list) => localStorage.setItem("usuariosDeliBook", JSON.stringify(list));

// Sesión (formato: { isLogged: true, username: "ejemplo" })
const getSession = () => JSON.parse(localStorage.getItem("sesionDeliBook") || "null");
const setSession = (user) => {
    const session = { isLogged: true, username: user.usuario };
    localStorage.setItem("sesionDeliBook", JSON.stringify(session));
};
const clearSession = () => localStorage.removeItem("sesionDeliBook");

// Inicializar usuarios pre-cargados si no existen
function initDefaultUsers() {
    const users = getUsers();
    if (users.length === 0) {
        const defaultUsers = [
            { nombre: "Tomás", apellido: "García", email: "tomas@mail.com", usuario: "tomas", pass: "123456" },
            { nombre: "María", apellido: "López", email: "maria@mail.com", usuario: "maria", pass: "password123" },
            { nombre: "Juan", apellido: "Pérez", email: "juan@mail.com", usuario: "juan", pass: "clave123" }
        ];
        saveUsers(defaultUsers);
    }
}

// Exportar funciones
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { getUsers, saveUsers, getSession, setSession, clearSession, initDefaultUsers };
}
