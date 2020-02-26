const mysql = require('mysql')

const mysqlConnection = mysql.createConnection({
	host: '162.241.60.179',
	user: 'juandaga_api',
	password: 'deltec_api',
	database: 'juandaga_deltec',
	multipleStatements: true
})

mysqlConnection.connect(function(err) {
	if (err) {
		console.error(err)
		return
	} else {
		console.log('db is connected')
	}
})

module.exports = mysqlConnection
