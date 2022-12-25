const notFound = (req, res) => {
  res.status(404).send('Route does not exist')
}

// (1) app.js
module.exports = notFound
