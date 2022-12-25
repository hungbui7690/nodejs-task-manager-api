// (3)
const Task = require('../models/Task')

const getAllTasks = async (req, res) => {
  res.send('Get All Tasks')
}

// (4) postman >> pic: model-createTask
const createTask = async (req, res) => {
  const task = await Task.create(req.body)

  res.json({ task })
}
const updateTask = async (req, res) => {
  res.json({ id: req.params.id })
}
const deleteTask = async (req, res) => {
  res.json({ id: req.params.id })
}
const getTask = async (req, res) => {
  res.json({ id: req.params.id })
}

module.exports = { getAllTasks, createTask, updateTask, deleteTask, getTask }
