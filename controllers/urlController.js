const urlController = {
  newShortUrl: (req, res) => {
    const urlToShorten = req.query.url
    res.json({ urlToShorten })
  }
}

module.exports = urlController
