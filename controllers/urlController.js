const path = require('path')

const { ShortUrl } = require('../models')

const urlRe = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi

const urlController = {
  // create a new short url and add to DB
  async newShortUrl (req, res) {
    try {
      const originalUrl = req.query.url

      if (urlRe.test(originalUrl)) {
        const id = (Math.random() * 1000000 >> 0).toString()

        const data = await new ShortUrl({
          originalUrl: originalUrl,
          shortUrl: id
        }).save()

        return res.json(data)
      }

      res.status(400).json({ error: 'Bad url' })
    } catch (error) {
      res.status(500).send(error)
    }
  },

  async shortUrlRedirect (req, res) {
    const { shortUrl } = req.params

    try {
      // query the DB
      const shortUrlObj = await ShortUrl.findOne({ shortUrl })
      const re = /^(http|https):\/\//i

      if (re.test(shortUrlObj)) {
        return res.redirect(shortUrlObj.originalUrl)
      }

      // in case the url doesn't have http
      return res.redirect(`http://${shortUrlObj.originalUrl}`)
    } catch (error) {
      // send index.html if no link found
      return res.redirect('/')
    }
  }
}

module.exports = urlController
