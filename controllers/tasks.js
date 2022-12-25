const Task = require('../models/Task')

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({})
    res.status(200).json({ tasks })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const getTask = async (req, res) => {
  try {
    const { id } = req.params
    const task = await Task.findOne({ _id: id })

    if (!task) return res.status(404).json({ msg: `No task with id ${id}` })

    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

// (2) end >> postman >> pic: postman-update-delete
const updateTask = async (req, res) => {
  try {
    const { id } = req.params

    // update: need id + body
    const task = await Task.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    })

    if (!task) return res.status(404).json({ msg: `No task with id ${id}` })

    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

// (1)
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params
    const task = await Task.findOneAndDelete({ _id: id })

    if (!task) return res.status(404).json({ msg: `No task with id ${id}` })

    res.json({ success: 'success' })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

module.exports = { getAllTasks, createTask, updateTask, deleteTask, getTask }
