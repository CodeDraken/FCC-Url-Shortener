const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

mongoose.Promise = global.Promise

const app = express()

// 3rd party middlewares
app.use(cors())
app.use(bodyParser.json())
app.use(express.static(`${__dirname}/public`))

// routes
app.use(require('./routes/urlRoutes'))

// require('./routes/urlRoutes')(app)

module.exports = app
