const { CustomAPIError } = require('../errors/custom-error')

// === (6)
const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err)
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: 'Something went wrong' })
  }

  return res
    .status(err.status)
    .json({ msg: `Something went wrong, please try again` })
}

// === (7) app.js
module.exports = errorHandlerMiddleware
