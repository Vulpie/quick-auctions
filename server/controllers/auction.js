const { v4: uuidv4 } = require('uuid')
const client = require('../db/redis')
const { dateToString } = require('../helpers/date')

exports.newAuction = async (req, res) => {
	try {
		const auction_name = 'To Sleep in a Sea of Stars by Christopher Paolini'
		const auction_price = '39.99'
		const auction_created_at = dateToString()
		const owner = req.user.sub
		console.log('createdAt', auction_created_at)
		const id = uuidv4()

		client.hmset(
			id,
			['name', auction_name, 'price', auction_price, 'owner', owner],
			function (err, data) {
				if (err) console.log(err)

				console.log(data)
			}
		)

		res.json('ok')
	} catch (error) {
		console.log(error)
		res.json('nie ok')
	}
}

// exports.getUserAuctions = async (req,res) => {
// 	try {
// 		const owner = req.user.sub
// 		client.hgetall()
// 	} catch (error) {
// 		console.log(error)
// 		res.json('nie ok')
// 	}
// }
