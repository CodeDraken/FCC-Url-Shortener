console.log(process.env.NODE_ENV)

module.exports = {
  // changes if prod or dev
  siteUrl: process.env.NODE_ENV
  ? 'url'
  : 'http://localhost:3000/'
}
