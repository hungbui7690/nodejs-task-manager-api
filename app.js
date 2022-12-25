require('dotenv').config()
const connectDB = require('./db/connect')

const express = require('express')
const app = express()
const tasksRouter = require('./routes/tasks')

// static asset
app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1/tasks', tasksRouter)

app.get('/', (req, res) => {
  res.send(`
  <h1>Task Manager API</h1>
 `)
})

/*
==============================================
SERVER SETUP
==============================================
*/
const port = 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Server is listening on port ${port}...`))
  } catch (error) {
    console.log(error)
  }
}

start()
