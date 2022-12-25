const express = require('express')
const router = express.Router()

// (3)
const {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  getTask,
} = require('../controllers/tasks')

// (4) app.js
router.route('/').get(getAllTasks)
router
  .route('/:id')
  .get(getTask)
  .post(createTask)
  .patch(updateTask)
  .delete(deleteTask)

module.exports = router
