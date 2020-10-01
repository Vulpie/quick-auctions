const express = require('express')
require('./db/redis')
const app = express()

const UserRouter = require('./routes/user')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(UserRouter)
module.exports = app
