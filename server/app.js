const express = require('express')
const jwtCheck = require('./auth/auth')
//require('./db/redis')
const app = express()

const UserRouter = require('./routes/user')
const APIRouter = require('./routes/api')

app.use(jwtCheck)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.get('/authorized', function (req, res) {
//     res.json('Secured Resource')
// })

app.use(UserRouter)
app.use(APIRouter)

module.exports = app
