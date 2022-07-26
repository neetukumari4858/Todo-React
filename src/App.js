import { useState } from 'react'
import './App.css'

function App() {
  const [Input, setInput] = useState('')
  const [todo, setTodo] = useState([])
  const addTodoHandler = () => {
    if (Input) {
      const addTodo = todo.find((item) => item === Input)
      if (addTodo) {
        setTodo([...todo])
      } else {
        setTodo([...todo, Input])
      }
    }
    setInput('')
  }
  const deleteHandler = (index) => {
    todo.splice(index, 1)
    setTodo([...todo])
  }
  return (
    <div className="App">
      <h1 className="todo_heading">Todo List</h1>
      <div className="container">
        <div className="input_container">
          <input
            value={Input}
            placeholder="Enter your Task"
            className="todo_input"
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="add_task_btn" onClick={addTodoHandler}>
            Add task
          </button>
        </div>

        <div className="todo_item_div">
          {todo.map((Item, index) => {
            return (
              <div className="todo_Item">
                <p key={index} className="paragraph">
                  {Item}
                </p>
                <div>
                  <button
                    className="delete_btn"
                    onClick={(index) => deleteHandler(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App