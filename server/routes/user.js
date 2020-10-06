const express = require('express')

const router = new express.Router()

const { getUser, addUser, getMyAuctions } = require('../controllers/user')

router.route('/user/find').get(getUser)
router.route('/user/add').get(addUser)
router.route('/user/auctions/my').get(getMyAuctions)

module.exports = router
