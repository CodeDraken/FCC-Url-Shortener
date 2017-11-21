// urlRoutes handles creating new short urls

const urlController = require('../controllers/urlController')
const express = require('express')
const urlRouter = express.Router()

// use * to avoid issues with urls
urlRouter.get('/new/:urlToShorten(*)?', urlController.newShortUrl)

module.exports = urlRouter

// module.exports = app => {
  // use * to avoid issues with urls
  // app.get('/new/:urlToShorten(*)?', urlController.newShortUrl)
// }
