const express = require('express')
const jwtCheck = require('./auth/auth')
//require('./db/redis')
const app = express()

const UserRouter = require('./routes/user')
const APIRouter = require('./routes/api')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes without authentication required
app.use(APIRouter)

app.use(jwtCheck)

// Routes with authentication required
app.use(UserRouter)

module.exports = app
