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

### Lógica del sistema:

storage.js (La Memoria): Es el encargado de guardar y leer datos del navegador. Gestiona el array de usuarios y la sesión activa en el localStorage. Nadie escribe datos directamente sin pasar por acá.

auth.js (La Seguridad): Contiene las reglas de negocio. Verifica si las contraseñas son correctas, valida que los emails tengan formato válido y controla que no se registren usuarios duplicados.

navigation.js (El Router): Maneja el cambio de pantallas sin recargar la página (efecto SPA). También actúa como "seguridad", impidiendo que usuarios no logueados entren a secciones privadas.

main.js (El Controlador): Conecta todo el sistema. Escucha los clicks del usuario (botones de login, registro, notas) y le ordena a los otros archivos qué hacer. También se encarga de mostrar la información en pantalla.
