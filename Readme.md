# DeliBook - La Esencia de lo Casero

SPA (Single Page Application) con sistema de autenticación completo, desarrollada según las especificaciones técnicas del proyecto.

## Características

- Sistema de registro y login completo
- Validaciones de formularios (email, duplicados, contraseña)
- Control de acceso a secciones privadas
- Diseño completamente responsivo
- Código modular y organizado (HTML / CSS / JS separados)
- LocalStorage estructurado y persistente
- Usuarios pre-cargados para pruebas
- SPA (Single Page Application) sin recarga de página
- Gestión de estado de sesión
- Lista de tareas personalizada por usuario
- Persistencia de tareas por usuario activo
- Limpieza automática de tareas al cambiar de usuario

## Pantallas Implementadas

### 1. Home / Bienvenida (Pública)
- Logo y nombre de la aplicación
- Botones de acceso: "Iniciar Sesión" y "Registrarse"
- Navegación SPA mediante botones
- Si hay sesión activa, redirige automáticamente al workspace

### 2. Registro (Pública)
- Formulario completo con validaciones:
  - Nombre y apellido obligatorios
  - Email con validación de formato
  - Usuario con verificación de duplicados
  - Contraseña con mínimo de 6 caracteres
- Mensajes de error y éxito visibles
- Redirección automática al login al registrarse

### 3. Login (Pública)
- Acceso mediante usuario o email
- Validación de credenciales
- Mensajes de error claros
- Al iniciar sesión:
  - Se guarda la sesión en LocalStorage
  - Se carga el workspace del usuario
  - Se inicializa la lista de tareas personal

### 4. Workspace / Dashboard (Privada)
- Acceso restringido a usuarios logueados
- Muestra el nombre del usuario activo
- Botón visible de cerrar sesión
- Lista de tareas (To-Do List):
  - Agregar tareas (no permite tareas vacías)
  - Marcar tareas como completadas (tachado)
  - Eliminar tareas individualmente
  - Persistencia automática en LocalStorage
  - Las tareas se guardan por usuario
  - Cada usuario tiene su propia lista independiente

### 5. Logout
- Pantalla de confirmación de cierre de sesión
- Limpia completamente la sesión activa
- No elimina usuarios registrados
- Al cerrar sesión:
  - Se mantiene la información de tareas del usuario
  - Al iniciar sesión con otro usuario se cargan sus propias tareas
- Redirección automática al Home público
 
**Usuarios:**
```javascript
localStorage.getItem("usuariosDeliBook")
// Array de objetos: [{ nombre, apellido, email, usuario, pass }, ...]
```

**Sesión:**
```javascript
localStorage.getItem("sesionDeliBook")
// Objeto: { isLogged: true, username: "ejemplo" }
```

### Usuarios Pre-cargados

El sistema incluye 3 usuarios de prueba:
- **Usuario:** tomas | **Email:** tomas@mail.com | **Contraseña:** 123456
- **Usuario:** maria | **Email:** maria@mail.com | **Contraseña:** password123
- **Usuario:** juan | **Email:** juan@mail.com | **Contraseña:** clave123

##  Diseño

- Diseño moderno y limpio
- Paleta de colores azul suave
- Completamente responsivo (móvil y desktop)
- Animaciones suaves
- Tipografía legible
- Botones accesibles y bien dimensionados



##  Responsive Design

La aplicación se adapta perfectamente a:
-  Móviles (320px+)
-  Tablets (768px+)
-  Desktop (1024px+)
