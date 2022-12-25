const { CustomAPIError } = require('../errors/custom-error')

// === (6)
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.msg })
  }

  return res.status(err.status).json({ msg: err.msg })
}

// === (7) app.js
module.exports = errorHandlerMiddleware
