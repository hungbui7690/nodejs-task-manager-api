const express = require('express')
const router = express.Router()

const { getAllTasks } = require('../controllers/tasks')

router.route('/').get(getAllTasks)

// (2)
module.exports = router
