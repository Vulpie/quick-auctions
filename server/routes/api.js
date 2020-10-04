const express = require('express')

const router = new express.Router()

const { getLatestAuctions } = require('../controllers/api')

router.route('/api/auctions/latest').get(getLatestAuctions)

module.exports = router
