const db = require('../models');
const Menu = db.menus;

exports.findAll = (req, res) => {
	Menu.find()
		.then((result) => {
			res.send(result);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || 'Error while retrieving menus.',
			});
		});
};

exports.create = (req, res) => {
	const menu = new Menu({
		name: req.body.name,
		type: req.body.type,
		index: req.body.index,
		price: req.body.price,
		isAvailable: req.body.isAvailable,
		isNewMenu: req.body.isNewMenu,
		isBest: req.body.isBest,
		createdAt: new Date(),
	});

	menu
		.save(menu)
		.then((result) => {
			res.send(result);
		})
		.catch((err) => {
			res.status(409).send({
				message: err.message || 'Error while creating menu.',
			});
		});
};

exports.findOne = (req, res) => {
	const id = req.params.id;
	Menu.findById(id)
		.then((result) => {
			res.send(result);
		})
		.catch((err) => {
			res.status(409).send({
				message: err.message || 'Error while retrieving menu.',
			});
		});
};

exports.update = (req, res) => {
	const id = req.params.id;

	Menu.findByIdAndUpdate(id, req.body)
		.then((result) => {
			if (!result) {
				res.status(404).send({
					message: 'Menu is not found',
				});
			}
			res.send({
				message: 'Menu was updated successfully',
			});
		})
		.catch((err) => {
			res.status(409).send({
				message: err.message || 'Error while updating menu.',
			});
		});
};

exports.delete = (req, res) => {
	const id = req.params.id;

	Menu.findByIdAndRemove(id)
		.then((result) => {
			if (!result) {
				res.status(404).send({
					message: 'Menu is not found',
				});
			}
			res.send({
				message: 'Menu was deleted successfully',
			});
		})
		.catch((err) => {
			res.status(409).send({
				message: err.message || 'Error while deleting menu.',
			});
		});
};
