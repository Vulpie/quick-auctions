const express = require('express')

const router = new express.Router()

const { newAuction } = require('../controllers/auction')

router.route('/auction/new').post(newAuction)

module.exports = router
