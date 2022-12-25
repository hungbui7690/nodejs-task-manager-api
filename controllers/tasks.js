const Task = require('../models/Task')

// (2)
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({})
    res.status(200).json({ tasks })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

// (3)
const getTask = async (req, res) => {
  const { id } = req.params
  const task = await Task.findOne({ _id: id })

  if (!task) return res.status(404).json({ msg: `No task with id ${id}` })

  res.json({ task })
}

// (1) setup try/catch
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}
const updateTask = async (req, res) => {
  res.json({ id: req.params.id })
}
const deleteTask = async (req, res) => {
  res.json({ id: req.params.id })
}

module.exports = { getAllTasks, createTask, updateTask, deleteTask, getTask }
