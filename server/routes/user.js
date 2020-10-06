const express = require('express')

const router = new express.Router()

const {
	getUser,
	addUser,
	getMyAuctions,
	getMyItems,
} = require('../controllers/user')

router.route('/user/find').get(getUser)
router.route('/user/add').get(addUser)
router.route('/user/auctions/my').get(getMyAuctions)
router.route('/user/items/my').get(getMyItems)

module.exports = router
