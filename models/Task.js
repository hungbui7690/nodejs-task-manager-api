const mongoose = require('mongoose')

// (1)
const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please provide name'],
    trim: true,
    maxlength: [20, 'name cannot be more than 20 characters'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
})

// (2) /controllers
module.exports = mongoose.model('Task', taskSchema)
