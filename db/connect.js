const mongoose = require('mongoose')

mongoose.set('strictQuery', true)

const connectDB = (url) => {
  return mongoose.connect(url)
}

// (1) app.js
module.exports = connectDB
