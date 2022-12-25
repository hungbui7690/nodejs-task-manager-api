const Task = require('../models/Task')

// (5) import + use asyncWrapper in all functions >> create /middleware/error-handler
const asyncWrapper = require('../middleware/async')

// (10)
const { createCustomError, CustomAPIError } = require('../errors/custom-error')

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({})
  res.status(200).json({ tasks })
})

const getTask = asyncWrapper(async (req, res) => {
  const { id } = req.params
  const task = await Task.findOne({ _id: id })

  // (11) end
  if (!task) {
    return next(createCustomError(`No task with id ${id}`), 404)
  }

  res.status(200).json({ task })
})

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body)
  res.status(201).json({ task })
})

const updateTask = asyncWrapper(async (req, res) => {
  const { id } = req.params

  const task = await Task.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  })

  if (!task) {
    return next(createCustomError(`No task with id ${id}`), 404)
  }

  res.status(200).json({ task })
})

const deleteTask = asyncWrapper(async (req, res) => {
  const { id } = req.params
  const task = await Task.findOneAndDelete({ _id: id })

  if (!task) {
    return next(createCustomError(`No task with id ${id}`), 404)
  }

  res.json({ success: 'success' })
})

module.exports = { getAllTasks, createTask, updateTask, deleteTask, getTask }
