// ===== Funciones de Autenticación =====
// Nota: Este archivo depende de storage.js

// Validar formato de email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Buscar usuario por username o email
function findUser(identifier) {
    const users = getUsers();
    return users.find(u => u.usuario === identifier || u.email === identifier);
}

// Verificar si username o email ya existe
function userExists(username, email) {
    const users = getUsers();
    return users.some(u => u.usuario === username || u.email === email);
}

// Registrar nuevo usuario
function registerUser(nombre, apellido, email, usuario, pass) {
    // Validaciones
    if (!nombre || !apellido || !email || !usuario || !pass) {
        return { success: false, message: "Completá todos los campos." };
    }

    if (!isValidEmail(email)) {
        return { success: false, message: "El email no tiene un formato válido." };
    }

    if (pass.length < 6) {
        return { success: false, message: "La contraseña debe tener al menos 6 caracteres." };
    }

    if (userExists(usuario, email)) {
        return { success: false, message: "Ya existe un usuario con ese email o nombre de usuario." };
    }

    // Crear y guardar usuario
    const nuevo = { nombre, apellido, email, usuario, pass };
    const users = getUsers();
    users.push(nuevo);
    saveUsers(users);

    return { success: true, message: "Registrado con éxito. Ahora inicia sesión." };
}

// Iniciar sesión
function performLogin(identifier, pass) {
    if (!identifier || !pass) {
        return { success: false, message: "Completá usuario/email y contraseña." };
    }

    const user = findUser(identifier);
    if (!user) {
        return { success: false, message: "Usuario o email no encontrado." };
    }

    if (user.pass !== pass) {
        return { success: false, message: "Contraseña incorrecta." };
    }

    // Guardar sesión
    setSession(user);
    return { success: true, user };
}

// Obtener usuario actual desde sesión
function getCurrentUser() {
    const session = getSession();
    if (!session || !session.isLogged) {
        return null;
    }
    return findUser(session.username);
}

// Verificar si hay sesión activa
function isLoggedIn() {
    const session = getSession();
    return session && session.isLogged === true;
}
