# DeliBook - La Esencia de lo Casero

SPA (Single Page Application) con sistema de autenticación completo, desarrollada según las especificaciones técnicas del proyecto.

## Características

-  Sistema de registro y login completo
-  Validaciones de formularios (email, duplicados, contraseña)
-  Control de acceso a secciones privadas
-  Diseño completamente responsivo
-  Código modular y organizado
-  LocalStorage estructurado
-  Usuarios pre-cargados para pruebas
##  Pantallas Implementadas

### 1. Home / Bienvenida (Pública)
- Logo y nombre de la aplicación
- Botones de acceso: "Iniciar Sesión" y "Registrarse"
- Cuando hay sesión activa, muestra saludo personalizado

### 2. Registro (Pública)
- Formulario completo con validaciones:
  - Nombre y apellido
  - Email (validación de formato)
  - Usuario (verificación de duplicados)
  - Contraseña (mínimo 6 caracteres)

### 3. Login (Pública)
- Formulario de usuario/email y contraseña
- Validación de credenciales
- Mensajes de error claros

### 4. Espacio de Trabajo (Privada)
- Requiere sesión activa
- Muestra información del usuario
- Botón de logout visible
- Lista de notas rápidas

### 5. Logout
- Mensaje personalizado con nombre del usuario
- Limpia la sesión del localStorage
- Redirige automáticamente al inicio
 
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
