const getAllTasks = async (req, res) => {
  res.send('Get All Tasks')
}

const createTask = async (req, res) => {
  res.json({ data: req.body })
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
