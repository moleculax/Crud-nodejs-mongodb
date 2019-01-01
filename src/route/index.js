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

router.get('/done/:id',async (req,res)=>{
	const {id} = req.params;
	const task = await Task.findById(id);
	task.status = !task.status;
	await task.save();
	res.redirect('/');
});

router.get('/edit/:id', async (req, res, next) => {
  const task = await Task.findById(req.params.id);
  console.log(task)
  res.render('edit', { task });
});

router.post('/edit/:id', async (req, res, next) => {
  const { id } = req.params;
  await Task.update({_id: id}, req.body);
  res.redirect('/');
});

router.get('/delete/:id',async (req,res) => {
	const {id} = req.params;
	await Task.remove({_id: id});
	res.redirect('/');
});

module.exports = router;