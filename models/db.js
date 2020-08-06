const Sequelize = require("sequelize")

const sequelize = new Sequelize('mangaka', 'brekzmiro', 'a2468097531',{
	host: 'mysql669.umbler.com',
	dialect: 'mysql'

})

module.exports = {
	Sequelize: Sequelize,
	sequelize: sequelize
}