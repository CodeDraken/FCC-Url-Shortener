const urlController = require('../controllers/urlController')

module.exports = app => {
  // use * to avoid issues with urls
  app.get('/new/:urlToShorten(*)?', urlController.newShortUrl)
}
