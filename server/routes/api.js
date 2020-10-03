const express = require('express')

const router = new express.Router()

const { checkAPI } = require('../controllers/api')

router.route('/api/check').get(checkAPI)

module.exports = router
