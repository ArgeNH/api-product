# API RESTful 
### Taller Colaborativo - Electiva II

##### Integrantes de grupo
- [Arge Darley Niño Vianchá](https://github.com/ArgeNH) - 201722355
- [Diego Armando Higuera Blanco](https://github.com/D13G05) - 201722366
- [Néstor Iván Sanabria Vargas](https://github.com/sanabrianestor20) - 201210805
---
#### Instrucciones al clonar el API
Instalar las depencias necesarias 👇🏻
```bash
npm install
```
Ejecutar la API de forma local 👇🏻
```bash
npm start
```
o en modo desarrollo 👇🏻
```bash
npm run dev
```
El **puerto** por el que corre el API es el `5000`

---
### Rutas 🛣️
#### Product 🥃🍊🍦🍔
- `/api/product/` Tipo `GET` => Muestra todos los productos disponibles.
- `/api/product/` Tipo `POST` => Permite agregar un nuevo producto. Ejemplo 👇🏻
```json
{
    "description": "Jack Daniels",
    "value": 131650,
    "stock": 22,
    "typeProduct": "LICORES",
    "dateExpired": "2023-12-31"
}
```
- `/api/product/:id` Tipo `GET` => Muestra un solo producto por el `id` generado en mongo.
- `/api/product/:id` Tipo `PUT` => Permite actulizar los campos de un producto.
-  `/api/product/:id` Tipo `DELETE` => Permite eliminar un producto de la base de datos.
- `/api/product/expired/:id` Tipo `GET` => Indica si el producto por el `id` expiro o aun no.
- `/api/product/iva/:id` Tipo `GET` => Indica el iva del producto por el `id`. 

#### Detail 📑
- `/api/detail/` Tipo `GET` => Muestra todos los detalles que hay en la base de datos.
- `/api/detail/new` Tipo `POST` => Permite agregra un nuevo detalle. Ejemplo 👇🏻
```json
{
    "cant": 5,
    "product": "id del producto existente"
}
```
- `/api/detail/:id` Tipo `GET` => Muestra un solo detalle por el `id`.
- `/api/detail/:id` Tipo `PUT` => Permite actulizar un detalle por el `id`.
- `/api/detail/` Tipo `DELETE` => Permite eliminar un detalle por el `id`.
- `/api/detail/subtotal/:id` Tipo `GET` => Calcula el subtotal segun la cantidad del producto, mediante el `id` del detalle.

#### Bill 💰
- `/api/bill/` Tipo `GET` => Muestra todas las facturas disponibles en la base de datos.
- `/api/bill/:id` Tipo `GET` => Muestra la factura por el `id` especifico.
- `/api/bill/` Tipo `POST` => Permite crear una nueva factura. Ejemplo 👇🏻
```json
{
    "dateBill": "2021-12-15",
    "typePay": true
}
```
- `/api/bill/:id` Tipo `PUT` => Permite actulizar una factura por el `id`.
- `/api/bill/:id` Tipo `DELETE` => Permite eliminar una factura por el `id`.
- `/api/bill/total/:id` Tipo `GET` => Permite ver el valor total a pagar de la factura.
- `/api/bill/buy/:id` Tipo `POST` => Esta ruta permite realizar una compra. El en parametro de la ruta se especifica el `id` del producto a comprar y en el body se le envia la cantidad del producto. Esto resta del stock del producto y actuliza, crea un nuevo detail con la cantidad y el id del producto comprado y por ultimo en bill se almacena un array con id de detail.
Ejemplo 👇🏻
```http
en la ruta va el parametro id del producto a comprar
http://localhost:5000/api/bill/sale/61b8d9a16eacb15ab40c3361
```
en el body
```json

{
    "cant": 5
}
```
--- 
