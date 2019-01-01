const express = require('express');
const router = express.Router();
const Task = require('../models/task');

router.get('/', async (req,res) => {
	//
	//Para mostrar datos en la pantalla
	const tasks = await Task.find();
	console.log(tasks);
	res.render('index',{
		tasks
	});

});

router.post('/add',async (req,res)=>{
	//console.log(new Task(req.body)); //Muestra en consola pero no almacena
	const task = new Task(req.body); //define datos 
	await task.save(); //salva datos
	//res.send('recibido');
	res.redirect('/'); //redirecciona a la raiz
});

module.exports = router;