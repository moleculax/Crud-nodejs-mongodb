<p align="center"><a href="http://eureka.com.ve/"><img src="https://1.bp.blogspot.com/-Qtv4TDe3LcI/Wykpyuf9k2I/AAAAAAAADQs/V0-HwUHc0XcxYGcfPnB2ZcdOGCjsKt1hACLcBGAs/s320/Bdeureka-big.png"></a><br>http://www.moleculax.com/</p>



# Script 
<b>Ejemplos funcionales.</b>
Visitenos en:<i> http://www.moleculax.com</i>

<h1># Crud-nodejs-mongodb-Express</h1>

1.- Definir el proyecto:<br>
#npm init --yes<br>
2.- Intalar modulos: <br>
#npm install express mongoose  ejs  morgan<br>
3.- Instalar:<br>
#npm i nodemon -D<br>
4.- Se crea carpeta src para colocar todo el codigo del proyecto<br>
5.- Creamos archivo app.js el cual es el servidor<br>
6.- Para ejecutar el servido:<br>
#node src/app.js<br>
7.- Editamos package.json<br>
eliminamos: "test": "echo \"Error: no test specified\" && exit 1"<br>
Se agregan las lineas:<br>
 	"start": "node src/app.js",<br>
  	"dev": "nodemon src/app.js" <br>
8.- se corre el servidor con<br>
#npm run dev<br>
9.- Se crea la estructura dentro de src/<br>
route, views, models<br>

10.- Terminamos de configurar el servidor en app.js<br>

11.- Detro de route creamos index.js<br>

12.- 
