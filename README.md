# 👋 Bienvenido a Delilah Resto API Project 🌟

> Programa Intensivo

> Desarrollo Web Full Stack

> Proyecto Sprint 3: Creación de una REST API 

## ¿Qué es?
Es un proyecto que desarolla una Rest API para un sistema de pedido en línea que permite las operaciones propias del CRUD (Create, Read, Update, Delete) implementadas sobre una base de datos.  Este sistema permite entre otras: operaciones relacionadas con usuarios como creación de un perfil, actualización de información y otras, otorgándole la oportunidad de realizar pedidos en línea seleccionando los diferentes productos que puede encontrar en el menú, también le permite al usuario administrador actualizar la información de los usuarios, productos y los estados de las órdenes y muchas operaciones más.

### Configuración de la base de datos:
- Conexión a base de datos relacional con el motor mariadb a través de manejador de base de datos DBeaver
> Nota: Puedes elegir la herramienta de administración de bases de datos de tu preferencia e inicializar el servidor.
 Ten en cuenta lo siguiente:
 - Server Host: localhost
 - Database: DelilahResto
 - Username: Acamica
 - Password: Acamica123
 - dialect: mariadb

> Si deseas dentro de la carpeta api encontraras la carpeta database y a su vez una archivo llamada fillUserData.js en el cual encontraras la información de la tabla usuarios.
> En el archivo scripts.sql que se encuentra en la direccion atras mencionada, esta toda la información relacionada con las tablas para que a puedas ejecutarlas en un script en tu base de datos.

## Iniciando el proyecto:
Una vez hayas realizado lo pertinente para crear y configurar la base de datos, deberas dirigirte al editor de código de tú preferencia y realizar los siguientes pasos: 

### Configuración del Servidor:
- Puerto: 4000
- Descripción: Requieres hacer uso de la librería express para realizar la configuración del servidor.
> npm install express --save (esto dado que en el presente proyecto express se encuentra instalado en la lista de depedencias). 

### Instalación de Dependencias:
Utiliza npm install para realizar las instalación de las siguientes dependencias, se sugiere realizarlas de las siguiente forma:

##### Dependencias de Desarrollo (devDependencies):
- nodemon
##### Dependencias (dependencies):
- bcrypt
- dotenv
- jsonwebtoken 
- mariadb
- sequelize
- cors

### Inicialización:
nodemon app.js

### Configuración y parametrización de la base de datos:
Dado que este proyecto cuenta con la dependencia dotenv, en la carpeta API hallarás el archivo ".env" acá se encuentran los parámetros necesarios de serialización y en esta misma carpeta en el archivo "conexion.js" podrás encontrar las variables de conexión sequelize con la base de datos.

### Entendiendo el código:
##### app.js
> Este archivo dentro de la carpeta API, contiene todos los requerimientos y activaciones de las diferentes dependencias instaladas.

##### Controllers:
> Como lo puedes visualizar dentro de la carpeta API encontraras la carpeta controllers, en esta están los 3 controladores (users, products, order) en formato .js que contienen cada uno de los endpoints que se desarrollan en el código. 

##### Middleware:
> Con el fin de implementar y mejorar la seguridad del sistema al igual que implementar una mayor eficiencia del código acá encontraras los esquemas de seguridad y validación de parámetros y requisitos que exigen las diferentes rutas para su correcto funcionamiento. 

##### Routes:
> Dado que el sistema tiene implementado express router, en esta carpeta se encuentran definidas las rutas para cada uno de los controladores.

## Swagger
> En la carpeta api encontraras Delilah_Resto.yaml donde podras visualizar la documentación del presente sistema y si lo deseas puedes abrir un editor de swagger para que copies la informacion proporcionada y realices pruebas de los diferentes endpoints.

