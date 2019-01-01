<p align="center"><a href="http://eureka.com.ve/"><img src="https://1.bp.blogspot.com/-Qtv4TDe3LcI/Wykpyuf9k2I/AAAAAAAADQs/V0-HwUHc0XcxYGcfPnB2ZcdOGCjsKt1hACLcBGAs/s320/Bdeureka-big.png"></a><br>http://www.eureka.com.ve/</p>



# Script 
<b>Ejemplos funcionales.</b>
Visitenos en:<i> http://www.moleculax.com.ve</i>

<h1># Crud-nodejs-mongodb-Express</h1>

1.- Definir el proyecto:
#npm init --yes
2.- Intalar modulos: 
#npm install express mongoose  ejs  morgan
3.- Instalar:
#npm i nodemon -D
4.- Se crea carpeta src para colocar todo el codigo del proyecto
5.- Creamos archivo app.js el cual es el servidor
6.- Para ejecutar el servido:
#node src/app.js
7.- Editamos package.json
eliminamos: "test": "echo \"Error: no test specified\" && exit 1"
Se agregan las lineas:
 	"start": "node src/app.js",
  	"dev": "nodemon src/app.js" 
8.- se corre el servidor con
#npm run dev
9.- Se crea la estructura dentro de src/
route, views, models

10.- Terminamos de configurar el servidor en app.js

11.- Detro de route creamos index.js
