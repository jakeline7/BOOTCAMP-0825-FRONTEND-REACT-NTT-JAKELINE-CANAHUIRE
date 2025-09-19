# 🛒 Proyecto de Tienda con React + TypeScript + Vite

Este proyecto es una aplicación web de tienda básica que consume la API de [DummyJSON](https://dummyjson.com/).  
Incluye un sistema de **login**, **listado de productos con paginación** y un **detalle de producto (resumen)**.

---

##  Funcionalidades

 **Login con validaciones**
- Usuario y contraseña obligatorios.
- El botón de iniciar sesión se habilita solo si los campos son válidos.
- Validación de usuario y contraseña mínima de 4 caracteres.
- Si el login es exitoso, se guarda la sesión en `localStorage` y se redirige al **Home**.
- Si las credenciales son incorrectas, muestra un mensaje de error en el formulario.

**Home (Productos)**
- Muestra un buscador con validación mínima de **3 caracteres**.
- Si no hay coincidencias, aparece el mensaje *“No se encontró el producto”*.
- Los productos se listan en **cards** con: título, categoría, precio y botón “Agregar”.
- Incluye **paginación**, mostrando 8 productos por página.

**Resumen (Detalle del producto)**
- Página con la información del producto seleccionado (imagen, título y descripción).

 **Header dinámico**
- Incluye icono de carrito.
- Opción para cerrar sesión (limpia el `localStorage` y redirige a login).
- El logo redirige a Home de listado de productos






