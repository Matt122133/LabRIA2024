# LabRIA2024  -  E-Commerce Web App

## Instalación
Es necesario tener **Node** version 18 o superior.<br>
**Yarn** instalado<br><br>
<u>Comandos para iniciar:</u>
- **yarn install**
- **yarn dev**

*Colocar URL en el navegador o hacer ctrl + click en la URL que se muestra en la terminal*


## Descripción
Este proyecto es una página web de comercio electrónico que permite a los usuarios explorar, comprar y gestionar productos. La aplicación incluye funciones de inicio de sesión, páginas de listado y detalles de productos, así como un carrito de compras. Utiliza la API pública [Fake Store API](https://fakestoreapi.com/docs) para obtener datos de productos.

## Integrantes del Proyecto
- Miquel Servián
- Mateo Tambasco
- Angelo Giroldi

## Funcionalidades
1. **Inicio de sesión:** Los usuarios pueden iniciar sesión para acceder a su cuenta y realizar compras.
2. **Página de lista de productos (PLP):** Los usuarios pueden navegar por una lista de productos disponibles.
3. **Página de detalles del producto (PDP):** Los usuarios pueden ver información detallada sobre un producto específico.
4. **Carrito de compras:** Los usuarios pueden agregar productos al carrito y completar la compra.

## Tecnologías Utilizadas
- REACT + VITE
- Consumo de API REST

## Mock pensado del diseño de la pagina

![BOCETO VIEWS](https://github.com/Matt122133/LabRIA2024/assets/92389514/a04c7430-fc43-48c4-9d63-181babefc358)

## Casos de usos pensados

### Registro de Usuario

Como usuario nuevo, quiero poder registrarme en la plataforma para poder realizar compras.

Criterios de Aceptación:

- El formulario de registro debe incluir campos para nombre, dirección de correo electrónico y contraseña.
- Se debe validar que la dirección de correo electrónico sea única en la base de datos.
- Después del registro exitoso, el usuario debe recibir un correo electrónico de confirmación.
_________________________________________________________________________________________________________________________
### Búsqueda de Productos

Como usuario, quiero poder buscar productos por nombre o categoría para encontrar lo que necesito.

Criterios de Aceptación:

- La página de búsqueda debe incluir un campo de búsqueda donde el usuario pueda ingresar términos de búsqueda.
-  Los resultados de la búsqueda deben mostrarse de forma clara y ordenada, con imágenes y nombres de productos visibles.
- Debe ser posible filtrar los resultados por categoría para refinar la búsqueda.
_________________________________________________________________________________________________________________________
### Visualización de Detalles del Producto

Como usuario, quiero poder ver detalles específicos de un producto para tomar una decisión de compra informada.

Criterios de Aceptación:

- Al hacer clic en un producto en la lista de resultados de búsqueda o en el catálogo, se debe cargar una página con detalles específicos de ese producto.
- Los detalles del producto deben incluir información como descripción, precio, imagen etc.
- Deben mostrarse botones de acción para agregar el producto al carrito de compras o volver al catálogo.
_________________________________________________________________________________________________________________________
### Gestión del Carrito de Compras

Como usuario, quiero poder agregar productos al carrito de compras y gestionar mi selección antes de finalizar la compra.

Criterios de Aceptación:

- Debe haber un icono visible que represente el carrito de compras en todas las páginas.
- Los productos agregados al carrito deben mostrarse en una lista clara y detallada, con la opción de modificar la cantidad o eliminar productos.
- Debe ser posible vaciar completamente el carrito o continuar con el proceso de pago.
_________________________________________________________________________________________________________________________
