const db = require('./db')

const Cadastro = db.sequelize.define('mangas',{
	nome: {
		type: db.Sequelize.STRING
	},
	editora: {
		type: db.Sequelize.STRING
	}
})

//sync force apaga a tabela antiga e recria
//Cadastro.sync({force: true})

module.exports = Cadastro;