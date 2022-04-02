module.exports = (app) => {
	const menus = require('../controllers/menu.controller');
	const router = require('express').Router();

	router.get('/', menus.findAll);
	router.post('/', menus.create);
	router.get('/:id', menus.findOne);
	router.put('/:id', menus.update);
	router.delete('/:id', menus.delete);

	app.use('/api/menus', router);
};
