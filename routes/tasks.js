const express = require('express')
const router = express.Router()

const {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  getTask,
} = require('../controllers/tasks')

router.route('/').get(getAllTasks)
router
  .route('/:id')
  .get(getTask)
  .post(createTask)
  .patch(updateTask)
  .delete(deleteTask)

module.exports = router
