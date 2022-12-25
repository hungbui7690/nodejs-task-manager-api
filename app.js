const express = require('express')
const app = express()
const tasksRouter = require('./routes/tasks')

// (5) setup postman >> pic: all-routes
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
app.listen(port, console.log(`Server is listening on port ${port}...`))
