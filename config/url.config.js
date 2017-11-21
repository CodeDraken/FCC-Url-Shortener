console.log(process.env.NODE_ENV)

module.exports = {
  // changes if prod or dev
  siteUrl: process.env.NODE_ENV
  ? 'https://swamp-door.glitch.me/'
  : 'http://localhost:3000/'
}
