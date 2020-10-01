const express = require('express')

const router = new express.Router()

const { getUser, addUser } = require('../controllers/user')

router.route('/user/find').get(getUser)
router.route('/user/add').get(addUser)

module.exports = router
