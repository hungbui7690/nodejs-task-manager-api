const express = require('express')
const app = express()

// (3)
const tasksRouter = require('./routes/tasks')

// (4) after this, postman >> check pic: postman-basic-routes
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
