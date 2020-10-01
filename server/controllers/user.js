const client = require('../db/redis')

exports.getUser = (req, res) => {
	const id = 0
	client.hgetall(id, (err, user) => {
		if (err) {
			console.log(err)
		} else if (!user) {
			console.log('User does not exist')
		} else {
			console.log('1')
			console.log(user)
		}
	})
}

exports.addUser = (req, res) => {
	const id = 0
	client.hmset(
		id,
		[
			'first_name',
			'Filip',
			'last_name',
			'Wojtas',
			'email',
			'jaaaa2@gmail.com',
		],
		(err, reply) => {
			if (err) {
				console.log(err)
			} else {
				console.log(reply)
			}
		}
	)
}
