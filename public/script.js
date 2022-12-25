const tasksDOM = document.querySelector('.tasks')
const loading = document.querySelector('.loading-text')
const form = document.querySelector('.task-form')
const taskInput = document.querySelector('.task-input')
const formAlert = document.querySelector('.form-alert')

const showTasks = async () => {
  loading.style.visibility = 'visible'

  try {
    const {
      data: { tasks },
    } = await axios.get('/api/v1/tasks')

    if (tasks.length < 1) {
      tasks.innerHTML = '<h5 class="empty-list">No tasks in your list</h5>'
      loading.style.visibility = 'hidden'
      return
    }

    const newTasks = tasks
      .map((task) => {
        const { _id: id, name, completed } = task

        return `
         <div class="single-task ${completed && 'task-completed'}">
          <h5>
            <span><i class="far fa-check-circle"></i></span>${name}
          </h5>
          <div class="task-links">
            <a href="./editTask.html?id=${id}" class="edit-link">
              <i class="fas fa-edit"></i>
            </a>
            <button type="button" class="delete-btn" data-id="${id}">
              <i class="fas fa-trash"></i>
            </button>
          </div>
         </div>
      `
      })
      .join('')

    tasksDOM.innerHTML = newTasks
  } catch (error) {
    tasksDOM.innerHTML =
      '<h5 class="empty-list">There was an error, please try later....</h5>'
  }
  loading.style.visibility = 'hidden'
}

showTasks()

tasksDOM.addEventListener('click', async (e) => {
  const trashIcon = e.target // trash icon >> <i/>
  if (trashIcon.parentElement.classList.contains('delete-btn')) {
    loading.style.visibility = 'visible'
    const id = trashIcon.parentElement.dataset.id
    console.log(id)
    try {
      await axios.delete(`/api/v1/tasks/${id}`)
      showTasks()
    } catch (error) {
      console.log(error)
    }
  }
  loading.style.visibility = 'hidden'
})

// create task
form.addEventListener('submit', async (e) => {
  e.preventDefault()
  const name = taskInput.value

  try {
    await axios.post('/api/v1/tasks', { name })
    showTasks()
    taskInput.value = ''
    formAlert.style.display = 'block'
    formAlert.textContent = `success, task added`
    formAlert.classList.add('text-success')
  } catch (error) {
    formAlert.style.display = 'block'
    formAlert.innerHTML = `error, please try again`
  }
  setTimeout(() => {
    formAlert.style.display = 'none'
    formAlert.classList.remove('text-success')
  }, 3000)
})
