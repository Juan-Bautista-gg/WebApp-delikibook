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
 
