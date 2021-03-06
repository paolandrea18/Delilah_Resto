# 馃憢 Bienvenido a Delilah Resto API Project 馃専

> Programa Intensivo

> Desarrollo Web Full Stack

> Proyecto Sprint 3: Creaci贸n de una REST API 

## 驴Qu茅 es?
Es un proyecto que desarolla una Rest API para un sistema de pedido en l铆nea que permite las operaciones propias del CRUD (Create, Read, Update, Delete) implementadas sobre una base de datos.  Este sistema permite entre otras: operaciones relacionadas con usuarios como creaci贸n de un perfil, actualizaci贸n de informaci贸n y otras, otorg谩ndole la oportunidad de realizar pedidos en l铆nea seleccionando los diferentes productos que puede encontrar en el men煤, tambi茅n le permite al usuario administrador actualizar la informaci贸n de los usuarios, productos y los estados de las 贸rdenes y muchas operaciones m谩s.

### Configuraci贸n de la base de datos:
- Conexi贸n a base de datos relacional con el motor mariadb a trav茅s de manejador de base de datos DBeaver
> Nota: Puedes elegir la herramienta de administraci贸n de bases de datos de tu preferencia e inicializar el servidor.
 Ten en cuenta lo siguiente:
 - Server Host: localhost
 - Database: DelilahResto
 - Username: Acamica
 - Password: Acamica123
 - dialect: mariadb

> Si deseas dentro de la carpeta api encontraras la carpeta database y a su vez una archivo llamada fillUserData.js en el cual encontraras la informaci贸n de la tabla usuarios.
> En el archivo scripts.sql que se encuentra en la direccion atras mencionada, esta toda la informaci贸n relacionada con las tablas para que a puedas ejecutarlas en un script en tu base de datos.

## Iniciando el proyecto:
Una vez hayas realizado lo pertinente para crear y configurar la base de datos, deberas dirigirte al editor de c贸digo de t煤 preferencia y realizar los siguientes pasos: 

### Configuraci贸n del Servidor:
- Puerto: 4000
- Descripci贸n: Requieres hacer uso de la librer铆a express para realizar la configuraci贸n del servidor.
> npm install express --save (esto dado que en el presente proyecto express se encuentra instalado en la lista de depedencias). 

### Instalaci贸n de Dependencias:
Utiliza npm install para realizar las instalaci贸n de las siguientes dependencias, se sugiere realizarlas de las siguiente forma:

##### Dependencias de Desarrollo (devDependencies):
- nodemon
##### Dependencias (dependencies):
- bcrypt
- dotenv
- jsonwebtoken 
- mariadb
- sequelize
- cors

### Inicializaci贸n:
nodemon app.js

### Configuraci贸n y parametrizaci贸n de la base de datos:
Dado que este proyecto cuenta con la dependencia dotenv, en la carpeta API hallar谩s el archivo ".env" ac谩 se encuentran los par谩metros necesarios de serializaci贸n y en esta misma carpeta en el archivo "conexion.js" podr谩s encontrar las variables de conexi贸n sequelize con la base de datos.

### Entendiendo el c贸digo:
##### app.js
> Este archivo dentro de la carpeta API, contiene todos los requerimientos y activaciones de las diferentes dependencias instaladas.

##### Controllers:
> Como lo puedes visualizar dentro de la carpeta API encontraras la carpeta controllers, en esta est谩n los 3 controladores (users, products, order) en formato .js que contienen cada uno de los endpoints que se desarrollan en el c贸digo. 

##### Middleware:
> Con el fin de implementar y mejorar la seguridad del sistema al igual que implementar una mayor eficiencia del c贸digo ac谩 encontraras los esquemas de seguridad y validaci贸n de par谩metros y requisitos que exigen las diferentes rutas para su correcto funcionamiento. 

##### Routes:
> Dado que el sistema tiene implementado express router, en esta carpeta se encuentran definidas las rutas para cada uno de los controladores.

## Swagger
> En la carpeta api encontrar谩s Delilah_Resto.yaml donde podr谩s visualizar la documentaci贸n del presente sistema y si lo deseas puedes abrir un editor de swagger para que copies la informaci贸n proporcionada y realices pruebas de los diferentes endpoints.

## LICENCIA
> Copyright 漏 2021 Paola Andrea Cadena Joya
> 
> Este proyecto tiene la siguiente licencia: [MIT]
