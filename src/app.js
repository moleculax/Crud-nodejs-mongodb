//se agregaron los modulos:

const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');





//fin modulos agregados

const express = require('express');
const app = express();

// conectando la DB
mongoose.connect('mongodb://localhost/crud-mongo')
  .then(db => console.log('DB conectada'))
  .catch(err => console.log(err));

//importando routes
const indexRoutes = require('./route/index');


//configuracion
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views')); //para que reconozca la ruta de wiews
app.set('view engine', 'ejs'); //motor de plantillas


//middlewares 
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))



//routes
app.use('/',indexRoutes)

//Inicia el servidor
//app.listen(3000, () => {
app.listen(app.get('port'),() =>{
	//console.log('Server en port 3000');
	console.log(`server on port ${app.get('port')}`);

});