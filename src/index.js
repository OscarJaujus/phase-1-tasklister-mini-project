document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit', (event) => {
      event.preventDefault()
      handleToDo(event.target.newtask.value)
      form.reset()
  })

})

function handleToDo(todo) {

  let task = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click', (event) =>
      event.target.parentNode.remove()

  )

  btn.textContent = "  x"

  task.textContent = `   ${todo}`

  task.appendChild(btn)

  document.querySelector('#tasks').appendChild(task)

}
