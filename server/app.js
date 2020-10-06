const express = require('express')
const jwtCheck = require('./auth/auth')
require('./db/redis')
const app = express()

const UserRouter = require('./routes/user')
const APIRouter = require('./routes/api')
const AuctionRouter = require('./routes/auction')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes without authentication required
app.use(APIRouter)

app.use(jwtCheck)

// Routes with authentication required
app.use(UserRouter)
app.use(AuctionRouter)

module.exports = app
