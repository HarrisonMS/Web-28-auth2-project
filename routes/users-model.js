const db = require('../data/dbConfig');

module.exports = {
	find,
	findBy,
	add,
	findById,
};

function find() {
	return db('users').select('id', 'username', 'password'); //put password to see how it appears
}

function findBy(filter) {
	return db('users').select('id', 'username', 'password').where(filter);
}

function add(user) {
	return db('users').insert(user, 'id').then((ids) => {
		const [ id ] = ids;
		return findBy({ id });
	});
}

function findById(id) {
	return db('users').select('id', 'username').where({ id }).first();
}