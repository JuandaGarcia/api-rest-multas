const express = require('express')
const router = express.Router()

const mysqlConnection = require('../database.js')

// GET all personas
router.get('/personas', (req, res) => {
	mysqlConnection.query('SELECT * FROM personas', (err, rows, fields) => {
		if (!err) {
			res.json(rows)
		} else {
			console.log(err)
		}
	})
})

// GET all multas
router.get('/multas', (req, res) => {
	mysqlConnection.query('SELECT * FROM multas', (err, rows, fields) => {
		if (!err) {
			res.json(rows)
		} else {
			console.log(err)
		}
	})
})

// GET all vehiculos
router.get('/vehiculos', (req, res) => {
	mysqlConnection.query('SELECT * FROM vehiculos', (err, rows, fields) => {
		if (!err) {
			res.json(rows)
		} else {
			console.log(err)
		}
	})
})

// GET An personas
router.get('/personas/:id', (req, res) => {
	const { id } = req.params
	mysqlConnection.query(
		'SELECT * FROM personas WHERE identificacion = ?',
		[id],
		(err, rows, fields) => {
			if (!err) {
				res.json(rows[0])
			} else {
				console.log(err)
			}
		}
	)
})
// GET An multa
router.get('/multas/:id', (req, res) => {
	const { id } = req.params
	mysqlConnection.query(
		'SELECT * FROM multas WHERE codigo = ?',
		[id],
		(err, rows, fields) => {
			if (!err) {
				res.json(rows[0])
			} else {
				console.log(err)
			}
		}
	)
})
// GET An vehiculo
router.get('/vehiculos/:id', (req, res) => {
	const { id } = req.params
	mysqlConnection.query(
		'SELECT * FROM vehiculos WHERE placa = ?',
		[id],
		(err, rows, fields) => {
			if (!err) {
				res.json(rows[0])
			} else {
				console.log(err)
			}
		}
	)
})

// DELETE An personas
router.delete('/personas/:id', (req, res) => {
	const { id } = req.params
	mysqlConnection.query(
		'DELETE FROM personas WHERE identificacion = ?',
		[id],
		(err, rows, fields) => {
			if (!err) {
				res.json({ status: 'persona Deleted' })
			} else {
				console.log(err)
			}
		}
	)
})
// DELETE An multa
router.delete('/multas/:id', (req, res) => {
	const { id } = req.params
	mysqlConnection.query(
		'DELETE FROM multas WHERE codigo = ?',
		[id],
		(err, rows, fields) => {
			if (!err) {
				res.json({ status: 'multa Deleted' })
			} else {
				console.log(err)
			}
		}
	)
})

// INSERT An personas
router.post('/personas', (req, res) => {
	const { identificacion, nombre, telefono, direccion, ciudad } = req.body
	const query = `INSERT INTO personas values (?,?,?,?,?)`
	mysqlConnection.query(
		query,
		[identificacion, nombre, telefono, direccion, ciudad],
		(err, rows, fields) => {
			if (!err) {
				res.json({ status: 'persona Saved' })
			} else {
				console.log(err)
			}
		}
	)
})
// INSERT An multa
router.post('/multas', (req, res) => {
	const { fecha, observacion, total_pagar, id_persona, placa_carro } = req.body
	const query = `INSERT INTO multas (fecha, observacion, total_pagar, id_persona, placa_carro) VALUES (?,?,?,?,?)`
	mysqlConnection.query(
		query,
		[fecha, observacion, total_pagar, id_persona, placa_carro],
		(err, rows, fields) => {
			if (!err) {
				res.json({ status: 'multa Saved' })
			} else {
				console.log(err)
			}
		}
	)
})

router.put('/personas/:id', (req, res) => {
	const { id } = req.params
	const { identificacion, nombre, telefono, direccion, ciudad } = req.body
	const query = `UPDATE personas SET identificacion=?, nombre=?, telefono=?, direccion=?, ciudad=? WHERE identificacion=${id}`
	mysqlConnection.query(
		query,
		[identificacion, nombre, telefono, direccion, ciudad],
		(err, rows, fields) => {
			if (!err) {
				res.json({ status: 'personas Updated' })
			} else {
				console.log(err)
			}
		}
	)
})
router.put('/multas/:id', (req, res) => {
	const { id } = req.params
	const { fecha, observacion, total_pagar, id_persona, placa_carro } = req.body
	const query = `UPDATE multas SET fecha=?, observacion=?, total_pagar=?, id_persona=?, placa_carro=? WHERE codigo=${id}`
	mysqlConnection.query(
		query,
		[fecha, observacion, total_pagar, id_persona, placa_carro],
		(err, rows, fields) => {
			if (!err) {
				res.json({ status: 'multas Updated' })
			} else {
				console.log(err)
			}
		}
	)
})

module.exports = router
