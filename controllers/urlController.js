const { ShortUrl } = require('../models')

const urlRe = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi

const urlController = {
  newShortUrl: (req, res) => {
    const urlToShorten = req.query.url

    if (urlRe.test(urlToShorten)) {
      res.json({ urlToShorten })
    }

    res.status(400).json({ error: 'Bad url' })
  }
}

module.exports = urlController
